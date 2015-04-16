/**
 * Created by MENG on 2015/3/11.
 */
function screenScaled(){
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var screenScale = screenWidth/640;
    var userAgent = navigator.userAgent;
    var reg = /Android (\d+\.\d+)/;
    if(reg.test(userAgent)){
        var v = parseFloat(RegExp.$1);
        if(v >= 2.3){
            $('meta[name=viewport]').attr({content:'width=640,initial-scale='+screenScale+',minimum-scale='+screenScale+',maximum-scale='+screenScale+',target-densitydpi=device-dpi'});
        }else{
            $('meta[name=viewport]').attr({content:'width=640, target-densitydpi=device-dpi'});
        }
    }else{
        $('meta[name=viewport]').attr({content:'width=640, user-scalable=no, target-densitydpi=device-dpi'});
    }
}
$(function(){
    screenScaled()
})

