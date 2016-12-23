/**
 * Created by dhanalakshmi on 2/11/16.
 */

app.service('helperService',[function() {

    var helperService = {


        mergeObjectValues: function (userConfig,defaultConfig) {

            var keys=[];
                keys=Object.keys(defaultConfig)
                for(k=0;k<keys.length;k++){
                    if(userConfig.hasOwnProperty(keys[k])){
                        defaultConfig[keys[k]]=userConfig[keys[k]]
                    }
                }


              return defaultConfig;
        }



    }
    return helperService;


}]);
