const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const { getSubject } = require(`${__dirname}/controllers/mainCtrl`);
const { arrayDelete } = require(`${__dirname}/controllers/mainCtrl`);
const { postMan } = require(`${__dirname}/controllers/mainCtrl`);

app.post("/api/Subject", getSubject);
app.post("/api/post", postMan);
app.delete("/api/delete/:id", arrayDelete);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
