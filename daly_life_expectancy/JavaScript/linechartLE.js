
// sets dimension and properties of the canvas
var margin = {top: 20, right: 40, bottom: 40, left: 90},
    width = 1000 - margin.left - margin.right,
    height = 540 - margin.top - margin.bottom;

// passing the Year in format of 'mon'
var parseYear = d3.time.format("%Y").parse;

// Set the ranges of the x and y scale
var x = d3.time.scale().range([0, width]);
// minimum is height and maximum is 0, meaning no space between the joining of the axis
var y = d3.scale.linear().range([height, 0]);

// Define the axes, using tick to pass the format of 'mon'
// place the axis on the "bottom"
var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").tickFormat(d3.time.format("%Y"));

// displays the value to 1 decimal place
var formatyAxis = d3.format('.0f');

// displays the value on the y variables and to 1 decimal place
var yAxis = d3.svg.axis().scale(y)
    .orient("left").tickFormat(formatyAxis).ticks(20);

// creates variable line for shop 1 and 2
var valueline = d3.svg.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.lifeExpectancy); });

    
// creates container for the svg
var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

// defining the tooltips
var div = d3.select("body").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);

//variables for the tooltips, storing the Strings
var incometext = "Years: ";
var decimaltext = "";

// reads in the data.csv and its attributes
d3.csv("/Users/i8rice/Documents/University/Monash University 2016/FIT5147 Data Exploration/Major Assignment/Data/LifeExpectancy.csv", function(error, data) {
    data.forEach(function(d) {
        d.Year = parseYear(String(d.Year));
        d.lifeExpectancy = +d.lifeExpectancy
    });

    // scales the x and y to fit the requirment of Year and shops
    x.domain(d3.extent(data, function(d) { return d.Year; }));
    y.domain([40, d3.max(data, function(d) { return Math.max(d.lifeExpectancy); }) + 1]);

    // Add the time-series line through the values for Shop 1
    svg.append("path")
        .attr("class", "line")
        .style("stroke", "lightblue")
        .attr("d", valueline(data));

    // Add the scatterplot for Shop 1
    svg.selectAll("dot")
        .data(data)
      .enter().append("circle")
        .attr("r", 3.5)
        .attr("cx", function(d) { return x(d.Year); })
        .attr("cy", function(d) { return y(d.lifeExpectancy); })
        .attr("fill", "blue")
        // displays box showing income when mouse hovers over
        .on("mouseover", function(d) {       
            div.transition()        
                .duration(200) // duration of the tooltip during first hover over     
                .style("opacity", .7);      
            div .html(incometext + "<br/>" + d3.round(d.lifeExpectancy, 2) + decimaltext) // displays the text "income: " and the value in 1 decimal place 
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY - 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(200) // duration of how long the tooltip lasts after hover off  
                .style("opacity", 0);   
        });
    

    // Adds in the x Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Adds in the y Axis
    svg.append("g") //groups class
        .attr("class", "y axis")
        .call(yAxis);

    // add main title to the graph
    // svg.append("text")
    //     .attr("x", (width / 2))
    //     .attr("y", 10)
    //     .attr("text-anchor", "middle")
    //     .style("font-size", "16px")
    //     .style("text-decoration", "underline")
    //     .text("Shops Income Over Period of 9 Years")

    // // add the label of the x axis
    // svg.append("text")
    //     .attr("x", (width / 2))
    //     .attr("y", height + margin.bottom)
    //     .style("text-anchor", "middle    //     .text("Year");

    // // add the label of the y axis
    // svg.append("text")
    //     .attr("x", 35 - margin.left)
    //     .attr("y", (height / 2))
    //     .attr("text-anchor", "middle")
    //     .text("Income")

});

