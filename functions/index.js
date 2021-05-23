const functions = require("firebase-functions");
const express = require('express');
const admin = require('firebase-admin');

const app = express();

serviceAccount = './permissions.json';
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://siempre-en-casa-f035d.firebaseio.com"
});

app.get('/hello-world', (req, res) => {
    res.status(200).json({ message: 'Hello world' });
});

const products = require('./routes/products');
app.use(products);

exports.app = functions.https.onRequest(app);