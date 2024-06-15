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

    // Helper function to print characters one by one
    const printCharacters = (index) => {
      if (index >= characters.length) {
        return; // Exit when all characters are printed
      }

      const characterUrl = characters[index];
      request.get(characterUrl, { json: true }, (error, response, body) => {
        if (error) {
          console.error(`Error: ${error.message}`);
        } else if (response.statusCode !== 200) {
          console.error(`Error: Received status code ${response.statusCode}`);
        } else {
          console.log(body.name); // Print character name
          printCharacters(index + 1); // Recursively print next character
        }
      });
    };

    // Start printing characters from index 0
    printCharacters(0);
  }
});
