const request = require("request");

if (process.argv.length !== 3) {
  console.error("Usage: node 5-starwars_characters.js <Movie_ID>");
  process.exit(1);
}

const movieId = process.argv[2];

const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error requesting API: ${error.message}`);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Request failed with status code ${response.statusCode}`);
    process.exit(1);
  }

  try {
    const movieData = JSON.parse(body);
    const characters = movieData.characters;

    if (characters.length === 0) {
      console.log("No characters found for this movie.");
    } else {
      characters.forEach(async (characterUrl) => {
        try {
          const characterResponse = await new Promise((resolve, reject) => {
            request(characterUrl, (error, response, body) => {
              if (error) {
                reject(error);
              } else {
                resolve(body);
              }
            });
          });

          const characterData = JSON.parse(characterResponse);
          console.log(characterData.name);
        } catch (parseError) {
          console.error(`Error parsing character data: ${parseError.message}`);
        }
      });
    }
  } catch (parseError) {
    console.error(`Error parsing JSON response: ${parseError.message}`);
    process.exit(1);
  }
});
