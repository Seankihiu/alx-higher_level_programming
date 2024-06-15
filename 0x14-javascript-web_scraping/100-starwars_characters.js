#!/usr/bin/node
const request = require('request');
const process = require('process');

// Check if the movie ID is provided as the first argument
if (process.argv.length < 3) {
  console.log('Usage: ./print_star_wars_characters.js <Movie_ID>');
  process.exit(1);
}

const movieID = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request.get(apiUrl, { json: true }, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Received status code ${response.statusCode}`);
  } else {
    const characters = body.characters;
    
    characters.forEach(characterUrl => {
      request.get(characterUrl, { json: true }, (error, response, body) => {
        if (error) {
          console.error(`Error: ${error.message}`);
        } else if (response.statusCode !== 200) {
          console.error(`Error: Received status code ${response.statusCode}`);
        } else {
          console.log(body.name);
        }
      });
    });
  }
});
