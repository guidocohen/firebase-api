const express = require('express');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

const app = express();
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://siempre-en-casa-f035d.firebaseio.com',
});

app.use('/api/findTwoBeers', require('./routes/findTwoBeers'));

exports.app = functions.https.onRequest(app);