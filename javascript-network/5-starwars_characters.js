const request = require("request");

const movieId = process.argv[2];

const url = `https://swapi.dev/api/films/${movieId}/`;

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  const movie = JSON.parse(body);

  movie.characters.forEach(function (characterUrl) {
    request(characterUrl, function (error, response, body) {
      if (error) {
        console.error(error);
        return;
      }

      const character = JSON.parse(body);

      console.log(character.name);
    });
  });
});
