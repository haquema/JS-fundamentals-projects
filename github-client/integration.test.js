const GithubClient = require('./githubClient');
const Github = require('./github');


describe("integration", () => {
  
  beforeEach(() => {
    client = new GithubClient();
    github = new Github(client);
  });

  it("fetches", async () => {
    await github.fetch('sinatra/sinatra');
    let result = await JSON.stringify(github.data);
    expect(typeof result).toBe("string");
    expect(result).toBe("{}");
  });

  xit("returns repo data", async () => {
    github.fetch('sinatra/sinatra');
    let result = github.getRepoData();
    expect(result).toBe("data correctly fetched and ready to return");
  });

})

