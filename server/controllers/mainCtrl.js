let creatorName = [];

const axios = require("axios");

const getSubject = (req, res, next) => {
  console.log("params", req.params);
  console.log("body", req.body);
  axios
    .get(
      "http://openlibrary.org/subjects/" +
        req.body.temp123 +
        ".json?details=true"
    )
    .then(response => {
      res.json(response.data);
    })
    .catch(console.log);
};

const arrayDelete = (req, res, next) => {
  axios
    .get("http://openlibrary.org/search.json?title=how+to+code/data/data/0")
    .then(response => {
      res.json(response.data.body);
    })
    .catch(console.log);
};

const postMan = (req, res) => {
  creatorName.push(firstName.req.body, lastname.req.body);
  res.status(200).send(creatorName);
  console.log(creatorName);
};

module.exports = {
  getSubject: getSubject,
  arrayDelete: arrayDelete,
  postMan: (req, res) => {
    const { firstName, lastName } = req.body;
    creatorName.push({ firstName, lastName });
    res.status(200).send(creatorName);
  }
};
