#!/usr/bin/node

const fs = require('fs');
const process = require('process');

// Check if the file path is provided as the first argument
if (process.argv.length < 3) {
  console.log('Usage: ./read_file.js <file_path>');
  process.exit(1);
}

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
