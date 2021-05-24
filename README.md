Firebase REST API - NodeJS y ExpressJS

La complejidad de tiempo y espacio es O(n), debido a que se recorre el array "beers" una única vez.

La REST API se podrá consumir directamente desde el servicio con la "Function" alojada en "Firebase de Google Cloud", cuya URL es: https://us-central1-siempre-en-casa-f035d.cloudfunctions.net/app/api/findTwoBeers

O bien, se podrá ejecutar mediante una CLI a través del comando "firebase serve", el cual disponibilizará el servicio y se podrá realizar una petición con el método POST a la URL: http://localhost:5000/siempre-en-casa-f035d/us-central1/app/api/findTwoBeers 

Las pruebas unitarias y de integración se podrán observar en el directorio tests y ejecutando el comando npm test. 
La cobertura de dichas pruebas se podrá observar en una página html (lcov-report/index.html) dentro del directorio "coverage".
