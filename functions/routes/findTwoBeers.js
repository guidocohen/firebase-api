const { Router } = require('express');
const router = Router();

const findTwoBeers = (beersJSON, targetJSON) => {
    const lookup = {};
    console.log(beersJSON);
    const beers = JSON.parse(beersJSON);
    console.log(beers);
    const target = parseInt(targetJSON);

    for (const [index, value] of beers.entries()) {
        if ((target - value) in lookup) {
            return [lookup[target - value], index];
        }
        lookup[value] = index;
    };

    return [];
}

const response = (req, res) => {
    try {
        const { beers, target } = req.body;
        if (beers && target) {
            const indexList = findTwoBeers(beers, target);
            res.status(200).json({ index: indexList });
        } else {
            res.status(400).send('Petición no reconocida. Por favor, ingrese una lista IBU (beers) y su objetivo (target)');
        }
    } catch (error) {
        return res.status(500).send("Server error: " + error);
    }
};

router.post('/', response);

module.exports = router;