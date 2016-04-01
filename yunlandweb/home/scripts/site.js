// 对接活动弹窗
$(function ($) {
		//弹出信息框
		$("#example").hover(function () {
			$(this).stop().animate({
				opacity: '0.6'
			}, 600);
		}, function () {
			$(this).stop().animate({
				opacity: '1'
			}, 1000);
		}).on('click', function () {
			$("body").append("<div id='mask'></div>");
			$("#mask").addClass("mask").fadeIn("slow");
			$("#LoginBox").fadeIn("slow");
		});
		//
		//按钮的透明度
		$("#loginbtn").hover(function () {
			$(this).stop().animate({
				opacity: '1'
			}, 600);
		}, function () {
			$(this).stop().animate({
				opacity: '0.8'
			}, 1000);
		});
		//文本框不允许为空---按钮触发
		$("#loginbtn").on('click', function () {
			var txtName = $("#txtName").val();
			var txtPwd = $("#txtPwd").val();
			if (txtName == "" || txtName == undefined || txtName == null) {
				if (txtPwd == "" || txtPwd == undefined || txtPwd == null) {
					$(".warning").css({ display: 'block' });
				}
				else {
					$("#warn").css({ display: 'block' });
					$("#warn2").css({ display: 'none' });
				}
			}
			else {
				if (txtPwd == "" || txtPwd == undefined || txtPwd == null) {
					$("#warn").css({ display: 'none' });
					$(".warn2").css({ display: 'block' });
				}
				else {
					$(".warning").css({ display: 'none' });
				}
			}
		});
		//文本框不允许为空---单个文本触发
		$("#txtUnit").on('blur', function () {
			var txtName = $("#txtUnit").val();
			if (txtName == "" || txtName == undefined || txtName == null) {
				$("#warn").css({ display: 'block' });
			}
			else {
				$("#warn").css({ display: 'none' });
			}
		});
		$("#txtUnit").on('focus', function () {
			$("#warn").css({ display: 'none' });
		});
		//2
		$("#txtName").on('blur', function () {
			var txtName = $("#txtName").val();
			if (txtName == "" || txtName == undefined || txtName == null) {
				$("#warn2").css({ display: 'block' });
			}
			else {
				$("#warn2").css({ display: 'none' });
			}
		});
		$("#txtName").on('focus', function () {
			$("#warn2").css({ display: 'none' });
		});
		//3
		$("#txtPhone").on('blur', function () {
			var txtName = $("#txtPhone").val();
			if (txtName == "" || txtName == undefined || txtName == null) {
				$("#warn3").css({ display: 'block' });
			}
			else {
				$("#warn3").css({ display: 'none' });
			}
		});
		$("#txtPhone").on('focus', function () {
			$("#warn3").css({ display: 'none' });
		});
		//4
		$("#txtEmail").on('blur', function () {
			var txtName = $("#txtEmail").val();
			if (txtName == "" || txtName == undefined || txtName == null) {
				$("#warn4").css({ display: 'block' });
			}
			else {
				$("#warn4").css({ display: 'none' });
			}
		});
		$("#txtEmail").on('focus', function () {
			$("#warn4").css({ display: 'none' });
		});
		//5
		$("#txtMa").on('blur', function () {
			var txtName = $("##txtMa").val();
			if (txtName == "" || txtName == undefined || txtName == null) {
				$("#warn5").css({ display: 'block' });
			}
			else {
				$("#warn5").css({ display: 'none' });
			}
		});
		$("#txtMa").on('focus', function () {
			$("#warn5").css({ display: 'none' });
		});
		//关闭
		$(".close_btn").hover(function () { $(this).css({ color: 'black' }) }, function () { $(this).css({ color: '#999' }) }).on('click', function () {
			$("#LoginBox").fadeOut("fast");
			$("#mask").css({ display: 'none' });
		});
	});


/* 详情页弹窗 */

