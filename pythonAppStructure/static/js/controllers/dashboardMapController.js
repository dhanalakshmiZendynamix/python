
/**
 * Created by zendynamix on 07-12-2016.
 */
NEC.controller("dashboardMapController", function ($scope,$location,dashboardService) {

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

    $scope.messages=[]
    var map;
    $scope.labelMarkerArray=[

        {marker:{lat:32.707585,lng:-117.156536},message:{gate:"g1",checkPoint:"c1",status:"true"}},
        {marker:{lat:32.707995,lng:-117.157142},message:{gate:"g1",checkPoint:"c1",status:"true"}},
        {marker:{lat:32.707413,lng:-117.157453},message:{gate:"g1",checkPoint:"c1",status:"true"}},
        {marker:{lat:32.7072078,lng:-117.1568205},message:{gate:"g1",checkPoint:"c1",status:"true"}}


    ]

    function initMap(){
        map = L.map('dashboardMap').setView([ 32.7072078,-117.1568205], 18);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        addDivMarker( $scope.labelMarkerArray)
      /*  map.on('click', addMarker);
        function addMarker(e){
            $scope.openMarkerPopup('startInstance',e.latlng)


        }*/
        drawMap();
    }

    function drawMap(){
        var  drawControl = new L.Control.Draw({
            draw : {
                position : 'topleft',
                polygon :false,
              /*  polygon : {
                    shapeOptions: {
                        color: 'red'
                    }
                },*/
                marker:false,
                polyline : false,
                rectangle : {
                    shapeOptions: {
                        color: 'blue'
                    }
                },
                circle : false
            },
            edit: false


        });

        map.addControl(drawControl);

        map.on(L.Draw.Event.CREATED, function (event) {
            var layer = event.layer;
            var type = event.layerType;
            var drawnItems = L.featureGroup().addTo(map);
            drawnItems.addLayer(layer);


        });




    }

/*    initMap();*/



    $scope.open=function(){
        $modal.open({
            templateUrl: '../Public/templates/model.html',
            controller:'modalController'
        });

    }
    $scope.save=function(message,latLng){
        console.log("inside save!!!!")
        console.log(message)
        console.log(latLng)
        $scope.closePopup('startInstance')

        addDivMarker(latLng,message)

    }

    var marker;
    function addDivMarker( labelMarkerArray){

       for(var j=0;j<labelMarkerArray.length;j++){
           console.log("******************addDivMarker*************")
           console.log(labelMarkerArray[j].marker.lat)
           console.log(labelMarkerArray[j].marker.lng)
           console.log(labelMarkerArray[j].message.gate)
           console.log(labelMarkerArray[j].message.checkPoint)
           var myIcon = L.divIcon({className: 'mapIcon', iconSize: null,
               html: '<div class="markerMain"><div class="markerBox"></div> ' +
               '<div class="markerLabel">' +
               '<div class="gate">' +
               labelMarkerArray[j].message.gate +
               '</div> <div class="entries"><div class="pass">+' +
               labelMarkerArray[j].message.checkPoint+
               '</div><div class="fail">' +
               labelMarkerArray[j].message.status+
               '</div> </div> ' +
               '</div> </div>'});
           marker =L.marker([labelMarkerArray[j].marker.lat,labelMarkerArray[j].marker.lng], {icon: myIcon}).addTo(map)
           $scope.message={}
       }

    }



})



