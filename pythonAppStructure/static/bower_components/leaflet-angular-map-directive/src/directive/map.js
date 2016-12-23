/**
 * Created by dhanalakshmi on 29/10/16.
 */


    //var mymap;






        //var mapContainer=null;
        //elem.ready(function () {

            //$(elem).find(".customMap").css({
            //    height:  scope.mapHeight,
            //    width:scope.mapWidth
            //})
            //if(!scope.imageTile && scope.mapId){
            //    initMap(scope.latitude,scope.longitude,scope.zoom,scope.mapId,scope.tileLayer)
            //}

            //if(scope.imageTile && scope.mapId){
            //    initStaticImageMap(scope.imageTile,scope.mapId)
            //
            //}

           /* if(scope.circleLatLng){
                drawCircle(scope.circleLatLng)

            }*/


            //if(scope.markers){
            //    if(scope.markerConfiguration){
            //        markerSettingService.setDefaultMarker(false);
            //         var markerUpdatedOption =helperService.mergeObjectValues(scope.markerConfiguration,JSON.parse(JSON.stringify(markerSettingService.getDefaultMarkerOptions())))
            //        markerSettingService.setUpdateMarkerOptions(markerUpdatedOption)
            //        addCustomMarkers(scope.markers)
            //
            //    }else{
            //        markerSettingService.setDefaultMarker(true)
            //        addCustomMarkers(scope.markers)
            //    }
            //
            //}

            //if(scope.polygon){
            //    if(scope.polygonConfiguration){
            //        polygonSettingService.setDefaultPolygon(false)
            //        var polygonUpdatedOption =helperService.mergeObjectValues(scope.polygonConfiguration,JSON.parse(JSON.stringify(polygonSettingService.getDefaultPolygonOptions())))
            //        polygonSettingService.setUpdatePolygonOptions(polygonUpdatedOption)
            //        drawPolygon(scope.polygon)
            //    }
            //    else{
            //        polygonSettingService.setDefaultPolygon(true)
            //        drawPolygon(scope.polygon)
            //    }
            //
            //
            //}
            //if(scope.polyline){
            //    if(scope.polylineConfiguration){
            //        polylineSettingService.setDefaultPolyline(false)
            //        var polylineUpdatedOption =helperService.mergeObjectValues(scope.polylineConfiguration,JSON.parse(JSON.stringify(polylineSettingService.getDefaultPolylineOptions())))
            //        polylineSettingService.setUpdatePolylineOptions(polylineUpdatedOption)
            //        for(var k=0;k<scope.markers.length-1;k++){
            //            drawPolyLineFromArrayOFLatLanObjects(scope.polyline[k]);
            //        }
            //    }else{
            //        polylineSettingService.setDefaultPolyline(true)
            //        for(var k=0;k<scope.markers.length-1;k++){
            //            drawPolyLineFromArrayOFLatLanObjects(scope.polyline[k]);
            //        }
            //
            //    }
            //
            //}
            //if(scope.markerCluster){
            //
            //    addMarkerCluster(scope.markerCluster)
            //}


        //})


    //}

    function initStaticImageMap(staticImage,mapId){
         mymap = L.map(mapId, {
            maxZoom: 24,
            minZoom: 1,
            crs: L.CRS.Simple
        }).setView([0, 0], 1);

        mymap.setMaxBounds(new L.LatLngBounds([0,600], [600,0]));

        var imageUrl = staticImage
        var imageBounds = [[300,0], [0,300]];

        L.imageOverlay(imageUrl, imageBounds).addTo(mymap);

    }

    function drawPolyLineFromArrayOFLatLanObjects(arrayOfLatLngObjects){
        var directionObjArray=[]
        for(var j=0;j<arrayOfLatLngObjects.length;j++){
            var tempArr=new Array();
            tempArr.push(arrayOfLatLngObjects[j].lat)
            tempArr.push(arrayOfLatLngObjects[j].lng)
            directionObjArray.push(tempArr)

        }

        if(polylineSettingService.getDefaultPolyline()){

            drawPolyline(directionObjArray,polylineSettingService.getDefaultPolylineOptions().lineColor)
        }
        else{

            drawPolyline(directionObjArray,polylineSettingService.getUpdatePolylineOptions().lineColor)
        }

    }

    function drawPolyline(polyLinePoints,color){


        var polyline = L.polyline(polyLinePoints, {color: color}).addTo(mymap);
        // zoom the map to the polyline
        mymap.fitBounds(polyline.getBounds());

    }

    function drawCircle(latLng){

        var circle = L.circle([latLng.lat,latLng.lng], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(mymap);
    }

    function initMap(latitude,longitude,zoom,mapId,tileLayerName) {
        /*fullscreenControl: true*/
        mymap = L.map(mapId).setView([latitude,longitude], zoom);
        var mapOptions={
            titleLayer:{
                "osm":new L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    attribution: '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }),
                "bingAerialWithLabels":new L.BingLayer("AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L", {type: 'AerialWithLabels'}),
                "bingAerial":new L.BingLayer("AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L", {type: 'Aerial'}),
                "bingRoad":new L.BingLayer("AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L", {type: 'Road'}),
                "googleMaps":new L.Google('ROADMAP'),
                "stamenBackWhite": new L.tileLayer("http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png")
            }
        }

       /* var tileLayer = mapSettingService.getDefaultMapOptions().titleLayer[tileLayer]*/
        var tileLayer = mapOptions.titleLayer[tileLayerName]

        mymap.addLayer(tileLayer);
    }




    function addCustomMarkers(latLngArray) {
        var markerOption={}
        if(markerSettingService.getDefaultMarker()){
             markerOption=markerSettingService.getDefaultMarkerOptions()

        }else{
            markerOption=markerSettingService.getUpdateMarkerOptions()
        }

        var markerIconStyle = L.icon({
            iconUrl: markerOption.iconUrl,
            iconSize: [markerOption.iconWidth, markerOption.iconWidth]
        });
        for(var k=0;k<latLngArray.length;k++){
         var marker=   L.marker([latLngArray[k].lat,latLngArray[k].lng], {icon: markerIconStyle}).addTo(mymap);
        }


    }

    //polygon with fill color and line
    function drawPolygon(polyArray){
        var polygonOption={}
        if(polygonSettingService.getDefaultPolygon()){
            polygonOption=polygonSettingService.getDefaultPolygonOptions()

        }else{
            polygonOption=polygonSettingService.getUpdatePolygonOptions()
        }
        var polygon = L.polygon(polyArray,{
            color: polygonOption.lineColor,
            fillColor:polygonOption.fillColor,
            fillOpacity: polygonOption.opacity
        }).addTo(mymap);
    }




function addMarkerCluster(markers){
    var myIcon = L.icon({
        iconUrl:  'iconImage/Icons-Land-Vista-Map-Markers-Map-Marker-Marker-Inside-Chartreuse.ico',
        iconSize: [29, 24],
        iconAnchor: [9, 21]
    });



    /*var markerClusters = L.markerClusterGroup();*/
    var markerClusters = L.markerClusterGroup({
        spiderfyOnMaxZoom: false,
        //on hover show polygon
        showCoverageOnHover: true,
        //onclick want to zoom and show marker
        zoomToBoundsOnClick: true
    });

    for ( var i = 0; i < markers.length; ++i )
    {
        var popup = "latitude"+markers[i].lat +
            '<br/>'+"longitude"+ + markers[i].lng ;

        var m = L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} ).bindPopup( popup );
        markerClusters.addLayer( m );
    }

    mymap.addLayer( markerClusters );
}



















