/**
 * Created by xiniu5 on 2015/8/6.
 */
$(function(){
    $("#query").click(function(){
        var type = $("#type").val();
        var method = $("#method").val();
        var data = {
            pageSize:10,
            pageNumber:1
        };
        $.ajax({ type: "post",//使用get方法访问后台
            dataType: "json",//返回json格式的数据
            url:'/recommend/indexFind.do',
            data:{method:'api.recommend.find',data:JSON.stringify(data)},
            success: function(msg){
            }
        })
    });


});