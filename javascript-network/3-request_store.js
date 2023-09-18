const request = require("request");
const fs = require("fs");

// Define an array of URLs to request
const urls = [
  "http://localhost:5050/route_0",
  "http://localhost:5050/route_1",
  "http://localhost:5050/route_2",
];

// Function to save the response body to a file
function saveResponseToFile(url, filePath) {
  request(url, (error, response, body) => {
    if (error) {
      console.error(`Error requesting URL: ${error.message}`);
      process.exit(1);
    }

    if (response.statusCode !== 200) {
      console.error(`Request failed with status code ${response.statusCode}`);
      process.exit(1);
    }

    fs.writeFileSync(filePath, body, "utf-8");
    console.log(`Saved response body from ${url} to ${filePath}`);
    console.log(`${body}\n(${body.length} chars long)`);
  });
}

// Loop through the URLs and save the responses to files
for (let i = 0; i < urls.length; i++) {
  const url = urls[i];
  const filePath = `file_${i}`;
  saveResponseToFile(url, filePath);
}
