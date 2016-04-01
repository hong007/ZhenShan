/**
 * 地图控制js类
 * @author lwz
 * @param mapId
 * @param cmbProvince
 * @param cmbCity
 * @param cmbArea
 * @param cmbAddress
 * @param coordinate
 */
var mapInit = function(mapId, cmbProvince, cmbCity, cmbArea, cmbAddress, coordinate){
    // 百度地图API功能
    var map = new BMap.Map(mapId);
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,12);
    var city = $("#"+cmbCity).find("option:selected").text();
    if(!city){
        function myFun(result){
            var cityName = result.name;
            map.setCenter(cityName);
        }
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);
    }else{
        map.setCenter(city);
    }
    // 创建地址解析器实例
    var myGeo = new BMap.Geocoder();
    //添加控件和比例尺
    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
    var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
    var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
    map.addControl(top_left_control);
    map.addControl(top_left_navigation);
    map.addControl(top_right_navigation);
    map.disableScrollWheelZoom();
    map.addEventListener("click", function(){
        map.enableScrollWheelZoom();
    });
    //获取经纬度
    var getCoordinate = function(e){
        if(coordinate){
            $("#"+coordinate).val(e.point.lng + ", " + e.point.lat);
        }
    };

    var getPosition = function(){
        // 将地址解析结果显示在地图上,并调整地图视野
        var province = $("#"+cmbProvince).find("option:selected").text()? $("#"+cmbProvince).find("option:selected").text():'';
        var city = $("#"+cmbCity).find("option:selected").text()? $("#"+cmbCity).find("option:selected").text() :'' ;
        var district = $("#"+cmbArea).find("option:selected").text() ?$("#"+cmbArea).find("option:selected").text(): '';
        var address = $("#"+cmbAddress).val() ? $("#"+cmbAddress).val() : '';
        var position = province+city+district+address;
        myGeo.getPoint(position, function(point){
            if (point) {
                map.centerAndZoom(point, 16);
                var marker = new BMap.Marker(point)
                map.addOverlay(marker);
                marker.enableDragging();
                if(coordinate){
                    $("#"+coordinate).val(point.lng + ", " + point.lat);
                }
                marker.addEventListener("mouseup", getCoordinate);
            }
            //else{
            //    alert("您选择地址没有解析到结果!");
            //}
        }, city);
    }
    getPosition();
    if(cmbProvince){
        document.getElementById(cmbProvince).onclick = getPosition;
    }
    if (cmbCity) {
        document.getElementById(cmbCity).onclick = getPosition;
    }
    if (cmbArea) {
        document.getElementById(cmbArea).onclick = getPosition;
    }
    if (cmbAddress) {
        document.getElementById(cmbAddress).onkeyup = getPosition;
    }
};
