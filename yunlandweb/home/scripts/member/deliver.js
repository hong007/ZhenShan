/** 我的土地
**/
$(function(){
    var cols = [
        { title:'投递需求名称', name:'demandName' , align:'right'},
        { title:'面积', name:'area' , align:'right'},
        {title: '规划用途', name: 'planUse',align:'right',renderer:function(val){
            if(val){
                return getLandPurose(val);
            }else{
                return "";
            }
        }},
        { title:'合作方式', name:'cooperationMode' ,renderer:function(val){
            if(val){
                return getCooperationMode(val);
            }else{
                return "";
            }
        }},
        { title:'投递地块名称', name:'supplyName' ,align:'right'}
        //{ title:'操作', name:'' , align:'center', lockWidth:true, lockDisplay: true, renderer: function(val){
        //    return '<a>查看</a>'
        //}}
    ];
    var mmg = $('.mmg').mmGrid({
        height: 400,
        width:940,
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
            $('#pg').mmPaginator({limitList:[10,20,30,40]})
        ],
        params: function(){
            return {
                method: 'api.member.deliver.get'
            }
        }
    });


});
