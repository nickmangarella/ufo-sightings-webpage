// From data.js
var tableData = data;

// Loop through each UFO sighting object in the data
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
form.on("change", runFilter);

// Function to run both events
function runFilter() {

    // Remove the full data table
    d3.select("tbody").html("");
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputDates = d3.select("#datetime");
    var inputCities = d3.select("#city");
    var inputStates = d3.select("#state");
    var inputCountries = d3.select("#country");
    var inputShapes = d3.select("#shape")

    // Get the value property of the input element
    var inputDate = inputDates.property("value");
    var inputCity = inputCities.property("value");
    var inputState = inputStates.property("value");
    var inputCountry = inputCountries.property("value");
    var inputShape = inputShapes.property("value");

    // Log the elements and values
    console.log(inputDates);
    console.log(inputCities);
    console.log(inputStates);
    console.log(inputCountries);
    console.log(inputShapes);
    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);

    // Filter the data table by value selected
    var filteredData = tableData.filter(data => 
        data.datetime === inputDate && 
        data.city === inputCity && 
        data.state === inputState && 
        data.country === inputCountry && 
        data.shape === inputShape);

    // Log the filtered table data
    console.log(filteredData);

    // Display the filtered table data
    filteredData.forEach(displayTable);
}


