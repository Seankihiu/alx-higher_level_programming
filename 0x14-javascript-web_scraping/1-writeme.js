#!/usr/bin/node

const fs = require('fs');
const process = require('process');

// Check if the file path and string are provided as arguments
if (process.argv.length < 4) {
  console.log('Usage: ./write_file.js <file_path> <string_to_write>');
  process.exit(1);
}

const filePath = process.argv[2];
const stringToWrite = process.argv[3];

fs.writeFile(filePath, stringToWrite, 'utf8', (err) => {
  if (err) {
    console.error(`Error writing to file: ${err.message}`);
  }
});
