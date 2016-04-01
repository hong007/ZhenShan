/**
 * Created by Administrator on 2015/8/3.
 */
(function(){
    $("ul li").bind("mouseenter",function(){
        $(this).css("cursor","pointer")
    });

    /*$("ul li").bind("click",function(){
        $(".member-my li").each(function(index){
            $(index).removeClass("click");

        });
        $(this).addClass("click");
    });*/
    /*给表格内容的奇数行加颜色*/
    $("tr:even").css("background","#f7f7f7");

    /*切换到基本信息页面*/
    $(".base-message").click(

    )

})();