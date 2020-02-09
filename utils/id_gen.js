const { shows } = require("../src/data/shows");
const fs = require("fs");

var ID = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return Math.random()
    .toString(36)
    .substr(2, 9);
};

const showsId = shows.map(show => {
  show.id = ID();
  return JSON.stringify(show);
});

fs.writeFile("shows_wID.json", showsId, function(err) {
  if (err) throw err;
  console.log("Saved!");
});

console.log(shows);
