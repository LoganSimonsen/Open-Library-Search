const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const { getChars1 } = require(`${__dirname}/controllers/mainCtrl`);


app.get("/api/test1", getChars1);
app.post("/api/test1", getChars1)



app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});