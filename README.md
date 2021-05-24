# REST API - NodeJS, ExpressJS y Firebase de Google

**Back-End Challenge**

La REST API se podrá consumir directamente desde el servicio con la "Function" alojada y desplegada en "Firebase de Google Cloud", cuya URL es:
```
https://us-central1-siempre-en-casa-f035d.cloudfunctions.net/app/api/findTwoBeers
```

De otro modo, se podrá ejecutar localmente como se detalla a continuación.


## Comenzando 🚀

Estas instrucciones permitirán obtener el proyecto en funcionamiento en una máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos 📋

Herramientas necesarias para instalar el software y cómo instalarlas:

```
NodeJS: Versión 14 o superior.
Firebase: Tools, Admin y Functions.
```

### Instalación 🔧

Una vez instalado NodeJS v14 o superior, ejecutar en una CLI posicionándose en la raíz del proyecto y ejecutar los siguientes comandos:

```
1) npm i -g firebase-tools
2) firebase login (autenticarse con cuenta Gmail)
3) npm i firebase-admin
4) npm i firebase-functions
5) firebase serve
```

Mediante estos comandos, se disponibilizará el servicio localmente y se podrán realizar las pruebas.

## Pruebas manuales ⚙️

Enviar una petición POST a la URL:

```
http://localhost:5000/siempre-en-casa-f035d/us-central1/app/api/findTwoBeers
```

Por ejemplo, se puede realizar con Postman Agent configurando el "Headers" en "Content-Type: application/json" y enviando el JSON dentro del "Body".


## Pruebas automatizadas ⚙️

El código referido a las pruebas unitarias y de integración se podrá observar en el directorio "/functions/tests/".

El resultado se observará ejecutando el comando:
```
npm test
```

## Cobertura :bar_chart:

La cobertura de dichas pruebas se podrá observar en la página html: "/coverage/lcov-report/index.html".

O bien, ejecutando el siguiente comando:

```
npm run coverage
```

## Complejidad de tiempo y espacio :chart_with_upwards_trend:

Debido a que se recorre el array "beers" una única vez, la complejidad de tiempo y espacio es:
```
 O(n)
```

## Dependencias 🛠️

* Firebase-admin
* Firebase-functions
* Express
* Chai
* Mocha
* Nyc
* Supertest
* Cors

## Autor ✒️

* **Guido Cohen Semag** - [guidocohen](https://github.com/guidocohen)
