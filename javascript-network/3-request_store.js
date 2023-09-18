const request = require("request");
const fs = require("fs");

const url0 = "http://localhost:5050/route_0";
const url1 = "http://localhost:5050/route_1";
const url2 = "http://localhost:5050/route_2";

const file0 = "w_file_0";
const file1 = "w_file_1";
const file2 = "w_file_2";

const expected0 = "C is fun!\n";
const expected1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum sapien nec odio eleifend placerat. Maecenas a vehicula libero. Nullam lobortis tristique neque, id cursus ex porttitor eu. Nulla facilisi. Cras volutpat velit elit, bibendum pretium libero sagittis sed. Morbi eget augue pretium, porttitor orci varius, tincidunt arcu. Duis at magna nec augue lobortis hendrerit. Aliquam non augue semper, sollicitudin nulla ut, vehicula neque. Cras nec nunc sodales, efficitur purus in, elementum urna. Cras sed aliquet erat, nec facilisis dui.\n\nInteger vestibulum ultricies nibh. Cras consectetur dapibus lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a eleifend sapien. Proin in massa at odio pellentesque ullamcorper. Etiam bibendum vehicula lacus, vel tincidunt sem scelerisque in. Etiam maximus orci sit amet velit facilisis, et gravida nisl tempus. Pellentesque volutpat auctor elit...";
const expected2 = "";

request(url0, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  fs.writeFile(file0, body, { encoding: "utf-8" }, function (error) {
    if (error) {
      console.error(error);
      return;
    }

    fs.readFile(file0, { encoding: "utf-8" }, function (error, data) {
      if (error) {
        console.error(error);
        return;
      }

      if (data === expected0) {
        console.log(`Test case 0 passed: ${expected0}`);
      } else {
        console.error(`Test case 0 failed. Got ${data}, expected ${expected0}`);
      }
    });
  });
});

request(url1, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  fs.writeFile(file1, body, { encoding: "utf-8" }, function (error) {
    if (error) {
      console.error(error);
      return;
    }

    fs.readFile(file1, { encoding: "utf-8" }, function (error, data) {
      if (error) {
        console.error(error);
        return;
      }

      if (data === expected1) {
        console.log(`Test case 1 passed: ${expected1.substring(0, 50)}...`);
      } else {
        console.error(
          `Test case 1 failed. Got ${data.substring(
            0,
            50,
          )}..., expected ${expected1.substring(0, 50)}...`,
        );
      }
    });
  });
});

request(url2, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  fs.writeFile(file2, body, { encoding: "utf-8" }, function (error) {
    if (error) {
      console.error(error);
      return;
    }

    fs.readFile(file2, { encoding: "utf-8" }, function (error, data) {
      if (error) {
        console.error(error);
        return;
      }

      if (data === expected2) {
        console.log(`Test case 2 passed: ${expected2}`);
      } else {
        console.error(`Test case 2 failed. Got ${data}, expected ${expected2}`);
      }
    });
  });
});
