var stackedData = [{
    "key": "Ischaemic heart disease",
    "values": [
      [2000, 2322.5],
      [2012, 2342.1]
  ]
}, {
    "key": "Stroke",
    "values": [
      [2000, 2043.3],
      [2012, 1997.7]
  ]
}, {
    "key": "Trachea, bronchus, lung cancers",
    "values": [
      [2000, 492.8],
      [2012, 544.6]
  ]
}, {
    "key": "Chronic obstructive pulmonary disease",
    "values": [
      [2000, 1460.2],
      [2012, 1305.6]
  ]
}, {
    "key": "Alzheimer's disease and other dementias",
    "values": [
      [2000, 180.4],
      [2012, 257.3]
  ]
}, {
    "key": "Lower respiratory infections",
    "values": [
      [2000, 3402.0],
      [2012, 2075.7]
  ]
}, {
    "key": "Colon and rectum cancers",
    "values": [
      [2000, 230.8],
      [2012, 247.6]
  ]
}, {
    "key": "Diabetes mellitus",
    "values": [
      [2000, 719.5],
      [2012, 837.5]
  ]
}, {
    "key": "Hypertensive heart disease",
    "values": [
      [2000, 314.3],
      [2012, 330.8]
  ]
}, {
    "key": "Breast cancer",
    "values": [
      [2000, 239.2],
      [2012, 250.4]
  ]
}, {
    "key": "Self-harm",
    "values": [
      [2000, 729.4],
      [2012, 556.3]
  ]
}, {
    "key": "Cirrhosis of the liver",
    "values": [
      [2000, 531.7],
      [2012, 509.4]
  ]
}, {
    "key": "Pancreas cancer",
    "values": [
      [2000, 91],
      [2012, 108.7]
  ]
}, {
    "key": "Kidney diseases",
    "values": [
      [2000, 442.6],
      [2012, 419.6]
  ]
}, {
    "key": "Stomach cancer",
    "values": [
      [2000, 292.2],
      [2012, 259.7]
  ]
}, {
    "key": "Prostate cancer",
    "values": [
      [2000, 72.4],
      [2012, 82.4]
  ]
}, {
    "key": "Liver cancer",
    "values": [
      [2000, 290],
      [2012, 300.5]
  ]
}, {
    "key": "Lymphomas, multiple myeloma",
    "values": [
      [2000, 132.1],
      [2012, 128.7]
  ]
}, {
    "key": "Road injury",
    "values": [
      [2000, 1129.0],
      [2012, 1112.6]
  ]
}, {
    "key": "Cardiomyopathy, myocarditis, endocarditis",
    "values": [
      [2000, 221.1],
      [2012, 206.4]
  ]
}];


var colors = d3.scale.category20c();

    var chart;
    nv.addGraph(function() {
        chart = nv.models.stackedAreaChart()
            .useInteractiveGuideline(true)
            .x(function(d) { return d[0] })
            .y(function(d) { return d[1] })
            .controlLabels({stacked: "Stacked"})
            .duration(1000);

        // chart.xAxis.tickFormat(function(d) { return d3.time.format('%Y')(new Date(d))});
        chart.xAxis.tickValues('2011', '2012');
        chart.yAxis.tickFormat(d3.format(',.0f'));

        chart.legend.vers('furious');

        d3.select('#stackedChart')
            .datum(stackedData)
            .transition().duration(50000)
            .call(chart)
            .each('start', function() {
                setTimeout(function() {
                    d3.selectAll('#stackedChart *').each(function() {
                        if(this.__transition__)
                            this.__transition__.duration = 1;
                    })
                }, 0)
            });

        nv.utils.windowResize(chart.update);
        return chart;
    });