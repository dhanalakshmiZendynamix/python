/**
 * Created by dhanalakshmi on 2/11/16.
 */


app.service('polygonSettingService',[function() {

    var polygonConfiguration={
        lineColor:"red",
        fillColor:"blue",
        opacity:0.4
    }
    var updatedPolygonOption={};
    var isDefaultPolygonSetting;

    var polygonSettingService = {
        getDefaultPolygonOptions: function () {
            return polygonConfiguration;
        },
        setDefaultPolygonOptions: function (polylineOption) {
            polygonConfiguration = polylineOption;
        },
        setUpdatePolygonOptions: function (updateOption) {
            updatedPolygonOption = updateOption;
        },
        getUpdatePolygonOptions:function () {
            return updatedPolygonOption
        },
        setDefaultPolygon:function (isDefault) {
            isDefaultPolygonSetting=isDefault
        },
        getDefaultPolygon:function () {
            return isDefaultPolygonSetting;
        }

    }
    return polygonSettingService;


}]);
