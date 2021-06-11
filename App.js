const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => res.status(200).send({
  message: 'Hello World!',
}));

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
