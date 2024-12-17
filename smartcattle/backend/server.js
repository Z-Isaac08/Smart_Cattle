const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Création d'une instance d'application Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose
  .connect("mongodb://localhost:27017/BD_Smartcattle", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
 


// Démarrer le serveur
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
