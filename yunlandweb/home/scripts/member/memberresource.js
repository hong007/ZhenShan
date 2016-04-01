/** 我的土地
**/
$(function(){
    var cols = [
        { title:'地块名称', name:'name' , align:'right',width:150},
        { title:'规划用途', name:'planUse' ,width:60, align:'right',renderer:function(val){
            if(val){
                return getLandPurose(val);
            }else{
                return "";
            }
        }},
        {title: '面积', name: 'floorSpace',width:50},
        { title:'合作方式', name:'cooperationMode' ,width:60, align:'right', renderer:function(val){
            return getCooperationMode(val);
        }},
        { title:'状态', name:'state',width:50 ,align:'right', renderer:function(val){
            if(val=='RELEASE'){
                return '审核成功'
            }else if(val=='UNPUBLISHED'){
                return '待审核'
            }else if(val=='CANCELED'){
                return '审核失败'
            }else if(val=='UN_SUBMIT'){
                return '未提交'
            }
        }},
        { title:'操作', name:'state' ,width:100, align:'center', lockWidth:true, lockDisplay: true, renderer: function(val,item){
            if(val=='RELEASE'){
                return '<a target="_blank" href="../../transfer/supplydetail?id='+item.id+'">查看</a>'
            }else if(val=='UNPUBLISHED'){
                return '<a target="_blank" href="../../transfer/supplydetail?id='+item.id+'">查看</a>| <a target="_blank" href="../../member/admin/editresource?id='+item.id+'">编辑</a>'
            }else if(val=='CANCELED'){
                return '<a target="_blank" href="../../transfer/supplydetail?id='+item.id+'">查看</a>| <a target="_blank" href="../../member/admin/editresource?id='+item.id+'">编辑</a>| <a class="delete">删除</a>'
            }else if(val=='UN_SUBMIT'){
                return '<a class="submit">提交</a>| <a target="_blank" href="../../member/admin/editresource?id='+item.id+'">编辑</a>| <a class="delete">删除</a>'
            }
            //return '<a target="_blank" href="../../transfer/supplydetail?id='+item.id+'">查看</a>| <a class="delete">删除</a>'
        }}
    ];

    var data;

    $("#query").click(function(){
        var name = $("#name").val();
        var cooperationMode = $("#cooperationMode").val();
        var state = $("#state").val();
        data = "{'name':\""+name+"\",'cooperationMode':\""+cooperationMode+"\",'state':\""+state+"\"}";
        mmg.load({data:data});
    });

    var mmg = $('.mmg').mmGrid({
        height: 1080,
        width:960,
        nowrap:true,
        cols: cols,
        url: '../api.do',
        method: 'post',
        remoteSort:true,
        root:'result',
        fullWidthRows: true,
        autoLoad: true,
        indexCol:true,
        indexColWidth:30,
        plugins: [
            $('#pg').mmPaginator({limitList:[20]})
        ],
        params: function(){
            return {
                method: 'api.member.supply.get',
                data:data
            }
        }
    });
    mmg.on('cellSelected', function(e, item, rowIndex, colIndex){
        //查看
        if($(e.target).is('.delete') ){
            if(item.state=='RELEASE'){
                alert("云地网提醒您:"+item.name+"已经审核成功,不可以删除");
                return;
            }
            e.stopPropagation(); //阻止事件冒泡
            if(confirm('云地网提醒您:您确定要删除['+item.name+']记录吗?')){
                $.post('../api.do',{method:'api.member.supply.delete',data:'{id:"'+item.id+'"}'},function(data){

                    mmg.removeRow(rowIndex);
                },'json');
            }
        }
        if($(e.target).is('.submit') ){
            if(item.state=='UNPUBLISHED'){
                alert("云地网提醒您:"+item.name+"该记录已提交");
                return;
            }
            e.stopPropagation(); //阻止事件冒泡
            if(confirm('云地网提醒您:您确定要提交['+item.name+']记录吗?')){
                $.post('../api.do',{method:'api.member.supply.submit',data:'{id:"'+item.id+'"}'},function(data){
                    if (data.errors === null || data.errors.length > 0) {
                        alert(data.errors[0].message);
                    }
                    //mmg.removeRow(rowIndex);
                    window.location.reload();
                },'json');
            }
        }
    })

    $("#query").click();

});

