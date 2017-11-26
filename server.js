const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const apiKey = 'XdOHSc8fKhMKidPu2HWqCZmMy9OxtCJamGC580Bi';
const fields = `fields=${school.name},2015.aid.median_debt.completers.overall,2015.cost.tuition.in_state`;
const requestUrl = `https://api.data.gov/ed/collegescorecard/v1/schools?&api_key=${apiKey}&${fields}`;
// Send every request to the React app
// Define any API routes before this runs
const request = require('request');

// app.get('/school', function(req, res) {
//   request(requestUrl + "&school.name=" + req.query["school.name"], function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       var json = JSON.parse(body);
//       console.log(json);
//       res.send(json);
//     }
//     else {
//       console.log("There was an error: ") + response.statusCode;
//       console.log(body);
//     }
//   })
// });

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
