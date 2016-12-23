/**
 * Created by dhanalakshmi on 1/11/16.
 */


app.service('markerSettingService',[function() {

    var markerOptions={
        "iconUrl":"iconImage/location-pin_318-78238.jpg",
        "iconWidth":20,
        "iconHeight":20
    }
    var updatedMarkerOption={};
    var isDefaultMarkerSetting;

    var markerSettingService = {
        getDefaultMarkerOptions: function () {
            return markerOptions;
        },
        setDefaultMarkerOptions: function (markerOption) {
            markerOptions = markerOption;
        },
        setUpdateMarkerOptions: function (updateOption) {
            updatedMarkerOption = updateOption;
        },
        getUpdateMarkerOptions:function () {
            return updatedMarkerOption
        },
        setDefaultMarker:function (isDefault) {
            isDefaultMarkerSetting=isDefault
        },
        getDefaultMarker:function () {
           return isDefaultMarkerSetting;
        }

    }
    return markerSettingService;


}]);