(function(window){
    window.site = {
        //upload_pic:function(){
        //    var file = document.getElementById("imgFile").files[0];
        //    var formData = new FormData();
        //    formData.append("File",file);
        //    formData.append("Type","PHOTO");
        //    $.ajax({
        //        url: '/base/api/fileUpload.do' ,
        //        type: 'POST',
        //        data: formData,
        //        async: false,
        //        cache: false,
        //        contentType: false,
        //        processData: false,
        //        success: function (returndata) {
        //            alert(returndata);
        //        },
        //        error: function (returndata) {
        //            alert(returndata);
        //        }
        //    });
        //},

        checkboxAgreeToggle: function(obj,val){
            $(obj).hide();
            $(obj).siblings().show();
            $("#isAgree").val(val);
            if(!val){
                $("#agreeNext").attr("disabled","disabled");
            }else{
                $("#agreeNext").attr("disabled",false);
            }
        },
        changeTab: function(obj,eleShow,eleHide,currenttab){
            $(obj).addClass('active');
            $(obj).siblings().removeClass('active');
            $('#'+eleShow).show();
            $('#'+eleHide).hide();
            if("recommend"==currenttab){
                $("#sellMethod_li").empty();
            }else if("sell"==currenttab){
                $("#sellMethod_li").empty();
                //$("#sellmethod").find("option:selected").text('出让方式');
                sellmethod(currenttab);
            }else if("transfer"==currenttab){
                //删除所有的元素
                $("#sellMethod_li").empty();
                //$("#sellmethod").empty();
                sellmethod(currenttab);
            }
            $("#businessType").data("currenttab",currenttab);

        },
        changeTabs: function(obj,eleShow,eleHides){
            $(obj).addClass('click');
            $(obj).siblings().removeClass('click');
            $('#'+eleShow).show();
            $('#'+eleShow).siblings().hide();
        }
    };
    //土地推介-土地出让-土地转让 查询
    $('#searchAbutton').click(function(){
        var cmbProvince = $('#cmbProvince').val();
        var cmbCity = $('#cmbCity').val();
        var cmbArea = $('#cmbArea').val();
        var purpose = $('#purpose').val();
        var sellmethod = $('#sellmethod').val();
        var keyword = $('#keyword').val();
        var hrefurl = "/";
        var currenttab = $("#businessType").data("currenttab");
        if(!currenttab){
            currenttab = 'recommend'
        }
        window.location.href= "../screen/"+currenttab+'/index.html?cmbProvince='+cmbProvince+'&cmbCity='+cmbCity+'&cmbArea='+cmbArea
        +'&purpose='+(purpose?purpose:'')+'&sellmethod='+(sellmethod?sellmethod:'')+'&keyword='+keyword+'&businessType='+currenttab;
        //console.log("------>"+currenttab);
    });
})(window);



/* 弹窗 */
Function.prototype.binding = function() {
    if (arguments.length < 2 && typeof arguments[0] == "undefined") return this;
    var __method = this, args = jQuery.makeArray(arguments), object = args.shift();
    return function() {
        return __method.apply(object, args.concat(jQuery.makeArray(arguments)));
    }
}

var Class = function(subclass){
	subclass.setOptions = function(options){
		this.options = jQuery.extend({}, this.options,options);
		for(var key in options){
			if(/^on[A-Z][A-Za-z]*$/.test(key)){
				$(this).bind(key,options[key]);
			}
		}
	}
    var fn =  function(){
        if(subclass._init && typeof subclass._init == 'function'){
            this._init.apply(this,arguments);
        }
    }
    if(typeof subclass == 'object'){
        fn.prototype = subclass;
    }
    return fn;
}

