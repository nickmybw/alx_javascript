const request = require("request");

const apiUrl = process.argv[2];
const characterId = 18;

let totalFilmsWithWedgeAntilles = 0;

function fetchFilms(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }

    if (response.statusCode !== 200) {
      console.error(`Error: Status Code ${response.statusCode}`);
      process.exit(1);
    }

    try {
      const filmsData = JSON.parse(body);
      const filmsWithWedgeAntilles = filmsData.results.filter((film) =>
        film.characters.includes(
          `https://swapi-api.alx-tools.com/api/people/${characterId}/`,
        ),
      );

      totalFilmsWithWedgeAntilles += filmsWithWedgeAntilles.length;

      if (filmsData.next) {
        fetchFilms(filmsData.next);
      } else {
        console.log(totalFilmsWithWedgeAntilles);
      }
    } catch (parseError) {
      console.error(`Error parsing JSON: ${parseError.message}`);
      process.exit(1);
    }
  });
}

fetchFilms(apiUrl);
