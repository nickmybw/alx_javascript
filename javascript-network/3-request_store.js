#!/usr/bin/node
const request = require("request");
const fs = require("fs");

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status Code ${response.statusCode}`);
    process.exit(1);
  }

  // Write the response body to the specified file
  fs.writeFile(filePath, body, { encoding: "utf-8" }, (writeError) => {
    if (writeError) {
      console.error(writeError);
      process.exit(1);
    }

    console.log(`Successfully saved the content to ${filePath}`);
  });
});
