
    var openDeliver = function(){
        $("#mDiv").show();
        $("#popupOuter").show();
        $("#popupTitle").html("我要投递");
        $("#popupDeliver").show();
        $("#popupPay").hide();
    }
    var collect = function(){
        if(isCollection&&isCollection=='true'){
            $(".collect-success").html("您已收藏!");
            $(".collect-success").show();
            setTimeout(function() {
                $(".collect-success").hide();
            }, 3000);
            return;
        }
        // 收藏
        var objectId = $('#demandId').val();
        var objectTitle = $('#demandtitle').val();
        $(".collect-click-icon").show();
        $(".collect-icon").hide();
        $.post('api.do',{method:'api.transfer.collection',data:"{'objectType':'DEMAND','objectId':'"+objectId+"','objectTitle':'"+objectTitle+"'}"},function(){
            $(".collect-success").html("收藏成功!");
            $(".collect-icon").hide();
            $(".collect-success").show();
            $(".collect-click-icon").show();
            setTimeout(function() {
                $(".collect-success").hide();
            }, 3000);
        },"json");
    }
    var closePopup = function(){
        $("#mDiv").hide();
        $("#popupOuter").hide();
    }
    var goDeliver =  function(){
        // 获取当前选择的数据
        var selectvalue = $("#mylandSupply").find("option:selected").val();
        if(!selectvalue){
            $("#errorinfo").show();
            return;
        }
        $("#popupDeliver").hide();
        $("#popupPay").show();
        $("#popupTitle").html("支付");
    }

    var paydeliver = function(){
        var supplyvalue = $("#mylandSupply").find("option:selected").val();
        var supplytext = $("#mylandSupply").find("option:selected").text();
        $('#paydeliver').submit();
    }

    $(function(){
        $('#supplyId').val($("#mylandSupply").val());
        $('#supplyName').val($("#mylandSupply").find("option:selected").text());
        $("#mylandSupply").change(function(){
            $('#supplyId').val($("#mylandSupply").val());
            $('#supplyName').val($("#mylandSupply").find("option:selected").text());
        })
    })