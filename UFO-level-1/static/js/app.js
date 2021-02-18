// From data.js
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

// Select the form and button
var form = d3.select("#form");
var button = d3.select("#button");

// Event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Function to run both events
function runEnter() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(table => table.datetime === inputValue);

    console.log(filteredData);
}


