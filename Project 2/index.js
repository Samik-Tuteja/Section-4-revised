require("es6-promise").polyfill();
require("isomorphic-fetch");
const yargs = require("yargs");

const command = yargs.argv._[0];
let params = yargs.argv;

if (params.name) {
  fetch(`https://api.github.com/users/${params.name}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(`Name: ${data.name || data.login}`);
      console.log(`location: ${data.location || "NA"}`);
      console.log(`Bio: ${data.bio || "NA"}`);
      console.log(`Followers: ${data.followers}`);
      console.log(`Following: ${data.following}`);
      console.log(`Repositories: ${data.public_repos}`);
    })
    .catch((err) =>
      console.log("Please enter a valid username in the given format")
    );
  fetch(`https://api.github.com/users/${params.name}/repos`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.map((repo) => repo.name));
    })
    .catch((err) =>
      console.log("Please enter a valid username in the given format")
    );
} else {
  console.log(
    "There was an error!! Write: node index --name=<your github username>"
  );
}
