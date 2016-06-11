
$(function() {
    /*左右滑动菜单*/
    var _bodyHeight = $(window).height();
    $(".containBox_bg,.sideBox,body.containBox").height(_bodyHeight);
    $(".navBtn").click(function() {
        $(".containBox_bg").show();
        $(".containBox").height(_bodyHeight);
        $(".containBox").addClass('sideBox-open');
        $("body").addClass('sideBox-open');
    });
    $(".containBox_bg").click(function() {
        $(".containBox,.sideBox,body").removeAttr("style");
        $(".containBox").removeClass('sideBox-open');
        
        $(this).hide();
        $("body").removeClass('sideBox-open');
    });

    // 下拉选框
    $(".transferp").click(function(){
        $(".typemenu").toggle();
        $(this).toggleClass("tr-active");
    })
});

// $(function(){

// 	// 显示首页侧栏
// 	var $body = $('body');
// 	function disable(e) {
// 		e.preventDefault();
// 	}
//     $('#panelSwitch').click(function(){
// 	    $(document).on('touchmove', disable);
// 	    if($body.hasClass('panel-active')){
// 		    $body.removeClass('panel-active');
// 		    $(document).off('touchmove', disable);
// 	    }
// 	    else{
// 	        $body.addClass('panel-active');
// 	        $(document).on('touchmove', disable);
// 	    }
//     });
    
//     var windowHeight = $(document).height(),
//     $body = $("body");
//     $body.css("height", windowHeight);
//     var startX, startY, moveEndX, moveEndY, X, Y;

// 	$("body").on("touchstart", function(e) {
// 	    startX = e.originalEvent.changedTouches[0].pageX,
// 		startY = e.originalEvent.changedTouches[0].pageY;
// 	});
// 	$("body").on("touchmove", function(e) {
// 		moveEndX = e.originalEvent.changedTouches[0].pageX,
// 		moveEndY = e.originalEvent.changedTouches[0].pageY,
// 	    X = moveEndX - startX,
// 	    Y = moveEndY - startY;
	    
// 	    if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {  //Math.abs(X) 取X的绝对值
// 	    	$body.removeClass('panel-active');
// 	    	$(document).off('touchmove', disable);
// 	    }
	    
// 	});
// });

/* 导航卷帘 */

// 手风琴效果
(function($, window, document, undefined) {
    var pluginName = "jqueryAccordionMenu";
    var defaults = {
        speed: 300,
        showDelay: 0,
        hideDelay: 0,
        singleOpen: true,
        clickEffect: true
    };
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({},
        defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init()
    };
    $.extend(Plugin.prototype, {
        init: function() {
            this.openSubmenu();
            this.submenuIndicators();
            // if (defaults.clickEffect) {
            //     this.addClickEffect()
            // }
        },
        openSubmenu: function() {
            $(this.element).children("ul").find("li").bind("click touchstart",
            function(e) {
                e.stopPropagation();
                e.preventDefault();
                if ($(this).children(".submenu").length > 0) {
                    if ($(this).children(".submenu").css("display") == "none") {
                        $(this).children(".submenu").delay(defaults.showDelay).slideDown(defaults.speed);
                        $(this).children(".submenu").siblings("a").addClass("submenu-indicator-minus");
                        if (defaults.singleOpen) {
                            $(this).siblings().children(".submenu").slideUp(defaults.speed);
                            $(this).siblings().children(".submenu").siblings("a").removeClass("submenu-indicator-minus")
                        }
                        return false
                    } else {
                        $(this).children(".submenu").delay(defaults.hideDelay).slideUp(defaults.speed)
                    }
                    if ($(this).children(".submenu").siblings("a").hasClass("submenu-indicator-minus")) {
                        $(this).children(".submenu").siblings("a").removeClass("submenu-indicator-minus")
                    }
                }
                window.location.href = $(this).children("a").attr("href")
            })
        },
        submenuIndicators: function() {
            if ($(this.element).find(".submenu").length > 0) {
                $(this.element).find(".submenu").siblings("a").append("<em class='submenu-indicator'></em>")
            }
        },
        /*addClickEffect: function() {
            var ink, d, x, y;
            $(this.element).find("a").bind("click touchstart",
            function(e) {
                $(".ink").remove();
                if ($(this).children(".ink").length === 0) {
                    $(this).prepend("<span class='ink'></span>")
                }
                ink = $(this).find(".ink");
                ink.removeClass("animate-ink");
                if (!ink.height() && !ink.width()) {
                    d = Math.max($(this).outerWidth(), $(this).outerHeight());
                    ink.css({
                        height: d,
                        width: d
                    })
                }
                x = e.pageX - $(this).offset().left - ink.width() / 2;
                y = e.pageY - $(this).offset().top - ink.height() / 2;
                ink.css({
                    top: y + 'px',
                    left: x + 'px'
                }).addClass("animate-ink")
            })
        }*/
    });
    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options))
            }
        });
        return this
    }
})(jQuery, window, document);


/* 返回顶部 */
(function(a){
	 a.fn.scrollToTop=function(c){var 
	 d={speed:800};c&&a.extend(d,{speed:c});
	 return this.each(function(){var b=a(this);
	 a(window).scroll(function(){100<a(this).scrollTop()?b.fadeIn():b.fadeOut()});
	 b.click(function(b){b.preventDefault();
	 a("body, html").animate({scrollTop:0},d.speed)})})}
})(jQuery);
