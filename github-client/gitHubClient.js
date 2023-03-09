const { get } = require("callback-fetch");

class GithubClient {

  fetchRepositoryData(path, callback) {
    let url = `https://api.github.com/repos/${path}`;
    get(url, (response) => {
      let responseObject = JSON.parse(response);
      callback(responseObject);
    });
  };

}

module.exports = GithubClient;