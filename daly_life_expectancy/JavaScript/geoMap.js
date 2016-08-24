var format = function(d) {
    return d3.format(',.02f')(d) + ' Years';
}

var map0 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2000 [YR2000]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map1 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2001 [YR2001]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map2 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2002 [YR2002]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map3 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2003 [YR2003]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map4 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2004 [YR2004]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map5 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2005 [YR2005]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map6 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2006 [YR2006]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map7 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2007 [YR2007]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map8 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2008 [YR2008]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map9 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2009 [YR2009]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map10 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2010 [YR2010]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map11 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2011 [YR2011]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map12 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2012 [YR2012]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map13 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2013 [YR2013]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map14 = d3.geomap.choropleth()
    .geofile('Data/Country/countries.json')
    .column("2014 [YR2014]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);


d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map0')
        .datum(data)
        .call(map0.draw, map0);
});

d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map1')
        .datum(data)
        .call(map1.draw, map1);
});

d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map2')
        .datum(data)
        .call(map2.draw, map2);
});

d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map3')
        .datum(data)
        .call(map3.draw, map3);
});

d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map4')
        .datum(data)
        .call(map4.draw, map4);
});

d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map5')
        .datum(data)
        .call(map5.draw, map5);
});

d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map6')
        .datum(data)
        .call(map6.draw, map6);
});

d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map7')
        .datum(data)
        .call(map7.draw, map7);
});

d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map8')
        .datum(data)
        .call(map8.draw, map8);
});

d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map9')
        .datum(data)
        .call(map9.draw, map9);
});

d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map10')
        .datum(data)
        .call(map10.draw, map10);
});

d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map11')
        .datum(data)
        .call(map11.draw, map11);
});

d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map12')
        .datum(data)
        .call(map12.draw, map12);
});

d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map13')
        .datum(data)
        .call(map13.draw, map13);
});

d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
    d3.select('#map14')
        .datum(data)
        .call(map14.draw, map14);
});

$(document).ready(function () {
  $('.group').hide();
  $('#option0').show();
  $('#selectMe').change(function () {
    $('.group').hide();
    $('#'+$(this).val()).show();
  })
});

var currentIndex = 0,
  items = $('.container div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.container div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});




// function iterateNumber() {
//     text = "";
//     var i;
//     for(i=0; i < 15; i++) {
//         text += "#map" + i
//     }
// }


// function switchVisible() {
//     if (document.getElementById('Div1')) {

//         if (document.getElementById('Div1').style.display == 'none') {
//             document.getElementById('Div1').style.display = 'block';
//             document.getElementById('Div2').style.display = 'none';
//         }
//         else {
//             document.getElementById('Div1').style.display = 'none';
//             document.getElementById('Div2').style.display = 'block';
//         }
//     }
// }

// var map3 = changeMap();

// function changeMap() {
//         if (document.getElementById("year-list").value.equals("2014 [YR2014]")) 
//         {
//             map2();
//         }
//         else if (document.getElementById("year-list").value.equals("2000 [YR2000]")
//         {
//             map();
//         }
//     }

// var format = function(d) {
//     return d3.format(',.02f')(d) + ' Years';
// }

// var year = 

// var selectedValue = d3.event.target.value;
// var select = selectedValue.toString()

// var map = d3.geomap.choropleth()
//     .geofile('Data/Country/countries.json')
//     .column(selectedValue)
//     .unitId('Country Code')
//     .colors(colorbrewer.PuBu[9])
//     .format(format)
//     .legend(true);

// d3.select("year-list").on("change", map2)

// d3.csv('Data/LifeExpectancy/Life_Expectancy.csv', function(error, data) {
//     d3.select('#map')
//         .datum(data)
//         .call(map.draw, map);
// });