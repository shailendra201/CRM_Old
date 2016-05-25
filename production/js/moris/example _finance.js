$(function () {

    /* data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type */
	
	$('#graphxx').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Booking and Sales Per Day'
        },
        xAxis: [{
            categories: ['April 26', 'April 27', 'April 28', 'April 29', 'April 30', 'May 1',
                'May 2', 'May 3', 'May 4', 'May 5', 'May 6', 'May 7'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'No. of Bookings',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Revenue Earned',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} k',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Revenue',
            type: 'column',
            yAxis: 1,
            data: [24.9, 35.5, 31.4, 18.2, 22.0, 23.0, 17.6, 24.5, 38.4, 36.1, 22.6, 19.4],
            tooltip: {
                valueSuffix: ' k'
            }

        }, {
            name: 'No. of Bookings',
            type: 'spline',
            data: [50, 70, 62, 36, 42, 41, 43, 35, 79, 71, 41, 38],
            tooltip: {
                valueSuffix: ''
            }
        }]
    });
	
    var day_data = [
        {"smc": "Deember", "reach": 11.2, "ac": 7.7},
        {"smc": "January", "reach": 12, "ac": 7},
        {"smc": "Feburary", "reach": 17, "ac": 12},
        {"smc": "March", "reach": 22, "ac": 14},
        {"smc": "April", "reach": 26, "ac": 19},
        {"smc": "May", "reach": 18, "ac": 13}
    ];
    Morris.Bar({
        element: 'graph_bar_group',
        data: day_data,
        xkey: 'smc',
        barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
        ykeys: ['reach', 'ac'],
        labels: ['Revenue', 'Profit'],
        hideHover: 'auto',
        xLabelAngle: 60
    });

    Morris.Bar({
        element: 'graph_bar',
        data: [
            {Offer: 'December', newcustomer: 1.8},
            {Offer: 'Jaunary', newcustomer: 1.6},
            {Offer: 'Feburary', newcustomer: 2.1},
            {Offer: 'March', newcustomer: 2.4},
            {Offer: 'April', newcustomer: 2.8},
            {Offer: 'May', newcustomer: 2.2}
        ],
        xkey: 'Offer',
        ykeys: ['newcustomer'],
        labels: ['Tax'],
        barRatio: 0.4,
        barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
        xLabelAngle: 35,
        hideHover: 'auto'
    });

    Morris.Bar({
        element: 'graphx',
        data: [
            {x: 'Ramesh', y: 100, z: 30, a: 20},
            {x: 'Neetu', y: 85, z: 30, a: 30},
            {x: 'Renu', y: 70, z: 30, a: 20},
            {x: 'Satish', y: 50, z: 20, a: 5}
        ],
        xkey: 'x',
        ykeys: ['y', 'z', 'a'],
        barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
        hideHover: 'auto',
        labels: ['Total', 'Offer Applicable', 'Offer Availed']
    }).on('click', function (i, row) {
        console.log(i, row);
    });

    Morris.Area({
        element: 'graph_area',
        data: [
            {smc: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647},
            {smc: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
            {smc: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
            {smc: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
            {smc: 'Ramesh', iphone: 6810, ipad: 1914, itouch: 2293},
            {smc: 'Netu', iphone: 5670, ipad: 4293, itouch: 1881},
            {smc: 'Renu', iphone: 4820, ipad: 3795, itouch: 1588},
            {smc: 'Satish', iphone: 15073, ipad: 5967, itouch: 5175},
            {smc: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
            {smc: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
        ],
        xkey: 'smc',
        ykeys: ['iphone', 'ipad', 'itouch'],
        lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
        labels: ['Customers Served', 'Cus', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto'
    });


    Morris.Donut({
        element: 'graph_donut',
        data: [
            {label: 'Normal Customers', value: 25},
            {label: 'Premium Customers', value: 40},
            {label: 'Members', value: 25},
            {label: 'New Customers', value: 10}
        ],
        colors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
        formatter: function (y) {
            return y + "%"
        }
    });

    new Morris.Line({
        element: 'graph_line',
        xkey: 'year',
        ykeys: ['value'],
        labels: ['Value'],
        hideHover: 'auto',
        lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
        data: [
            {year: '2008', value: 20},
            {year: '2009', value: 10},
            {year: '2010', value: 5},
            {year: '2011', value: 5},
            {year: '2012', value: 20}
        ]
    });

});