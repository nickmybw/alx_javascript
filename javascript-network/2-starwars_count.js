const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const characterId = 18;

// Send a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Parse the JSON response
  const data = JSON.parse(body);

  // Filter movies that include Wedge Antilles
  const moviesWithWedgeAntilles = data.results.filter(movie =>
    movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
  );

  // Print the count of movies with Wedge Antilles
  console.log(moviesWithWedgeAntilles.length);
});
