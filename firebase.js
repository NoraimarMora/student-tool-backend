const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require('./studenttool-10aa1-firebase-adminsdk-dpovf-e03237dc55.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();
module.exports = db;