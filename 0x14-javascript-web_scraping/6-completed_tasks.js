#!/usr/bin/node

const request = require('request');
const process = require('process');

// Check if the API URL is provided as the first argument
if (process.argv.length < 3) {
  console.log('Usage: ./count_completed_tasks.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

request.get(apiUrl, { json: true }, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Received status code ${response.statusCode}`);
  } else {
    const completedTasks = {};

    body.forEach(task => {
      if (task.completed) {
        if (completedTasks[task.userId]) {
          completedTasks[task.userId]++;
        } else {
          completedTasks[task.userId] = 1;
        }
      }
    });

    for (const userId in completedTasks) {
      console.log(`User ${userId} has completed ${completedTasks[userId]} tasks.`);
    }
  }
});
