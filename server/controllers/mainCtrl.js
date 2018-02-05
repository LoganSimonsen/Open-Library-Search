// import Form from '../../src/components/Form';

const axios = require("axios");



const getChars1 = (req, res, next) => {
  axios.get('http://openlibrary.org/search.json?title=how+to+code').then(response => {
    // console.log(response.data.docs);
      res.json(response.data.docs);
    })
    .catch(console.log);
};

module.exports = {
  getChars1: getChars1,


};