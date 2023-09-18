const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  fs.writeFile(filePath, body, { encoding: 'utf-8' }, function (error) {
    if (error) {
      console.error(error);
      return;
    }

    console.log(`Saved response body from ${url} to ${filePath}`);
  });
});
