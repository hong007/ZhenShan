/**
 * Created by Administrator on 2015/8/5.
 */
var wait = 60;//时间
function time(o) {//o为按钮的对象，p为可选，这里是60秒过后，提示文字的改变
    if (wait == 0) {
        o.removeAttr("disabled");
        o.html("免费获取验证码");//改变按钮中value的值
        //p.html("如果您在1分钟内没有收到验证码，请检查您填写的手机号码是否正确或重新发送");
        wait = 60;
    } else {
        o.attr("disabled", true);//倒计时过程中禁止点击按钮
        o.html(wait + "秒后重新获取");//改变按钮中value的值
        wait--;
        setTimeout(function () {
                time(o);//循环调用
            },
            1000)
    }
}

function shadowEnter(shadowId){
    $(".supply .move").css("display","none");
    $(".supply .more-text").css("display","none");
    $("."+shadowId+" .move").css("display","block");
    $("."+shadowId+" .more-text").css("display","block");
}
function shadowLeave(shadowId){
    $("."+shadowId+" .move").css("display","none");
    $("."+shadowId+" .more-text").css("display","none");
}

(function(){
    if($.validator){
        $.validator.setDefaults({
            errorElement: 'label'
        });
        jQuery.validator.addMethod("ismobile", function (value, element) {
            var mobile = /^1[3|4|5|7|8]\d{9}$/;
            return this.optional(element) || (mobile.test(value));
        }, "手机格式不对");
        $("#form1").validate({
            rules: {
                code: {required: true,
                    remote: {
                        type: "POST",
                        url: "/base/api.do",             //servlet
                        data: { method: 'api.base.code.velidate', data: function () {
                            var mobilePhone = $('#mobilePhone').val();
                            var code = $('#code').val();
                            return "{'mobilePhone':'" + mobilePhone + "','code':'" + code + "'}"
                        }
                        }
                    }
                },
                mobilePhone:{required: true,ismobile:true,remote: {
                    type: "POST",
                    url: "/base/api.do",             //servlet
                    data: { method: 'api.base.mobile.velidate', data: function () {
                        var mobilePhone = $('#mobilePhone').val();
                        return "{'mobilePhone':'" + mobilePhone + "'}"
                    }
                    }
                }},
                isAgree :{required: true}
            },messages:{
                mobilePhone:{
                    required: "请填写手机号码",
                    ismobile: "手机号码不正确，请检查",
                    remote:'手机号码已注册,请使用其他手机号码'
                },
                code:{
                    remote :"验证码验证失败,请检查手机号码与验证码",
                    required:"请填写验证码"
                },
                isAgree:{
                    required:"请同意云地网服务协议"
                }
            },
            errorPlacement: function (error, element) {
                error.appendTo(element.parent().next());
            }
        });
        $("#getVerifiyCode").click(function () {

            //验证通过后 的js代码写在这里
            // 验证手机号码是否已填写
            var mobilePhone = $('#mobilePhone').val();
            var mobile = /^1[3|4|5|7|8]\d{9}$/;
            if (!mobilePhone) {
                if ($('#mobileError').children().length > 0) {
                    $('#mobileError').children(":first").html('请先填写手机号码');
                } else {
                    $('#mobileError').append("<label for='mobilePhone' class='error'>请先填写手机号码</label>");
                }
                return;
            }
            if (!mobile.test(mobilePhone)) {
                $('#mobileError').children(":first").html('手机号码格式不正确');
                return;
            }
            //获取验证码
            // 设置当前值为disable
            // $("#getVerifiyCode").html("10秒");
            //time($("#getVerifiyCode"))
            $.ajax({ url: "/base/api.do", data: {method: "api.base.verfiycode.get", data: '{mobilePhone:' + mobilePhone + '}'}, type: 'POST', dataType: 'json', success: function (data) {
                if(data.errors.length == 0){
                    time($("#getVerifiyCode"))
                }
            }});
        });
    }


    /*登录与注册*/
    $("#free-register").bind('click',function(){
        $(this).css({"cursor":"pointer","display":"inline-block"});
        $("#form2").css("display","none");
        $("#form1").css("display","block")
    });
    $("#log").bind('click',function(){
        $(this).css({"cursor":"pointer","display":"inline-block"});
        $("#form1").css("display","none");
        $("#form2").css("display","block")
    });
    /*转让与出让地块*/
    $(".index-transfer li:first-child").bind("click",function(){
        $(this).addClass("select-1").css({"cursor":"pointer"});
        $(".index-transfer li:last-child").removeClass("select-2");
        $("#text2").css("display","none");
        $("#text1").css("display","block");
    });
    $(".index-transfer li:last-child").bind("click",function(){
        $(this).addClass("select-2").css({"cursor":"pointer"});
        $(".index-transfer li:first-child").removeClass("select-1");
        $("#text1").css("display","none");
        $("#text2").css("display","block");
    });
    /*土地出让*/

    $(".transfer .new").bind("click",function(){
        $(".transfer li").each(function(){
                $(".transfer li").removeClass("click");
            });
        $(this).addClass("click");
        $("#table1").css("display","block");
        $("#table2").css("display","none");
        $("#table3").css("display","none");
		$("#table4").css("display","none");
    });
    $(".transfer .result").bind("click",function(){
        $(".transfer li").each(function(){
            $(".transfer li").removeClass("click");
        });
        $(this).addClass("click");
        $("#table1").css("display","none");
        $("#table2").css("display","block");
        $("#table3").css("display","none");
		$("#table4").css("display","none");
    })
    ;$(".transfer .notices").bind("click",function(){
        $(".transfer li").each(function(){
            $(".transfer li").removeClass("click");
        });
        $(this).addClass("click");
        $("#table1").css("display","none");
        $("#table2").css("display","none");
        $("#table3").css("display","block");
		$("#table4").css("display","none");
    });
	;$(".transfer .announcement").bind("click",function(){
        $(".transfer li").each(function(){
            $(".transfer li").removeClass("click");
        });
        $(this).addClass("click");
        $("#table1").css("display","none");
        $("#table2").css("display","none");
        $("#table3").css("display","none");
		$("#table4").css("display","block");
    });
    /*土地转让*/
    $(".release-land").bind("mouseenter","click",function(){
        $(this).css("display","none");
        $("#land-none").css("display","block");
    });
    $("#land-none").bind("mouseleave",function(){
        $(this).css("display","none");
        $(".release-land").css("display","block");
    });
    $(".release-demand").bind("mouseenter","click",function(){
        $(this).css("display","none");
        $("#demand-none").css("display","block");
    });
    $("#demand-none").bind("mouseleave",function(){
        $(this).css("display","none");
        $(".release-demand").css("display","block");
    });

    /**顶部左右切换部分*/
    var sWidth = $("#focus").width();
    var len = $("#focus ul li").size();
    var index = 0;
    var picTimer;

    $("#focus .list-circle span").css("opacity",0.4).mouseenter(function() {
        index = $("#focus .list-circle span").index(this);
        showPics(index);
    }).eq(0).trigger("mouseenter");
    $("#focus ul").css("width",sWidth * (len));
    $("#focus ul li").css("width",sWidth);

    $("#focus").hover(function() {
        clearInterval(picTimer);
    },function() {
        picTimer = setInterval(function() {
            showPics(index);
            index++;
            if(index == len) {index = 0;}
        },4000); //此4000代表自动播放的间隔，单位：毫秒
    }).trigger("mouseleave");
    function showPics(index) {
        var nowLeft = -index*sWidth;
        $("#focus ul ").stop(true,false).animate({"left":nowLeft},300);
        $("#focus .list-circle span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
        $("#focus .list-circle span").stop(true,false).animate({"opacity":"1"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
    }

    $("#trippleArrowLeft2").bind('click',function(){
        if(index == 0) {
            index = len-1;
        }else{
            index--;
        }
        showPics(index);
    });
    $("#trippleArrowRight2").bind('click',function(){
        if(index == len-1) {
            index = 0;
        }else{
            index++;
        }
        showPics(index);
    });
})();

$(function(){
    var sWidthMiddle = $("#newsMiddle ul li").width();
    var lenMiddle = $("#newsMiddle ul li").length;
    var indexMiddle = 0;
    var picTimerMiddle;
    $("#newsMiddle ul").css("width",sWidthMiddle * (lenMiddle));
    $("#newsMiddle ul li").css("width",sWidthMiddle);
    $("#newsMiddle ul").hover(function(){
        clearInterval(picTimerMiddle)
    },function(){
        picTimerMiddle=setInterval(function(){
            showPicsMiddle(indexMiddle);
            indexMiddle++;
            if(indexMiddle==lenMiddle){
                indexMiddle=0;
            }
        },4000)
    });
    (function(){
        picTimerMiddle=setInterval(function(){
            showPicsMiddle(indexMiddle);
            indexMiddle++;
            if(indexMiddle==lenMiddle){
                indexMiddle=0;
            }
        },4000)
    })();
    /*向右的箭头切换*/
    /*$("#newsMiddle .arrow-right").click(function(){
        clearInterval(picTimerMiddle);
    },function(){
        picTimerMiddle = setInterval(function() {
            showPicsMiddle(index);
            index++;
            if(index == lenMiddle) {index = 0;}
        },0);
    }).trigger("mouseleave");*/
    $("#newsMiddle .arrow-right");

    $("#newsMiddle .list-blue span").css("opacity",0.4).mouseenter(function() {
        indexMiddle = $("#newsMiddle .list-blue span").index(this);
        showPicsMiddle(indexMiddle);
    }).eq(0).trigger("mouseenter");
    function showPicsMiddle(indexMiddle) {
        var nowLeft = -indexMiddle*sWidthMiddle;
        $("#newsMiddle ul").stop(true,false).animate({"left":nowLeft},300);
        $("#newsMiddle .list-blue span").removeClass("on").eq(indexMiddle).addClass("on"); //为当前的按钮切换到选中的效果
        $("#newsMiddle .list-blue span").stop(true,false).animate({"opacity":"1"},300).eq(indexMiddle).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
    }
});

(function(){

    var
        index = 0 ;
    Swidth = 1170 ;
    timer = null ;
    var hotwidth=$(".hot").width();
    var len=$(".hot").length;
    $(".aa").css("width",hotwidth*(len));

    function NextPage()
    {
        if(index>len-1)
        {
            index = 0 ;
        }

        $("#news2 .aa").stop(true, false).animate({left: -index*Swidth+"px"},600)
    }

    function PrevPage()
    {
        if(index<0)
        {
            index = len-1 ;
        }

        $("#news2 .aa").stop(true, false).animate({left: -index*Swidth+"px"},600)
    }


//下一页
    $(".arrow_right").click(function(){
        index++ ;
        NextPage();
    });
//上一页
    $(".arrow_left").click(function(){
        index--;
        PrevPage();
    });
//自动滚动
    var timer = setInterval(function(){
        index++ ;
        NextPage();
    },2000);

    $("#news2 ").mouseover(function(){
        clearInterval(timer);
    });
    $('#news2').mouseleave(function(){
        timer = setInterval(function(){
            index++ ;
            NextPage();
        },2000);
    });
})


//首页搜索tab
function setTab(name,cursel){
cursel_0=cursel;
for(var i=1; i<=links_len; i++){
var menu = document.getElementById(name+i);
var menudiv = document.getElementById("con_"+name+"_"+i);
if(i==cursel){
menu.className="active";
menudiv.style.display="block";
}
else{
menu.className="";
menudiv.style.display="none";
}
}
}
function Next(){
cursel_0++;
if (cursel_0>links_len)cursel_0=1
setTab(name_0,cursel_0);
}
 
var name_0='one';
var cursel_0=1;
var links_len,iIntervalId;
onload=function(){
var links = document.getElementById("search-tab").getElementsByTagName('li')
links_len=links.length;
for(var i=0; i<links_len; i++){
links[i].onmouseover=function(){
clearInterval(iIntervalId);
this.onmouseout=function(){
iIntervalId = setInterval(Next,ScrollTime);;
}
}
}
document.getElementById("con_"+name_0+"_"+links_len).parentNode.onmouseover=function(){
clearInterval(iIntervalId);
this.onmouseout=function(){
iIntervalId = setInterval(Next,ScrollTime);;
}
}
setTab(name_0,cursel_0);
iIntervalId = setInterval(Next,ScrollTime);
}

   <!--tab 切换代码-->
$(document).ready(function() {  
  
    //Default Action  
    $(".tab_content").hide(); //Hide all content  
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab  
    $(".tab_content:first").show(); //Show first tab content  
      
    //On Click Event  
    $("ul.tabs li").click(function() {  
        $("ul.tabs li").removeClass("active"); //Remove any "active" class  
        $(this).addClass("active"); //Add "active" class to selected tab  
        $(".tab_content").hide(); //Hide all tab content  
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content  
        $(activeTab).fadeIn(); //Fade in the active content  
        return false;  
    });  
  
});  
/* 城市更新 焦点图 */
(function(e){e.fn.OM_HDP=function(t){function v(){u==e("li",s).length-1?e("li:eq(0)",s).mouseover():e("li",s).eq(u).next("li").mouseover()}var n={delay:0,time:0,title:0,type:0},r=e.extend({},n,t),s=e(this),o="",u=0,a=s.css("width"),f=s.css("height");r.type==0&&(l=e("img",s).length,e("img",s).css({width:a,height:f,left:"0px",top:"0px",border:"none",display:"none",position:"absolute"}));if(r.type==1){e("img",s).css({width:a,height:f,"float":"left",display:"block",border:"none"}),_content=s.html(),s.html("<div class='pic_scroll'><div class='cont con0'>"+_content+"</div><div class='cont'>"+_content+"</div></div>");var l=e("img",s).length/2,c=parseInt(a)*l,p=0;e(".pic_scroll").css({width:c*2+"px",height:f,position:"relative"}),e(".cont").css({width:c+"px",height:f,"float":"left"})}if(r.type==2){e("img",s).css({width:a,height:f,display:"block",border:"none"}),_content=s.html(),s.html("<div class='pic_scroll'><div class='cont con0'>"+_content+"</div><div class='cont'>"+_content+"</div></div>");var l=e("img",s).length/2,d=parseInt(f)*l,p=0;e(".pic_scroll").css({width:a,height:d*2+"px",position:"relative"}),e(".cont").css({width:a,height:d+"px"})}s.append("<ul></ul>");for(i=1;i<l+1;i++)o+="<li>"+i+"</li>";e("ul",s).html(o),e("ul",s).css({position:"absolute",padding:"0px",margin:"0px",bottom:"7px",right:"15px","z-index":999}),e("li",s).css({"float":"left",listStyleType:"none",color:"#FCD998",display:"inline",textAlign:"center",width:"16px",height:"16px",marginTop:"0px",marginRight:"3px",marginBottom:"0px",marginLeft:"3px",lineHeight:"16px",backgroundColor:"#333333",cursor:"pointer"}),r.title==1&&(s.append("<div class='hdp_bg'></div>"),s.append("<div class='hdp_title'></div>"),e(".hdp_bg").css({position:"absolute",width:s.css("width"),height:"30px",top:"0px",left:"0px",backgroundColor:"#000000",opacity:.5,"z-index":50}),e(".hdp_title").css({position:"absolute",width:parseInt(s.css("width"))-e("ul",s).width()+25+"px",height:"30px",top:"0px",left:"0px",lineHeight:"30px",paddingLeft:"20px",overflow:"hidden",color:"#ffffff","z-index":50})),e("li",s).live("mouseover",function(){u=e("li",s).index(this),a_curr=e(".con0").find("a").eq(u),r.type==0&&(a_curr=e("a",s).eq(u),e("img",s).is(":animated")&&e("img",s).stop(),a_curr.find("img").fadeIn(r.delay),a_curr.siblings("a").find("img").fadeOut(r.delay)),r.type==1&&(e(".pic_scroll").is(":animated")&&(abs(parseInt(e(".pic_scroll").css("left"))%parseInt(a))>=parseInt(a)/2?e(".pic_scroll").animate({left:"-="+parseInt(a)-abs(parseInt(e(".pic_scroll").css("left"))%parseInt(a))},r.delay):e(".pic_scroll").animate({left:"-="+parseInt(a)+abs(parseInt(e(".pic_scroll").css("left"))%parseInt(a))},r.delay),e(".pic_scroll").stop()),e(".pic_scroll").css("left")=="-"+c+"px"&&e(".pic_scroll").css("left","0px"),e(".pic_scroll").animate({left:"-="+parseInt(a)*(u-p)},r.delay),p=u),r.type==2&&(e(".pic_scroll").is(":animated")&&(abs(parseInt(e(".pic_scroll").css("top"))%parseInt(f))>=parseInt(f)/2?e(".pic_scroll").animate({top:"-="+parseInt(f)-abs(parseInt(e(".pic_scroll").css("top"))%parseInt(f))},r.delay):e(".pic_scroll").animate({top:"-="+parseInt(f)+abs(parseInt(e(".pic_scroll").css("top"))%parseInt(f))},r.delay),e(".pic_scroll").stop()),e(".pic_scroll").css("top")=="-"+d+"px"&&e(".pic_scroll").css("top","0px"),e(".pic_scroll").animate({top:"-="+parseInt(f)*(u-p)},r.delay),p=u),e(this).addClass("icon_hover").css({color:"#ffffff",backgroundColor:"#e45f5c",fontWeight:"bold"}).siblings().removeClass("icon_hover").css({color:"#000000",backgroundColor:"#ffffff",fontWeight:"bold"}),r.title==1&&(atitle=a_curr.attr("title")=="undefined"?"":a_curr.attr("title"),e(".hdp_title").text(atitle)),clearInterval(h),h=setInterval(v,r.time)}),e("img",s).hover(function(){clearInterval(h)},function(){h=setInterval(v,r.time)}),h=setInterval(v,r.time),e("li:eq(0)",s).mouseover()}})(jQuery)
$(function(){
	$(".focus_container").OM_HDP({delay:300,time:5000,title:1,type:2});
})