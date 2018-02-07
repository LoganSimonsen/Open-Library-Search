let creatorName = [];

const axios = require("axios");


const getChars1 = (req, res, next) => {
  axios.get('http://openlibrary.org/search.json?title=The+Last').then(response => {
    // console.log(response.data.docs);
      res.json(response.data.docs);
    })
    .catch(console.log);
};

const arrayDelete = (req, res, next) => {
  axios.get('http://openlibrary.org/search.json?title=how+to+code/data/data/0').then(response => {
    // console.log(response.data.docs);
      res.json(response.data.body);
    })
    .catch(console.log);
};

const postMan = (req, res) => {
  creatorName.push(firstName.req.body, lastname.req.body);
  res.status(200).send( creatorName );
  console.log(creatorName);
}




module.exports = {
  getChars1: getChars1,
  arrayDelete: arrayDelete,
  postMan: (req, res) => {
    const { firstName, lastName } = req.body;
    creatorName.push({ firstName, lastName });
    res.status(200).send(creatorName);
  },

}