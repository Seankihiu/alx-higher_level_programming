#!/usr/bin/node

const request = require('request');
const process = require('process');

// Check if the API URL is provided as the first argument
if (process.argv.length < 3) {
  console.log('Usage: ./count_wedge_antilles_movies.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];
const wedgeAntillesId = '18';

request.get(apiUrl, { json: true }, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Received status code ${response.statusCode}`);
  } else {
    let movieCount = 0;

    body.results.forEach(film => {
      if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeAntillesId}/`)) {
        movieCount++;
      }
    });

    console.log(movieCount);
  }
});
