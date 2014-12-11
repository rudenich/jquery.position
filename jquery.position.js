(function($){
    $.position = {
        utils : {
            before:function(targetPos,targetSize,size){
                var result = targetPos-size;
                return result;
            },
            begin:function(targetPos,targetSize,size){
                var result = targetPos
                return result;
            },
            center:function(targetPos,targetSize,size){
                var result = targetPos+(targetSize-size)/2;
                return result;
            },
            end:function(targetPos,targetSize,size){
                var result = targetPos+targetSize-size;
                return result;
            },
            after:function(targetPos,targetSize,size){
                var result = targetPos+targetSize;
                return result;
            }
        },
        mapX:{
            before:'before',
            left:'begin',
            center:'center',
            right:'end',
            after:'after'
        },
        mapY : {
            above:'before',
            top:'begin',
            middle:'center',
            bottom:'end',
            under:'after'
        }
    };

$.fn.position = function(conf){
    var target = conf.target;
    var position = conf.position;
    var x = position[0];
    var y = position[1];

    var targetY = target.offset().top;
    var targetHeight = target.height();
    var height = this.height();

    var targetX = target.offset().left;
    var targetWidth = target.width();
    var width = this.width();


    var top = $.position.utils[$.position.mapY[y]](targetY,targetHeight,height);
    var left = $.position.utils[$.position.mapX[x]](targetX,targetWidth,width);
    this.css({
        top:top,
        left:left
    });
}

})(jQuery)
