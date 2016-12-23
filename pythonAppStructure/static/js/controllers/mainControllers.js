
NEC.controller("mainController", function ($scope,$location) {
    $scope.main={
        markerLatLng:{}
    }

    $scope.currentRout= function (path) {
        var loc=$location.path();
        return loc.includes(path)
    };

    $scope.closePopup= function (popup) {

        $("."+popup).fadeOut(250, function () {
            $(".background").fadeOut(250);
        });
    };

    $scope.openPopup= function (popup) {
        $(".background").fadeIn(250, function () {
            $("."+popup).fadeIn(250);
        });
    };

    $scope.openMarkerPopup= function (popup,markerLatLng) {
        $scope.main.markerLatLng=markerLatLng;
        $(".background").fadeIn(250, function () {
            $("."+popup).fadeIn(250);
        });
    };
});



