// 百度地图API功能
var map = new BMap.Map("allmap");
map.disableScrollWheelZoom();
map.addEventListener("click", function(){
    map.enableScrollWheelZoom();
});
map.centerAndZoom(new BMap.Point(116.417854,39.921988), 5);
var myIcon = new BMap.Icon("../home/images/mapMarker.png", new BMap.Size(32,38));
var navigationControl = new BMap.NavigationControl({
    // 靠左上角位置
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // LARGE类型
    type: BMAP_NAVIGATION_CONTROL_LARGE,
    // 启用显示定位
    enableGeolocation: true
});
map.addControl(navigationControl);

$(function(){
    var getMapData = function(data){
        $.ajax({ type: "post",//使用get方法访问后台
            dataType: "json",//返回json格式的数据
            url:'/sell/api.do',
            data:{method:'api.statistic.intelligence.find',data:data},
            success: function(msg){
                map.clearOverlays();
                $.each(msg.result, function (i, item) {
                    for(var j=0;j<selectModelType.length;j++){
                        var selectModel = selectModelType[j];
                        if( item.planUse == selectModel.id){
                            item.planUse =selectModel.name;
                        }
                    }
                    var address = (item.provinceName?item.provinceName:'')+(item.cityName?item.cityName:'')+(item.districtName?item.districtName:"")+(item.address?item.address:"");
                    var point = item.location;
                    if(!point==''){
                        var temppoint = point.split(',');
                        new_point = new BMap.Point(temppoint[0], temppoint[1]);
                        map.centerAndZoom(new_point, 5);  //根据经纬度定中心点
                        marker = new BMap.Marker(new_point);  // 创建标注
                        map.addOverlay(marker);              // 将标注添加到地图中
                        map.panTo(new_point);
                        var infoWindow = new BMap.InfoWindow('<div style="margin:0;line-height:20px;">' +
                        '<table ><tr ><td style="width:85px;  text-align: right;">地产商名称：</td>'+
                        '<td><h4>'+(item.user?item.user:"")+'</h4></td></tr>'+
                        '<tr><td style="text-align: right;">地块名称：</td><td>'+(item.name?item.name:"")+'</td></tr> '+
                        '<tr><td style="text-align: right;">土地类型：</td><td>'+(item.planUse?item.planUse:"")+'</td></tr>' +
                        '<tr><td style="text-align: right;">面积：</td><td>'+(item.totalArea)+'万平方米</td></tr>' +
                        '<tr><td style="text-align: right;">地址：</td><td id="address_td">'+address+'</td></tr></table>' +
                        '</div>');
                        marker.addEventListener("click", function(){
                            map.openInfoWindow(infoWindow,new_point); //开启信息窗口
                        });
                    }else{
                        // 创建地址解析器实例
                        var myGeo = new BMap.Geocoder();
                        // 将地址解析结果显示在地图上,并调整地图视野
                        myGeo.getPoint(address, function(point){
                            if (point) {
                                map.centerAndZoom(point, 5);
                                marker = new BMap.Marker(point);  // 创建标注
                                map.addOverlay(marker);              // 将标注添加到地图中
                                var infoWindow = new BMap.InfoWindow('<div style="margin:0;line-height:20px;">' +
                                '<table ><tr ><td style="width:85px;  text-align: right;">地产商名称：</td>'+
                                '<td><h4>'+(item.user?item.user:"")+'</h4></td></tr>'+
                                '<tr><td style="text-align: right;">地块名称：</td><td>'+(item.name?item.name:"")+'</td></tr> '+
                                '<tr><td style="text-align: right;">土地类型：</td><td>'+(item.planUse?item.planUse:"")+'</td></tr>' +
                                '<tr><td style="text-align: right;">面积：</td><td>'+(item.totalArea)+'万平方米</td></tr>' +
                                '<tr><td style="text-align: right;">地址：</td><td id="address_td">'+address+'</td></tr></table>' +
                                '</div>');
                                marker.addEventListener("click", function(){
                                    map.openInfoWindow(infoWindow,point); //开启信息窗口
                                });
                            }
                        }, "$landSupply.cityName");
                    }
                    //var ponit=new BMap.Point(item.location.split(",")[0],item.location.split(",")[1]);
                    //var i = new BMap.Marker(ponit,{icon:myIcon});  // 创建标注
                    //map.addOverlay(i);              // 将标注添加到地图中
                    //map.panTo(ponit);
                    //创建信息窗口

                    //i.addEventListener("click", function(){
                    //    this.openInfoWindow(infoWindow1);
                    //}); //点击标注打开信息窗口

                });
            }
        });
    };
    getMapData("{\'provinceId\':\'320000\',\'type\':\'map\'}");
    $("#mainTable").hide();

    $("#map").click(function(){
        $("#map").attr("class","click");
        $("#table").removeClass("click");
        $("#mainTable").hide();
        $("#mainMap").show();
    });
    $("#table").click(function(){
        $("#table").attr("class","click");
        $("#map").removeClass("click");
        $("#mainMap").hide();
        $("#mainTable").show();
    });

    var data;

    $("#query").click(function(){
        var user = $("#user").val();
        var provinceId = $("#cmbProvinces").val();
        var cityId = $("#cmbCitys").val();
        var areaId = $("#cmbAreas").val();
        //var province = $("#cmbProvinces").val();
        //var city = $("#cmbCitys").val();
        //var area = $("#cmbAreas").val();
        var landType = $("#landType").val();
        var sellWay = $("#sellWay").val();
        data = "{'user':\""+user+"\",'provinceId':\""+provinceId+"\",'cityId':\""+cityId+"\",'areaId':\""+areaId+"\",'landType':\""+landType+"\",'sellWay':\""+sellWay+"\",'type':'map'}";
        mmg.load({data:data});
        getMapData(data);
    });

    var cols = [
        {title:'地产商名称',name:'user',align:'right'},
        { title:'地块名称', name:'name' , align:'right',renderer:function(val){
            return '<span title="'+val+'">'+val+'</span>';
        }},
        { title:'占地面积', name:'totalArea' , align:'right'},
        { title:'位置', name:'landLocation' , align:'right',renderer:function(val){
            return '<span title="'+val+'">'+val+'</span>';
        }},
        /*{ title:'规划用途', name:'planUse' , align:'right'},*/
        { title:'规划用途', name:'planUse' , align:'right',renderer:function(val){
            if(val){
                var value = getLandPurose(val);
                if(value){
                    return '<span title="'+value+'">'+value+'</span>';
                }else{
                    return "";
                }

            }else{
                return "";
            }
        }},
        { title:'电子监管号', name:'superviseNumber' ,align:'right', type: 'number'},
    ];

    var transPlanUse = function(planUse){
        for(var i=0;selectModel.length;i++){
            var selectModel2 = selectModel[i];
            if( planUse == selectModel2.id){
                planUse =selectModel2;
                return planUse;
            }
        }
    }

    var mmg = $('.mmg').mmGrid({
        height: 1080,
//        width:950,
        cols: cols,
        url: '/sell/api.do',
        method: 'post',
        remoteSort:true,
        nowrap:true,
        root:'result',
        fullWidthRows: true,
        loadErrorText:'云地网提醒您,数据加载异常...',
        autoLoad: true,
        plugins: [
            $('#pg').mmPaginator({limitList:[20]})
        ],
        params: function(){
            return {
                method: 'api.statistic.intelligence.find',
                data:data
            }
        }
    });
});