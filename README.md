CRUD Firebase REST API

La complejidad de tiempo y espacio es O(n), debido a que se recorre el array "beers" 1 única vez.

La REST API se podrá ejecutar mediante una CLI a través del comando "firebase serve", el cual disponibilizará el servicio y se podrá realizar una petición con el método POST a la URL: http://localhost:5000/siempre-en-casa-f035d/us-central1/app/api/findTwoBeers 

O bien, se podrá utilizar directamente el servicio con la Function alojada en Firebase de Google Cloud, cuya URL es: https://us-central1-siempre-en-casa-f035d.cloudfunctions.net/app/api/findTwoBeers