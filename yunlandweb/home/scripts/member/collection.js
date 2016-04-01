/** 我的土地
**/
$(function(){
    var cols = [
        { title:'收藏标题', name:'objectTitle' , align:'right'},
        { title:'类型', name:'objectType' , align:'right', renderer: function(val){
            if(val=='DEMAND'){
                return '转让需求'
            }else{
                return '转让供应';
            }
        }},{ title:'操作', name:'' , align:'center', lockWidth:true, lockDisplay: true, renderer: function(val,item){
             if(item.objectType=='DEMAND'){
                 return '<a target="_blank" href="../../transfer/requiredetail?id='+item.objectId+'">查看</a>'
             }else{
                 return '<a target="_blank" href="../../transfer/supplydetail?id='+item.objectId+'">查看</a>'
             }
         }}
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
                method: 'api.member.collection.get'
            }
        }
    });
    mmg.on('cellSelected', function(e, item, rowIndex, colIndex){
        //查看
        if($(e.target).is('.view')){
            e.stopPropagation();  //阻止事件冒泡
        }else if($(e.target).is('.delete') && confirm('你确定要删除该行记录吗?')){
            e.stopPropagation(); //阻止事件冒泡
            mmg.removeRow(rowIndex);
        }
    })

});
