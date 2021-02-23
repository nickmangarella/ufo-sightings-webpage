# JavaScript-Challenge

## Description
Utilizing JavaScript and D3.js to display a table of UFO sightings data on a webpage that is filterable by date. 

## UFO-level-1

### app.js
1. Created a reference to the data 
2. Created a function called displayTable to loop through each UFO sighting object
3. Grabbed a reference to the table body
4. Appended one table row for each UFO sighting
5. Created a function that appended cells for each UFO sighting value and updated the cell's text with those values
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

