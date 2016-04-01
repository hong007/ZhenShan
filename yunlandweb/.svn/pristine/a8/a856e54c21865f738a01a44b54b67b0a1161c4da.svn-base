/**
 * Created by xiniu5 on 2015/8/6.
 */
var upload_pic = function(){
    var file = document.getElementById("pictureId").files[0];
    var formData = new FormData();
    formData.append("File",file);
    formData.append("Type","PHOTO");
    $.ajax({
        url: '/base/api/fileUpload.do' ,
        type: 'POST',
        data: formData,
        dataType:"json",
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (returndata) {
            var picture = returndata.id;
            $("#landPictureUpload").hide();
            $("#pictureURL").show();
            $("#picture").val(picture);
            $("#pictureURL").attr("src",returndata.url);
            $("#tmppiture").val(returndata.url);
        },
        error: function (returndata) {
//            alert(returndata);
        }
    });
}

var upload_pic2 = function(){
    var obj_file = document.getElementById("avatarInput");

    // 检验上传文件大小
    var maxsize = 512*1024;//500k
    var errMsg = "上传的附件文件不能超过500k";
    var tipMsg = "您的浏览器暂不支持计算上传文件的大小，确保上传文件不要超过2M，建议使用IE、FireFox、Chrome浏览器。";
    var  browserCfg = {};
    var ua = window.navigator.userAgent;
    if (ua.indexOf("MSIE")>=1){
        browserCfg.ie = true;
    }else if(ua.indexOf("Firefox")>=1){
        browserCfg.firefox = true;
    }else if(ua.indexOf("Chrome")>=1){
        browserCfg.chrome = true;
    }
    try{
        if(obj_file.value==""){
            alert("请先选择上传文件");
            return;
        }
        var filesize = 0;
        if(browserCfg.firefox || browserCfg.chrome ){
            filesize = obj_file.files[0].size;
        }else if(browserCfg.ie){
            var obj_img = document.getElementById('avatarInput');
            obj_img.dynsrc=obj_file.value;
            filesize = obj_img.fileSize;
        }else{
            alert(tipMsg);
            return;
        }
        if(filesize==-1){
            alert(tipMsg);
            return;
        }else if(filesize>maxsize){
            alert(errMsg);
            return;
        }else{
        }
    }catch(e){
        alert(e);
    }

    var picName = document.getElementById("avatarInput").files[0].name;    //为用户上传的文件起一个名字
    var result = $('#avatarImg > img').cropper("getCroppedCanvas");
    var data = result.toDataURL();
    var type = "PHOTO";

    /*var formData1 = new FormData();
    formData1.append("image",data);
    formData1.append("PicName",picName);*/
    var formData1 = {
        "image":data,
        "PicName":picName
    };

    var formData = new FormData();
    formData.append("File",obj_file);
    formData.append("Type","PHOTO");
    $.ajax({
        url: '/base/api/fileUploadExp.do' ,
        type: 'POST',
        data: '{"image":"'+data+'","PicName":"'+picName+'"}',
        //data:data,
        contentType:'application/json',
        dataType:"json",
        //dataType:"text",
        async: false,
        cache: false,
        processData: false,
        success: function (returndata) {
            var picture = returndata.id;
            $("#landPictureUpload").hide();
            $("#pictureURL").show();
            $("#picture").val(picture);
            //var toJson = eval("(" + returndata + ")");
            $("#pictureURL").attr("src",returndata.url);
            $("#tmppiture").val(returndata.url);
            console.log("--------return data"+returndata);
            console.log("======"+returndata.url);
            $('#closeButton').click();
        },
        error: function (returndata) {
//            alert(returndata);
        }
    });
}