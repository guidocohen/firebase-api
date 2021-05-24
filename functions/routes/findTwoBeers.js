const { Router } = require('express');
const router = Router();

const findTwoBeers = (beersJSON, targetJSON) => {
    const lookup = {};
    const beers = JSON.parse(beersJSON);
    const target = parseInt(targetJSON);
    const beersEnumerated = beers.entries(); // Entries se debe llamar luego de parsear al tipo Array (dentro de la func. findTwoBeers)

    for (const [index, value] of beersEnumerated) {
        const diff = target - value;
        if (diff in lookup) {
            return [lookup[diff], index];
        }
        lookup[value] = index;
    };

    return [];
}

const validateNotPositiveBeers = (beersJSON) => {
    const beers = JSON.parse(beersJSON);
    return beers.some((b) => b <= 0);
};

const handler = (req, res) => {
    try {
        const { beers, target } = req.body;
        if (beers && target) {
            if (validateNotPositiveBeers(beers))
                return res.status(400).send('Petición fallida. Por favor ingrese una lista IBU (beers) con valores únicamente positivos.');
            const indexList = findTwoBeers(beers, target);
            res.status(200).json({ index: indexList });
        } else {
            res.status(400).send('Petición no reconocida. Por favor ingrese una lista IBU (beers) y su objetivo (target).');
        }
    } catch (error) {
        return res.status(500).send("Server error: " + error);
    }
};

router.post('/', handler);

// Módulos y funciones exportadas
module.exports = router;
module.exports.findTwoBeers = findTwoBeers;
module.exports.validateNotPositiveBeers = validateNotPositiveBeers;