var PopupLayer = new Class({
	options:{
		trigger:null,                            //触发的元素或id,必填参数
		popupBlk:null,                           //弹出内容层元素或id,必填参数
		closeBtn:null,                           //关闭弹出层的元素或id
		popupLayerClass:"popupLayer",            //弹出层容器的class名称
		eventType:"click",                       //触发事件的类型
		offsets:{                                //弹出层容器位置的调整值
			x:0,
			y:0
		},
		useFx:false,                             //是否使用特效
		useOverlay:false,                        //是否使用全局遮罩
		usePopupIframe:true,                     //是否使用容器遮罩
		isresize:true,                           //是否绑定window对象的resize事件
		onBeforeStart:function(){}            //自定义事件
	},
	_init:function(options){
		this.setOptions(options);                //载入设置
		this.isSetPosition = this.isDoPopup = this.isOverlay = true;    //定义一些开关
		this.popupLayer = $(document.createElement("div")).addClass(this.options.popupLayerClass);     //初始化最外层容器
		this.popupIframe = $(document.createElement("iframe")).attr({border:0,frameborder:0});         //容器遮罩,用于屏蔽ie6下的select
		this.trigger = $(this.options.trigger);                         //把触发元素封装成实例的一个属性，方便使用及理解
		this.popupBlk = $(this.options.popupBlk);                       //把弹出内容层元素封装成实例的一个属性
		this.closeBtn = $(this.options.closeBtn);                       //把关闭按钮素封装成实例的一个属性
		$(this).trigger("onBeforeStart");                               //执行自定义事件。
		this._construct()                                               //通过弹出内容层，构造弹出层，即为其添加外层容器及底层iframe
		this.trigger.bind(this.options.eventType,function(){            //给触发元素绑定触发事件
			if(this.isSetPosition){
				this.setPosition(this.trigger.offset().left + this.options.offsets.x, this.trigger.offset().top + this.trigger.get(0).offsetHeight + this.options.offsets.y);
			}
			this.options.useOverlay?this._loadOverlay():null;               //如果使用遮罩则加载遮罩元素
			(this.isOverlay && this.options.useOverlay)?this.overlay.show():null;
			if(this.isDoPopup && (this.popupLayer.css("display")== "none")){
				this.options.useFx?this.doEffects("open"):this.popupLayer.show();
			}							 
		}.binding(this));
		this.isresize?$(window).bind("resize",this.doresize.binding(this)):null;
		this.options.closeBtn?this.closeBtn.bind("click",this.close.binding(this)):null;   //如果有关闭按钮，则给关闭按钮绑定关闭事件
	},
	_construct:function(){                  //构造弹出层
		this.popupBlk.show();
		this.popupLayer.append(this.popupBlk.css({opacity:1})).appendTo($(document.body)).css({position:"absolute",'z-index':2,width:this.popupBlk.get(0).offsetWidth,height:this.popupBlk.get(0).offsetHeight});
		this.options.usePopupIframe?this.popupLayer.append(this.popupIframe):null;
		this.recalculatePopupIframe();
		this.popupLayer.hide();
	},
	_loadOverlay:function(){                //加载遮罩
		pageWidth = ($.browser.version=="6.0")?$(document).width()-21:$(document).width();
		this.overlay?this.overlay.remove():null;
		this.overlay = $(document.createElement("div"));
		this.overlay.css({position:"absolute","z-index":1,left:0,top:0,zoom:1,display:"none",width:pageWidth,height:$(document).height()}).appendTo($(document.body)).append("<div style='position:absolute;z-index:2;width:100%;height:100%;left:0;top:0;opacity:0.3;filter:Alpha(opacity=30);background:#000'></div><iframe frameborder='0' border='0' style='width:100%;height:100%;position:absolute;z-index:1;left:0;top:0;filter:Alpha(opacity=0);'></iframe>")
	},
	doresize:function(){
		this.overlay?this.overlay.css({width:($.browser.version=="6.0")?$(document).width()-21:$(document).width(),height:($.browser.version=="6.0")?$(document).height()-4:$(document).height()}):null;
		if(this.isSetPosition){
			this.setPosition(this.trigger.offset().left + this.options.offsets.x, this.trigger.offset().top + this.trigger.get(0).offsetHeight + this.options.offsets.y);
		}
	},
	setPosition:function(left,top){          //通过传入的参数值改变弹出层的位置
		this.popupLayer.css({left:left,top:top});
	},
	doEffects:function(way){                //做特效
		way == "open"?this.popupLayer.show("slow"):this.popupLayer.hide("slow");
		
	},
	recalculatePopupIframe:function(){     //重绘popupIframe,这个不知怎么改进，只好先用这个笨办法。
		this.popupIframe.css({position:"absolute",'z-index':-1,left:0,top:0,opacity:0,width:this.popupBlk.get(0).offsetWidth,height:this.popupBlk.get(0).offsetHeight});
	},
	close:function(){                      //关闭方法
		this.options.useOverlay?this.overlay.hide():null;
		this.options.useFx?this.doEffects("close"):this.popupLayer.hide();
	}
});﻿

