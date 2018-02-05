// import Form from '../../src/components/Form';

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
      res.json(response.data);
    })
    .catch(console.log);
};

module.exports = {
  getChars1: getChars1,
  arrayDelete: arrayDelete,


};