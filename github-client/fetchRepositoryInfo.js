const { get } = require("callback-fetch");

const fetchRepositoryInfo = (url, callback) => {
  get(`https://api.github.com/repos/${url}`, (response) => {
    let responseObject = JSON.parse(response);
    callback(responseObject);
  });
};

module.exports = fetchRepositoryInfo

// In node

// const fetchRepositoryInfo = require('./fetchRepositoryInfo');

// fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
//   console.log(receivedResponse);
// });


