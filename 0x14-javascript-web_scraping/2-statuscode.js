#!/usr/bin/node

const request = require('request');
const process = require('process');

// Check if the URL is provided as the first argument
if (process.argv.length < 3) {
  console.log('Usage: ./get_status_code.js <URL>');
  process.exit(1);
}

const url = process.argv[2];

request.get(url, (error, response) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
