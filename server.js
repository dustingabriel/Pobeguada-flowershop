// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

// declare static path
let staticPath = path.join(__dirname, "Pobeguada-flowershop");
// initializing express.js

const app = express();

// middlewares
app.use(express.static(staticPath));
// routes
// home route
app.get("/",(req, res) => {
    res.sendFile(path.join(staticPath,"index.html"));
})

// 404 route
app.use((req, res) => {
    res.sendFile(path.join(staticPath,"404.html"))
})
app.listen(3000, () => {
    console.log('listening on port 3000.......');
})
