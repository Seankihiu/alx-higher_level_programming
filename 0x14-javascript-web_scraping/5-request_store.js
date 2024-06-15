#!/usr/bin/node

const request = require('request');
const fs = require('fs');
const process = require('process');

// Check if the URL and file path are provided as arguments
if (process.argv.length < 4) {
  console.log('Usage: ./save_webpage.js <URL> <file_path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    fs.writeFile(filePath, body, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing to file: ${err.message}`);
      }
    });
  }
});
