#!/usr/bin/node

const request = require('request');
const process = require('process');

// Check if the movie ID is provided as the first argument
if (process.argv.length < 3) {
  console.log('Usage: ./get_star_wars_movie.js <movie_ID>');
  process.exit(1);
}

const movieID = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request.get(url, { json: true }, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Received status code ${response.statusCode}`);
  } else {
    console.log(body.title);
  }
});
