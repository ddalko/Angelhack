google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    //data from table
    var data = google.visualization.arrayToDataTable([
        ['Time', 'Sales'],
        [ 8,      12],
        [ 4,      5.5],
        [ 11,     14],
        [ 4,      5],
        [ 3,      3.5],
        [ 6.5,    7]
    ]);

    var options = {
        hAxis: {title: 'Time', minValue: 0, maxValue: 24},
        vAxis: {title: 'Sales', minValue: 0, maxValue: 15},
        legend: 'none'
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
    
    chart.draw(data, options);
}

$(window).on("resize", function (event) {
    var options = {
        width: '100%',
        height: '100%'
    };
    var data = google.visualization.arrayToDataTable([]);
    drawSalesChart(data, options);
});