var angularMapUI=angular.module('angularMapUI',[]);

angularMapUI.directive('angularMap', function() {


    var template = '<div class="customMap"  ></div>'
    var link=function (scope, element, attrs) {

        //.... setting map id .......
        if(!scope.mapId){
            scope.mapId='sampleMap';
        }
        $(element).find('.customMap').attr({
            id: scope.mapId
        });

        //...... setting latitude and longitude ......
        if(!scope.lat || !scope.lng){
            scope.lat=13.0036032;
            scope.lng=77.6585163;
        }

        //....setting zoom level...
        if(!scope.zoom){
            scope.zoom=10;
        }

        var map = L.map(scope.mapId).setView([scope.lat, scope.lng],  scope.zoom);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


        //.....adding marker
        if(scope.markers){
            for(var m=0;m<scope.markers.length;m++){
                var marker;
                if(!scope.markerConfig){
                    marker=   L.marker([scope.markers[m].lat,scope.markers[m].lng]).addTo(map);
                }
                else{
                    marker=   L.marker([scope.markers[m].lat,scope.markers[m].lng],{icon: L.icon(scope.markerConfig)}).addTo(map);
                }
            }
        }

    };
    return {
        scope: {
            mapId:'@',
            lat:'@',
            lng:'@',
            zoom:'@',
            markers:'=',
            polygon:'=',
            polyline:'=',
            markerConfig:'=',
            tileLayer:"@",
            polylineConfiguration:'=',
            polygonConfiguration:'=',
            markerCluster:'=',
            mapHeight:"@",
            mapWidth:"@",
            imageTile:"=",
            circleLatLng:"="
        },
        link: link,
        template: template
    };
});






