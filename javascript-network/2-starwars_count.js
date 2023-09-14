const request = require("request");

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  const movies = JSON.parse(body).results;
  const wedgeMovies = movies.filter((movie) =>
    movie.characters.includes("https://swapi-api.alx-tools.com/api/people/18/"),
  );

  console.log(wedgeMovies.length);
});