//弹窗综合效果
$(document).ready(function(){	
	var t9 = new PopupLayer({
		trigger:"#zx-but",
		popupBlk:"#popup-con",
		closeBtn:"#down-but",
		useOverlay:true,
		useFx:true,
		offsets:{
			x:0,
			y:-41
		}
	});
	t9.doEffects = function(way){
		if(way == "open"){
			this.popupLayer.css({opacity:0.3}).show(300,function(){
				this.popupLayer.animate({
					left:($(document).width() - this.popupLayer.width())/2,
					top:(document.documentElement.clientHeight - this.popupLayer.height())/2 + $(document).scrollTop(),
					opacity:0.8
				},300,function(){this.popupLayer.css("opacity",1)}.binding(this));
			}.binding(this));
		}
		else{
			this.popupLayer.animate({
				left:this.trigger.offset().left,
				top:this.trigger.offset().top,
				opacity:0.1
			},{duration:200,complete:function(){this.popupLayer.css("opacity",1);this.popupLayer.hide()}.binding(this)});
		}
	}
});

//鼠标悬停出消息提示框
!function(t,o,s,e){function r(o,s){this.element=t(o),this.settings=t.extend({},l,s),this._defaults=l,this._name=d,this._title=this.element.attr("title"),this.mode="hide",this.init()}function i(){var t=o.navigator.msMaxTouchPoints,e="ontouchstart"in s.createElement("div");return t||e?!0:!1}function n(o){var s=o.clone();s.css("visibility","hidden"),t("body").append(s);var e=s.outerHeight();return s.remove(),e}function a(s){var e,r,i,a=s.tooltip(),d=s.element,l=s,f=t(o),p=10;switch(l.settings.position){case"top":r=d.offset().left+d.outerWidth()/2-a.outerWidth()/2,e=d.offset().top-n(a)-p,a.find(".tipso_arrow").css({marginLeft:-8}),e<f.scrollTop()?(e=d.offset().top+d.outerHeight()+p,a.find(".tipso_arrow").css({"border-bottom-color":l.settings.background,"border-top-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("bottom")):(a.find(".tipso_arrow").css({"border-top-color":l.settings.background,"border-bottom-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("top"));break;case"bottom":r=d.offset().left+d.outerWidth()/2-a.outerWidth()/2,e=d.offset().top+d.outerHeight()+p,a.find(".tipso_arrow").css({marginLeft:-8}),e+n(a)>f.scrollTop()+f.outerHeight()?(e=d.offset().top-n(a)-p,a.find(".tipso_arrow").css({"border-top-color":l.settings.background,"border-bottom-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("top")):(a.find(".tipso_arrow").css({"border-bottom-color":l.settings.background,"border-top-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass(l.settings.position));break;case"left":r=d.offset().left-a.outerWidth()-p,e=d.offset().top+d.outerHeight()/2-n(a)/2,a.find(".tipso_arrow").css({marginTop:-8,marginLeft:""}),r<f.scrollLeft()?(r=d.offset().left+d.outerWidth()+p,a.find(".tipso_arrow").css({"border-right-color":l.settings.background,"border-left-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("right")):(a.find(".tipso_arrow").css({"border-left-color":l.settings.background,"border-right-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass(l.settings.position));break;case"right":r=d.offset().left+d.outerWidth()+p,e=d.offset().top+d.outerHeight()/2-n(a)/2,a.find(".tipso_arrow").css({marginTop:-8,marginLeft:""}),r+p+l.settings.width>f.scrollLeft()+f.outerWidth()?(r=d.offset().left-a.outerWidth()-p,a.find(".tipso_arrow").css({"border-left-color":l.settings.background,"border-right-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("left")):(a.find(".tipso_arrow").css({"border-right-color":l.settings.background,"border-left-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass(l.settings.position))}r<f.scrollLeft()&&("bottom"==l.settings.position||"top"==l.settings.position)&&(a.find(".tipso_arrow").css({marginLeft:r-8}),r=0),r+l.settings.width>f.outerWidth()&&("bottom"==l.settings.position||"top"==l.settings.position)&&(i=f.outerWidth()-(r+l.settings.width),a.find(".tipso_arrow").css({marginLeft:-i-8,marginTop:""}),r+=i),r<f.scrollLeft()&&("left"==l.settings.position||"right"==l.settings.position)&&(r=d.offset().left+d.outerWidth()/2-a.outerWidth()/2,a.find(".tipso_arrow").css({marginLeft:-8,marginTop:""}),e=d.offset().top-n(a)-p,e<f.scrollTop()?(e=d.offset().top+d.outerHeight()+p,a.find(".tipso_arrow").css({"border-bottom-color":l.settings.background,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("bottom")):(a.find(".tipso_arrow").css({"border-top-color":l.settings.background,"border-bottom-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("top")),r+l.settings.width>f.outerWidth()&&(i=f.outerWidth()-(r+l.settings.width),a.find(".tipso_arrow").css({marginLeft:-i-8,marginTop:""}),r+=i),r<f.scrollLeft()&&(a.find(".tipso_arrow").css({marginLeft:r-8}),r=0)),r+l.settings.width>f.outerWidth()&&("left"==l.settings.position||"right"==l.settings.position)&&(r=d.offset().left+d.outerWidth()/2-a.outerWidth()/2,a.find(".tipso_arrow").css({marginLeft:-8,marginTop:""}),e=d.offset().top-n(a)-p,e<f.scrollTop()?(e=d.offset().top+d.outerHeight()+p,a.find(".tipso_arrow").css({"border-bottom-color":l.settings.background,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("bottom")):(a.find(".tipso_arrow").css({"border-top-color":l.settings.background,"border-bottom-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),a.removeClass("top bottom left right"),a.addClass("top")),r+l.settings.width>f.outerWidth()&&(i=f.outerWidth()-(r+l.settings.width),a.find(".tipso_arrow").css({marginLeft:-i-8,marginTop:""}),r+=i),r<f.scrollLeft()&&(a.find(".tipso_arrow").css({marginLeft:r-8}),r=0)),a.css({left:r+l.settings.offsetX,top:e+l.settings.offsetY})}var d="tipso",l={speed:400,background:"#55b555",color:"#ffffff",position:"top",width:200,delay:200,offsetX:0,offsetY:0,content:null,ajaxContentUrl:null,useTitle:!0,onBeforeShow:null,onShow:null,onHide:null};t.extend(r.prototype,{init:function(){var o=this,e=this.element;e.addClass("tipso_style").removeAttr("title"),i()?(e.on("click."+d,function(t){"hide"==o.mode?o.show():o.hide(),t.stopPropagation()}),t(s).on("click",function(){"show"==o.mode&&o.hide()})):(e.on("mouseover."+d,function(){o.show()}),e.on("mouseout."+d,function(){o.hide()}))},tooltip:function(){return this.tipso_bubble||(this.tipso_bubble=t('<div class="tipso_bubble"><div class="tipso_content"></div><div class="tipso_arrow"></div></div>')),this.tipso_bubble},show:function(){var s=this.tooltip(),e=this,r=t(o);t.isFunction(e.settings.onBeforeShow)&&e.settings.onBeforeShow(t(this)),s.css({background:e.settings.background,color:e.settings.color,width:e.settings.width}).hide(),s.find(".tipso_content").html(e.content()),a(e),r.resize(function(){a(e)}),e.timeout=o.setTimeout(function(){s.appendTo("body").stop(!0,!0).fadeIn(e.settings.speed,function(){e.mode="show",t.isFunction(e.settings.onShow)&&e.settings.onShow(t(this))})},e.settings.delay)},hide:function(){var s=this,e=this.tooltip();o.clearTimeout(s.timeout),s.timeout=null,e.stop(!0,!0).fadeOut(s.settings.speed,function(){t(this).remove(),t.isFunction(s.settings.onHide)&&"show"==s.mode&&s.settings.onHide(t(this)),s.mode="hide"})},destroy:function(){var t=this.element;t.off("."+d),t.removeData(d),t.removeClass("tipso_style").attr("title",this._title)},content:function(){var o,s=this.element,e=this,r=this._title;return o=e.settings.ajaxContentUrl?t.ajax({type:"GET",url:e.settings.ajaxContentUrl,async:!1}).responseText:e.settings.content?e.settings.content:e.settings.useTitle===!0?r:s.data("tipso")},update:function(t,o){var s=this;return o?void(s.settings[t]=o):s.settings[t]}}),t[d]=t.fn[d]=function(o){var s=arguments;if(o===e||"object"==typeof o)return this instanceof t||t.extend(l,o),this.each(function(){t.data(this,"plugin_"+d)||t.data(this,"plugin_"+d,new r(this,o))});if("string"==typeof o&&"_"!==o[0]&&"init"!==o){var i;return this.each(function(){var e=t.data(this,"plugin_"+d);e||(e=t.data(this,"plugin_"+d,new r(this,o))),e instanceof r&&"function"==typeof e[o]&&(i=e[o].apply(e,Array.prototype.slice.call(s,1))),"destroy"===o&&t.data(this,"plugin_"+d,null)}),i!==e?i:this}}}(jQuery,window,document);