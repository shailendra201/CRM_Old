$(function () {

    /* data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type */
    var day_data = [
        {"smc": "Facebook", "reach": 8070, "ac": 660},
        {"smc": "Website", "reach": 12510, "ac": 729},
        {"smc": "App", "reach": 17699, "ac": 1018},
        {"smc": "Group On", "reach": 22460, "ac": 1461},
        {"smc": "Dhinchek", "reach": 26570, "ac": 1967},
        {"smc": "Vyomo", "reach": 31480, "ac": 2627},
        {"smc": "My Dala", "reach": 34710, "ac": 3740},
        {"smc": "Stylofie", "reach": 28710, "ac": 2216}
    ];
    Morris.Bar({
        element: 'graph_bar_group',
        data: day_data,
        xkey: 'smc',
        barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
        ykeys: ['reach', 'ac'],
        labels: ['Reach', 'Actual Customers'],
        hideHover: 'auto',
        xLabelAngle: 60
    });

    Morris.Bar({
        element: 'graph_bar',
        data: [
            {Offer: 'Offer A', newcustomer: 1360},
            {Offer: 'Offer B', newcustomer: 137},
            {Offer: 'Offer C', newcustomer: 275},
            {Offer: 'Offer D', newcustomer: 380},
            {Offer: 'Offer E', newcustomer: 655},
            {Offer: 'Offer F', newcustomer: 275}
        ],
        xkey: 'Offer',
        ykeys: ['newcustomer'],
        labels: ['New Customer'],
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