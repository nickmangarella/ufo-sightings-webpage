# JavaScript-Challenge

## Description
Utilizing JavaScript and D3.js to display a table of UFO sightings data on a webpage that is filterable by date and another webpage filterable by date, city, state, country, and shape. 

## UFO-level-1

### app.js
Step 1:
* Created a reference to the data 
* Created a function called 'displayTable' to loop through each UFO sighting object and add the data to a table on the webpage
* Grabbed a reference to the table body
* Appended one table row for each UFO sighting
* Use Object.entries and created a function that appended cells for each UFO sighting value and updated each cell's text with those values
```
// From data.js
var tableData = data;

// Loop through each UFO sighting object in data.js
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
```

Step 2: 
* Called the 'displayTable' function to show the full data table upon visiting the webpage
* Selected the form and button tags of the HTMl page
* Created event handlers for clicking the filter table button or pressing enter after typing in a date to filter by.
```
// Display the full data table
tableData.forEach(displayTable);

// Select the form and button
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Event handlers for clicking the button or pressing the enter key
button.on("click", runFilter);
form.on("submit", runFilter);
```

Step 3:
* Created a function called 'runFilter' to filter the table data by the date selected for both events 
* Removed the full data table and prevent the page from refreshing
* Selected the input element and raw HTML node ("#datetime") for referencing to the webpage
* Grabbed the value property of the input element and console logged the elements and values
* Used the 'filter' function to filter the data table by the date selected and console logged the resulting data
* Called the 'displayTable' function to display the filtered table data on the webpage
```
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

    // Log the elements and values
    console.log(inputElement);
    console.log(inputValue);

    // Filter the data table by value selected
    var filteredData = tableData.filter(data => data.datetime === inputValue);

    // Log the filtered table data
    console.log(filteredData);

    // Display the filtered table data
    filteredData.forEach(displayTable);
}
```

## UFO-level-2

### app.js
Step 1:
* Created a reference to the data 
* Created a function called 'displayTable' to loop through each UFO sighting object and add the data to a table on the webpage
* Grabbed a reference to the table body
* Appended one table row for each UFO sighting
* Use Object.entries and created a function that appended cells for each UFO sighting value and updated each cell's text with those values
```
// From data.js
var tableData = data;

// Loop through each UFO sighting object in data.js
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
```

Step 2: 
* Called the 'displayTable' function to show the full data table upon visiting the webpage
* Selected the form and button tags of the HTMl page
* Created event handlers for clicking the filter table button or pressing enter after typing in a date to filter by.
```
// Display the full data table
tableData.forEach(displayTable);

// Select the form and button
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Event handlers for clicking the button or pressing the enter key
button.on("click", runFilter);
form.on("change", runFilter);
```

Step 3:
* Created a function called 'runFilter' to filter the table data by the date, city, state, country, and shape selected for both events 
* Removed the full data table and prevent the page from refreshing
* Selected the input elements and raw HTML nodes ("#datetime", "#city", "#state", "#country", "#shape") for referencing to the webpage
* Grabbed the value property of all the input elements and console logged the elements and values
* Used the 'filter' function to filter the data table by the date, city, state, country, and shape selected and console logged the resulting data
* Called the 'displayTable' function to display the filtered table data on the webpage
```
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
```
