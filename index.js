google.charts.load('current', {
    'packages': ['line']
});
google.charts.setOnLoadCallback(drawChart);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', 'Earnings Line 1');
    data.addColumn('number', 'Earnings Line 2');

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var rows = [];
    for (var i = 0; i < months.length; i++) {
        var randomValue1 = getRandomInt(-300000, 700000);
        var randomValue2 = getRandomInt(-300000, 700000);
        rows.push([months[i], randomValue1, randomValue2]);
    }

    data.addRows(rows);

    var options = {
        chart: {
            title: 'Net Working Capital vs Gross Working Capital',

        },
        width: 900,
        height: 500,
        hAxis: {
            title: 'Net Working Capital vs Gross Working Capital'
        },
        vAxis: {
            title: 'Earnings',
            viewWindow: {
                min: -300000,
                max: 700000
            }
        }
    };

    var chart = new google.charts.Line(document.getElementById('line_top_x'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}


//Stacked bar