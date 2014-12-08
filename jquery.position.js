(function($){
    var utils = {
        above:function(targetY,targetHeight,height){
            return {y:targetY-height};
        },
        top:function(targetY,targetHeight,height){
            return {y:targetY};
        },
        middle:function(targetY,targetHeight,height){
            var y = targetY+(targetHeight-height)/2;
            return {y:y};
        },
        bottom:function(targetY,targetHeight,height){
            var y = targetY+targetHeight-height;
            return {y:y};
        },
        under:function(targetY,targetHeight,height){
            var y = targetY+targetHeight;
            return {y:y};
        },


        before:function(targetX,targetWidth,width){
            var x = targetX-width;
            return {x:x};
        },
        left:function(targetX,targetWidth,width){
            var x = targetX
            return {x:x};
        },
        center:function(targetX,targetWidth,width){
            var x = targetX+(targetWidth-width)/2;
            return {x:x};
        },
        right:function(targetX,targetWidth,width){
            var x = targetX+targetWidth-width;
            return {x:x};
        },
        after:function(targetX,targetWidth,width){
            var x = targetX+targetWidth;
            return {x:x};
        }
    };
$.fn.position = function(conf){
    var target = $(conf.target);
    var x = conf.left;
    var y = conf.top;

    var targetY = target.offset().top;
    var targetHeight = target.height();
    var height = this.height();

    var targetX = target.offset().left;
    var targetWidth = target.width();
    var width = this.width();

    var top = utils[y](targetY,targetHeight,height);
    var left = utils[x](targetX,targetWidth,width);
    if (conf.animate) {
        var options = ($.type(conf.animate)=="object" ? conf.animate : {duration:400} );
        this.animate({
            top:top.y,
            left:left.x
        },options);
    } else {
        this.css({
            top:top.y,
            left:left.x
        });
    }
}

})(jQuery)
