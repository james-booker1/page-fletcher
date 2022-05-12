const request = require("request");
request("https://www.google.com/fdsafsafsa.html", (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body.length); // Print the HTML for the Google homepage.

  const fs = require("fs");

  const content = "Some content!";

  fs.writeFile(
    "/Users/jamesbooker/page-fletcher/page-fletcher/test.txt",
    content,
    (err) => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    }
  );
});
