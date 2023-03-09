class Github {

  constructor(client) {
    this.client = client;
    this.data = {}
  }

  fetch(path) {
    this.client.fetchRepositoryData(path, (parsedResponse) => {
      this.data = parsedResponse;
    });
    
  }

  getRepoData() {
    return this.data;
  }
}

module.exports = Github;