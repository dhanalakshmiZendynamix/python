# leaflet-angular-map-directive

## Description
leaflet-angular-map-directive allows  to use leaflet map library API in  AngularJS application  providing the directive attribute value in AngularJS scope. In its current state, it's not a full-featured library, but it's easy to use and extend 

## How to use it

```
bower install leaflet-angular-map-directive
```

Include the `angular-leaflet-map` dependency on your Angular module:
```
var app = angular.module('demoapp', ['angular-leaflet-map']);
```

## Include the depencies 
```
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/leaflet-angular-map-directive/src/controller/mapController.js"></script>
<script src="bower_components/leaflet-angular-map-directive/src/directive/map.js"></script>
<script src="bower_components/leaflet-angular-map-directive/src/service/markerSettingsService.js"></script>
<script src="bower_components/leaflet-angular-map-directive/src/service/helperService.js"></script>
<script src="bower_components/leaflet-angular-map-directive/src/service/mapSettingsService.js"></script>
<script src="bower_components/leaflet-angular-map-directive/src/service/polylineSettingService.js"></script>
<script src="bower_components/leaflet-angular-map-directive/src/service/polygonSettingService.js"></script>

<link rel="stylesheet" href="leaflet-angular-map-directive/css/style.css" />


<!--map clustering-->
<link rel="stylesheet" type="text/css" href="bower_components/leaflet/dist/leaflet.css" />
<link rel="stylesheet" type="text/css" href="bower_components/leaflet-angular-map-directive/maplibs/css/MarkerCluster.Default0.4.0.css" />
<link rel="stylesheet" type="text/css" href="bower_components/leaflet-angular-map-directive/maplibs/css/MarkerClusters0.4.0.css" />


<script type='text/javascript' src='bower_components/leaflet-angular-map-directive/maplibs/jquerymin.js'></script>
<script type='text/javascript' src='bower_components/leaflet/dist/leaflet.js'></script>
<script type='text/javascript' src='bower_components/leaflet/dist/leaflet.js'></script>
<script type='text/javascript' src='bower_components/leaflet-angular-map-directive/maplibs/leaflet.markercluster.js'></script>
<script src="bower_components/leaflet-angular-map-directive/maplibs/bingLayer.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbUGvpUJn8JdZFlrXn2krev5dWYhRSZV8"></script>
<script src="http://matchingnotes.com/javascripts/leaflet-google.js"></script>

```


## Finally, define  the basic configuration of the map  attibutes as below
```
<angular-map map-id="unqiueMapId"  latitude=51.505 longitude=-0.09 zoom=6 map-height="500" map-width="603" tile-layer="osm"></angular-map> 
```

| Attribute | Type | Sampelvalue | Defalut value | Description |
| --- | --- | --- | --- | --- |
| map-id | String | unqiueMapId | none | Unquie id of map container |
| latitude | number | 51.505 | none | Map cneter latitude |
| longitude | number | -0.09 | none | Map center longitude |
| zoom | number | 6 | none | Zoom level of map |
| map-height | String | 500 | none | Map container height |
|  map-width| String | 603 | none | Map container height |
| tile-layer | String | osm | none | osmLayer = osm, bingAerialWithLabels= bingAerialWithLabels,bingAerial= bingAerial,bingRoad= bingRoad,googleMaps= googleMaps,stamenBackWhite= stamenBackWhite   |

## Map with markers

```

<angular-map map-id="indexmap"  latitude=51.505 longitude=-0.09 zoom=6 map-height="500" map-width="603" tile-layer="osm" markers=markerArray marker-configuration=markerConfiguration></angular-map>

```

| Attribute | Type | Sampelvalue | Defalut value | Description |
| --- | --- | --- | --- | --- |
| markers |  Array of object |  [{ **lat** :51.505, **lng** :0.09},{        **lat** :51.605, **lng** :-0.09}]  | none | Array Of latitude longitude objects |
| marker-configuration | object |  {   &quot;iconUrl&quot; :&quot;iconImage/Icons-Land-Vista-Map-Markers-Map-Marker-Marker-Inside-Chartreuse.ico&quot; ,       &quot;iconWidth&quot; :30,       &quot;iconHeight&quot;:30}  | none | IconUrl=custom marker absolute path iconWidth=marker width iconHeight=maker Height |

## Map with polyline

```
<angular-map map-id="indexmapPolygon"  latitude=51.505 longitude=-0.09 zoom=6  map-height="500" map-width="603" tile-layer="osm" polyline=polylineArray  polyline-configuration=polylineConfiguration></angular-map>
```

| Attribute | Type | Sampelvalue | Defalut value | Description |
| --- | --- | --- | --- | --- |
| polyline |  Array of object | [[{    **lat :51.489835,    **lng** :-0.166964},    {        **lat** :51.499586,        **lng** :-0.152096    },    {        **lat** :51.510503,        **lng** :-0.130443    }],[{    **lat** :51.505,    **lng** :-0.09},    {        **lat** :51.705,        **lng** :-0.09    }]]   | none | Array of latitude longitude object |
| polyline-configuration | object | {    lineColor: &quot;blue&quot;}  | red | LineColor of the ployline |

## Map with polygon

```
<angular-map map-id="secondmap" latitude=12.9542944 longitude=77.4905117 zoom=12
map-height="500" map-width="603"   polygon=polygon tile-layer="osm" polygon-configuration=polygonConfiguration></angular-map>
```

| Attribute | Type | Sampelvalue | Defalut value | Description |
| --- | --- | --- | --- | --- |
| polygon | Array | [    [12.989086,77.506553],    [13.018126,77.670686],    [12.894383,77.601683]]  | none | Array of latitude, longitude |
| polygon-configuration | object | {    lineColor : &quot;red&quot;,    fillColor : &quot;blue&quot; ,    opacity :0.4}  | lineColor=&quot;red&quot; fillColor =&quot;red&quot;*opacity=0.4  |LineColor Boder color of polygonfillColor : polygon fill color   |

## Map with marker Cluster

```
<angular-map map-id="clustermap"  latitude=-6.081689 longitude=145.391881 zoom=4 marker-cluster=markerCluster map-height="500" map-width="603" tile-layer="osm"></angular-map>
```

| Attribute | Type | Sampelvalue | Defalut value | Description |
| --- | --- | --- | --- | --- |
| marker-cluster | Array | [    {              **&quot;lat&quot;** :-6.081689,        **&quot;lng&quot;** :145.391881,        **&quot;alt&quot;** :5282    },{      **&quot;lat&quot;** :-5.207083,    **&quot;lng&quot;** :145.7887,    **&quot;alt&quot;** :20}]  | none | Array of latitude , longitude |

## Map with static image as base layer

```
<angular-map map-id="map9"  image-tile=staticImageTitle  map-height="500" map-  width="603" ></angular-map>
```

| Attribute | Type | Sampelvalue | Defalut value | Description |
| --- | --- | --- | --- | --- |
| image-tile | String | http://www.lib.utexas.edu/maps/historical/newark\_nj\_1922.jpg  | none | Image has to be displayed as base layer |

