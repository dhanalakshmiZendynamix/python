/**
 * Created by MohammedSaleem on 09/12/16.
 */

NEC.controller("dashboardController", function ($scope) {
    //...... Slider initialization......
    $scope.slickConfig = {
        dots: true,
        slide:'li',
        infinite: false,
        swipe: true,
        arrows: false,
        prevArrow: '.leftArrow',
        nextArrow: '.rightArrow',
        dotsClass: 'parkingNav',
        customPaging: function(slider, i) {
            return '';
        }
    };

});



