/**
 * Created by dhanalakshmi on 2/11/16.
 */

app.service('polylineSettingService',[function() {

    var polylineConfiguration={
        lineColor:"red"
    }
    var updatedPolylineOption={};
    var isDefaultPolylineSetting;

    var polylineSettingService = {
        getDefaultPolylineOptions: function () {
            return polylineConfiguration;
        },
        setDefaultPolylineOptions: function (polylineOption) {
            polylineConfiguration = polylineOption;
        },
        setUpdatePolylineOptions: function (updateOption) {
            updatedPolylineOption = updateOption;
        },
        getUpdatePolylineOptions:function () {
            return updatedPolylineOption
        },
        setDefaultPolyline:function (isDefault) {
            isDefaultPolylineSetting=isDefault
        },
        getDefaultPolyline:function () {
            return isDefaultPolylineSetting;
        }

    }
    return polylineSettingService;


}]);
