const { get } = require("callback-fetch");

const fetchRepositoryInfo = (url, callback) => {
  get(`https://api.github.com/repos/${url}`, callback);
};

module.exports = fetchRepositoryInfo

// const fetchRepositoryInfo = require('./fetchRepositoryInfo');

// fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
//   console.log(JSON.parse(receivedResponse));
// });
