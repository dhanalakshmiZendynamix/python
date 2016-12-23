/**
 * Created by MohammedSaleem on 12/08/16.
 */

NEC.directive('datePicker', function () {
    return {
        restrict: 'A',
        scope: {
            date: "="
        },
        link: function(scope, element, attrs) {
            $(element).datepicker({
              dateFormat: "dd-mm-yy",
                dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
                onSelect: function (date) {
                    scope.date = date;
                    scope.date=moment.utc(scope.date).format('YYYY/MM/DD');
                    console.log("date picker date")
                    console.log(scope.date.valueOf())
                    scope.$apply();
                }
            }).datepicker("setDate", new Date())
        }
    };
});
/*
link: function (scope, element, attrs, ngModelCtrl) {
    element.datepicker({
        /!* dateFormat: "dd-mm-yy",*!/
        dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
        minDate: 0,
        onSelect: function (date) {
            scope.date = date;
            console.log(date)
            scope.$apply();
        }
    });
}*/
