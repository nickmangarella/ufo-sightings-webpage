// From data.js
var tableData = data;

// Loop through `data` and console.log each UFO sighting object
function displayTable(ufoSighting) {

    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // Append one table row for each UFO sighting object
    var row = tbody.append("tr");

    // For each UFO sighting value append 1 cell
    Object.entries(ufoSighting).forEach(function([key,value]) {
        var cell = row.append("td");

        // Update each cell's text with UFO sighting values
        cell.text(value);
    });
}

// Display the full data table
tableData.forEach(displayTable);

// Select the form and button
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Event handlers for clicking the button or pressing the enter key
button.on("click", runFilter);
form.on("submit", runFilter);

// Function to run both events
function runFilter() {

    // Remove the full data table
    d3.select("tbody").html("");
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    // Filter the data table by value selected
    var filteredData = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredData);

    // Display the filtered table data
    filteredData.forEach(displayTable);
}


