/**
 * Created by dhanalakshmi on 29/10/16.
 */

var app = angular.module("angular-leaflet-map", []);

app.controller('mapController', [ '$scope', function($scope) {

    $scope.markerConfiguration= {
        iconUrl: "iconImage/location-pin_318-78238.jpg",
        iconSize: [100, 100]
    };





$scope.markerArray=[
    {
        lat:32.7074015,
        lng:-117.1584297
    },
    {
        lat:32.7072078,
        lng:-117.1568205
    }]

    $scope.bangaloreMarkerArray=[
        {
            lat:12.9542944,
            lng:77.4905117
        }
    ]

    $scope.rectangle=[
        [-19.405818,125.432876],
        [-21.024102,141.365141],
        [-32.121982,141.835481],
        [-29.882498,122.969594]
    ]
    $scope.polygon=[
        [12.989086,77.506553],
        [13.018126,77.670686],
        [12.894383,77.601683]
    ]

    $scope.polylineArray=[[{
        lat:51.489835,
        lng:-0.166964
    },
        {
            lat:51.499586,
            lng:-0.152096
        },
        {
            lat:51.510503,
            lng:-0.130443
        }],
    [{
        lat:51.505,
        lng:-0.09
    },
        {
            lat:51.705,
            lng:-0.09
        }]]

    $scope.polylineConfiguration={
        lineColor:"blue"
    }
    $scope.polygonConfiguration={
        lineColor:"red",
        fillColor:"blue",
        opacity:0.4
    }

    $scope.staticImageTitle='http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg';

    $scope.circleLatLng={
        lat:-6.081689,
        lng:145.391881
}

    $scope.markerCluster= [
        {
            "name":"Goroka",
            "city":"Goroka, Papua New Guinea",
            "iata_faa":"GKA",
            "icao":"AYGA",
            "lat":-6.081689,
            "lng":145.391881,
            "alt":5282,
            "tz":"Pacific/Port_Moresby"
        },{
            "name":"Madang",
            "city":"Madang, Papua New Guinea",
            "iata_faa":"MAG",
            "icao":"AYMD",
            "lat":-5.207083,
            "lng":145.7887,
            "alt":20,
            "tz":"Pacific/Port_Moresby"
        },{
            "name":"Mount Hagen",
            "city":"Mount Hagen, Papua New Guinea",
            "iata_faa":"HGU",
            "icao":"AYMH",
            "lat":-5.826789,
            "lng":144.295861,
            "alt":5388,
            "tz":"Pacific/Port_Moresby"
        },{
            "name":"Nadzab",
            "city":"Nadzab, Papua New Guinea",
            "iata_faa":"LAE",
            "icao":"AYNZ",
            "lat":-6.569828,
            "lng":146.726242,
            "alt":239,
            "tz":"Pacific/Port_Moresby"
        },{
            "name":"Port Moresby Jacksons Intl",
            "city":"Port Moresby, Papua New Guinea",
            "iata_faa":"POM",
            "icao":"AYPY",
            "lat":-9.443383,
            "lng":147.22005,
            "alt":146,
            "tz":"Pacific/Port_Moresby"
        }
    ]

} ]);





