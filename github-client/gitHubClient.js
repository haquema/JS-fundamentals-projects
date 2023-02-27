const { get } = require("callback-fetch");

class GitHubClient {

  fetchRepositoryData(path, callback) {
    let url = `https://api.github.com/repos/${path}`
    get(url, (response) => {
      let responseObject = JSON.parse(response);
      return callback(responseObject);
    });
  };

}

module.exports = GitHubClient;