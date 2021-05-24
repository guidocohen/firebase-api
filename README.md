Firebase REST API - NodeJS y ExpressJS

La complejidad de tiempo y espacio es O(n), debido a que se recorre el array "beers" una única vez.

La REST API se podrá consumir directamente desde el servicio con la "Function" alojada en "Firebase de Google Cloud", cuya URL es: https://us-central1-siempre-en-casa-f035d.cloudfunctions.net/app/api/findTwoBeers

O bien, se podrá ejecutar mediante una CLI a través del comando "firebase serve", el cual disponibilizará el servicio y se podrá realizar una petición con el método POST a la URL: http://localhost:5000/siempre-en-casa-f035d/us-central1/app/api/findTwoBeers 

Pasos para la ejecución local:
1) Tener instalado NodeJS v14 o superior.
2) Ejecutar en una CLI en la raíz del proyecto:
	2.1) "npm i -g firebase-tools".
	2.2) "firebase login" (autenticarse con cuenta Gmail).
	2.3) "npm i firebase-admin"
	2.4) "npm i firebase-functions"
	2.5) "firebase serve" (Inicializa: http://localhost:5000/siempre-en-casa-f035d/us-central1/app)
	2.5) Enviar una petición POST a http://localhost:5000/siempre-en-casa-f035d/us-central1/app/api/findTwoBeers por ejemplo con Postman configurando el "Headers" en "Content-Type: application/json".

Las pruebas unitarias y de integración se podrán observar en el directorio "/functions/tests" cuyo resultado se observará ejecutando el comando "npm test".

La cobertura de dichas pruebas se podrá observar en una página html "/coverage/lcov-report/index.html", o bien, ejecutando el comando "npm run coverage".



