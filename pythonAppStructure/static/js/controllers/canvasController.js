/**
 * Created by MohammedSaleem on 08/12/16.
 */

NEC.controller("canvasController", function ($scope) {
    var map;
    // $scope.labelMarkerArray = [
    //     {
    //         mid: 1,
    //         marker: {lat: 32.707922, lng: -117.157641},
    //         message: {
    //             gate: "G1",
    //             checkPoint: {
    //                 name: "Checkpoint A",
    //                 status: 1
    //             },
    //             camera: {
    //                 name: "Camera A",
    //                 status: 0
    //             },
    //             status: "true"
    //         }
    //     },
    //     {
    //         mid: 2,
    //         marker: {lat: 32.707919, lng: -117.156362},
    //         message: {
    //             gate: "G2",
    //             checkPoint: {
    //                 name: "Checkpoint B",
    //                 status: 1
    //             },
    //             camera: {
    //                 name: "Camera B",
    //                 status: 1
    //             },
    //             status: "true"
    //         }
    //     },
    //     {
    //         mid: 3,
    //         marker: {lat: 32.707432, lng: -117.157641},
    //         message: {
    //             gate: "G3",
    //             checkPoint: {
    //                 name: "Checkpoint C",
    //                 status: 1
    //             },
    //             camera: {
    //                 name: "Camera C",
    //                 status: 0
    //             },
    //             status: "true"
    //         }
    //     },
    //     {
    //         mid: 4,
    //         marker: {
    //             lat: 32.7072078, lng: -117.1568205
    //         },
    //         message: {
    //             gate: "G4",
    //             camera: {
    //                 name: "Camera D",
    //                 status: 1
    //             },
    //             status: "true"
    //         }
    //     }
    // ];

    $scope.labelMarkerArray = [
        {
            mid: 1,
            marker: {lat: 32.707922, lng: -117.157641},
            gate: {
                name: 'G1',
                checkpoint: [
                    {
                        name: 'Chk 1',
                        camera: {
                            name: "Cam1",
                            status: 0
                        },
                        sensor: {
                            name: "S1",
                            status: 1
                        }
                    },
                    {
                        name: 'Chk 2',
                        camera: {
                            name: "Cam2",
                            status: 1
                        },
                        sensor: {
                            name: "S2",
                            status: 1
                        }
                    },
                    {
                        name: 'Chk 3',
                        camera: {
                            name: "Cam3",
                            status: 1
                        },
                        sensor: {
                            name: "S3",
                            status: 0
                        }
                    }
                ]

            }
        },
        {
            mid: 2,
            marker: {lat: 32.707919, lng: -117.156362},
            gate: {
                name: 'G2',
                checkpoint: [
                    {
                        name: 'Chk A',
                        camera: {
                            name: "Cam1",
                            status: 0
                        },
                        sensor: {
                            name: "S1",
                            status: 1
                        }
                    },
                    {
                        name: 'Chk B',
                        camera: {
                            name: "Cam2",
                            status: 1
                        },
                        sensor: {
                            name: "S2",
                            status: 0
                        }
                    },
                    {
                        name: 'Chk C',
                        camera: {
                            name: "Cam3",
                            status: 1
                        },
                        sensor: {
                            name: "S3",
                            status: 1
                        }
                    }
                ]

            }
        },
        {
            mid: 3,
            marker: {lat: 32.707432, lng: -117.157641},
            gate: {
                name: 'G3',
                checkpoint: [
                    {
                        name: 'Chk 1',
                        camera: {
                            name: "Cam1",
                            status: 1
                        },
                        sensor: {
                            name: "S1",
                            status: 0
                        }
                    },
                    {
                        name: 'Chk 2',
                        camera: {
                            name: "Cam2",
                            status: 0
                        },
                        sensor: {
                            name: "S2",
                            status: 1
                        }
                    },
                    {
                        name: 'Chk 3',
                        camera: {
                            name: "Cam3",
                            status: 1
                        },
                        sensor: {
                            name: "S3",
                            status: 1
                        }
                    }
                ]

            }
        },
        {
            mid: 4,
            marker: {
                lat: 32.7072078, lng: -117.1568205
            },
            gate: {
                name: 'G4',
                checkpoint: [
                    {
                        name: 'Chk 1',
                        camera: {
                            name: "Cam1",
                            status: 1
                        },
                        sensor: {
                            name: "S1",
                            status: 1
                        }
                    },
                    {
                        name: 'Chk 2',
                        camera: {
                            name: "Cam2",
                            status: 0
                        },
                        sensor: {
                            name: "S2",
                            status: 1
                        }
                    },
                    {
                        name: 'Chk 3',
                        camera: {
                            name: "Cam3",
                            status: 1
                        },
                        sensor: {
                            name: "S3",
                            status: 0
                        }
                    }
                ]

            }
        }
    ];

    function initMap() {
        map = L.map('canvasMap', {
            attributionControl: false,
            scrollWheelZoom: false
        }).setView([32.7072078, -117.1568205], 18);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        addDivMarker($scope.labelMarkerArray)

    }


    var marker;

    function addDivMarker(labelMarkerArray) {

        for (var j = 0; j < labelMarkerArray.length; j++) {

            var totalCheckpoints="";
            var checkpoints=labelMarkerArray[j].gate.checkpoint;
            var checkpointLen=checkpoints.length;

            for (i=0;i<checkpointLen;i++){
                var camStatus="",sensorStatus="";

                if (checkpoints[i].camera.status==1){
                    camStatus='active';
                }
                if (checkpoints[i].sensor.status==1){
                    sensorStatus='active';
                }
                var checkpoint='<li class="checkpoint">' +
                    '<div class="checkpointBox"></div>' +
                    '<div class="checkpointName">'+checkpoints[i].name+'</div>' +

                    '<div class="camera '+camStatus+'"><div class="name">'+checkpoints[i].camera.name+'</div></div>' +
                    '<div class="scanner '+sensorStatus+'"><div class="name">'+checkpoints[i].sensor.name+'</div></div>' +
                    '</li>';

                totalCheckpoints=totalCheckpoints+checkpoint;
            }


            var myIcon = L.divIcon({
                className: 'mapIcon', iconSize: null,
                // html: '<div class="markerMain"><div class="markerBox"></div> ' +
                // '<div class="markerLabel">' +
                // '<div class="gate">' +
                // labelMarkerArray[j].message.gate +
                // '</div> <div class="entries"><div class="pass">+' +
                // labelMarkerArray[j].message.checkPoint +
                // '</div><div class="fail">' +
                // labelMarkerArray[j].message.status +gate
                // '</div> </div> ' +
                // '</div> </div>',

                html:
                ' <div class="markerMain">' +
                    '<div class="markerBox"></div>' +
                    '<div class="markerGate">' +
                        '<div class="gateName">' +
                            '<div class="num midBlock">'+labelMarkerArray[j].gate.name+'</div>' +
                            '<div class="txt midBlock">Gate</div>' +
                        '</div>' +
                        '<ul class="checkpointList">' +
                            totalCheckpoints +
                            // '<li class="checkpoint" ng-repeat="checkpoint in labelMarkerArray[j].gate.checkpoint">' +
                            //     '<div class="checkpointBox"></div>' +
                            //     '<div class="checkpointName">{{checkpoint.name}}</div>' +
                            //
                            //     '<div class="camera" ng-class="{active: checkpoint.camera.status==1}"><div class="name">{{checkpoint.camera.name}}</div></div>' +
                            //     '<div class="scanner" ng-class="{active: checkpoint.sensor.status==1}"><div class="name">{{checkpoint.sensor.name}}</div></div>' +
                            // '</li>' +
                            // '<li class="checkpoint">' +
                            //     '<div class="checkpointBox"></div>' +
                            //     '<div class="checkpointName">Chk 2</div>' +
                            //
                            //     '<div class="camera"><div class="name">Cam1</div></div>' +
                            //     '<div class="scanner active"><div class="name">S1</div></div>' +
                            // '</li>' +
                            // '<li class="checkpoint">' +
                            //     '<div class="checkpointBox"></div>' +
                            //     '<div class="checkpointName">Chk 2</div>' +
                            //
                            //     '<div class="camera active"><div class="name">Cam1</div></div>' +
                            // '</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>'


            });
            marker = L.marker([labelMarkerArray[j].marker.lat, labelMarkerArray[j].marker.lng], {icon: myIcon}).addTo(map);
            $scope.message = {}
            marker._leaflet_id = labelMarkerArray[j].mid;
            // marker.on('click', function (e) {
            //     $(this).remove()
            //     // console.log(e.isPropagationStopped());
            //
            //     map.panTo(new L.LatLng(e.latlng.lat, e.latlng.lng), 20);
            //     return false;
            // });


        }

    }

    function setMapCenter(e) {
        // console.log(e.latlng)

        // map.panTo(new L.LatLng(e.latlng.lat, e.latlng.lng), 20);
        /*map.setView(new L.LatLng(e.latlng.lat, e.latlng.lng),20);*/
        // console.log(e.target._leaflet_id)


    }

    initMap()
});
