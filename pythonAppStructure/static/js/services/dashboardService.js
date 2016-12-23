/**
 * Created by zendynamix on 08-12-2016.
 */
NEC.factory("dashboardService", function ($http) {
    var message;
    return{
        setMarkerMessage:function(markerMessage){
            message=markerMessage;
        },
        getMarkerMessage:function(){
            return message
        }
    }

})