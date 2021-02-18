// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Loop through `data` and console.log each UFO sighting object
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);

    // Append one table row for each UFO sighting object
    var row = tbody.append("tr");

    // Console.log each UFO sighting value and append 1 cell per UFO sighting value
    Object.entries(ufoSighting).forEach(function([key,value]) {
        var cell = row.append("td");

        // Update each cell's text with UFO sighting values
        cell.text(value);
    });
});
