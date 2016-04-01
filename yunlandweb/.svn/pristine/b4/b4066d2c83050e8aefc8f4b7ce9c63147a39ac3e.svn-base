$('.clearDd').show();
var okSelect = []; //已经选择好的
var selectResult = [];
var oSelectList = document.getElementById('selectList');

var oClearList = $(".hasBeenSelected .clearList");
var oCustext1 = document.getElementById('custext1');
var oCustext2 = document.getElementById('custext2');
var aItemTxt = oSelectList.getElementsByTagName('a');
var isCusPrice = false;//是否自定义价格
var radioVal = '';
var selectResult = function(){
    var selectjson = "{";
    if(okSelect&&okSelect.length>0){
        for(var i=0;i<okSelect.length;i++){
            var select = okSelect[i];
            if(select.stype=="CUSTEXT2"){
                if(i==okSelect.length-1){
                    selectjson+='"'+select.SID+'":"'+select.SValue+"-"+select.EValue+'"';
                }else{
                    selectjson+='"'+select.SID+'":"'+select.SValue+"-"+select.EValue+'",';
                }
            }else{
                var key = select.SID;
                var value = select.SValue;
                if(i==okSelect.length-1){
                    selectjson +=  '"'+key+'":"'+value+'"'
                }else{
                    selectjson += '"'+key+'":"'+value+'",'
                }

            }
        }
    }
    selectjson += "}";
    var tempjson = JSON.parse(selectjson)
    return tempjson;
}

oSelectList.onclick = function(e, a) {
    var ev = e || window.event;
    var tag = ev.target || ev.srcElement;
    if(!tag)return;
    var tagName = tag.nodeName.toUpperCase();
    var infor = '';
    var aRadio = document.getElementsByName('radio2');


    if( isCusPrice ) {//1
      radioVal = oCustext1.value + '-' + oCustext2.value + '元';//2
    } else {//3
      radioVal = '';//4
    }//5


    if (tagName == 'INPUT') {
        if (tag.getAttribute('type').toUpperCase() == 'CHECKBOX') { //如果点击 的是 input checkbox
            var val = next(tag);
            if (tag.checked) {
                var sType = prev(parents(tag, 'dd')).innerHTML;
                var sID = prev(parents(tag, 'dd')).id;
                var sValue =  $(tag).attr("value");
                val &&  okSelect.push({"SID":sID,"SValue":sValue,"type":sType,"tagvalue":trim(tag.innerHTML)})
				
				val && okSelect.push(trim(val.innerHTML) + '|' + sType)//6
				
            } else {
                var sType = prev(parents(tag, 'dd')).innerHTML;
                delStr(val.innerHTML + '|' + sType, okSelect)
            }
        } else if (tag.getAttribute('type').toUpperCase() == 'BUTTON') { //如果点击的是 确定按钮
            var sType = prev(parents(tag, 'dd')).innerHTML;
            var sID = prev(parents(tag, 'dd')).id;
            for(var i=okSelect.length-1;i>=0;i--){
                var okVal = okSelect[i];
                if(okVal.type==sType){
                    okSelect.splice(i,1);
                }
            }
			 radioVal = oCustext1.value + '-' + oCustext2.value + '元';//7
            isCusPrice = true;//8

            for (var i = 0; i < aRadio.length; i++) {//9
                aRadio[i].checked = false;//10
            }//11
            //范围input
            if(prev(prev(tag)).getAttribute('class').toUpperCase() == 'CUSTEXT2'){
                var starvalue = prev(prev(prev(tag))).value;
                var endvalue = prev(prev(tag)).value;
                var rVal = starvalue + "-" + endvalue + prev(tag).innerHTML;
//                okSelect.push(rVal + '|' + sType);
                okSelect.push({"SID":sID,"SValue":starvalue,"EValue":endvalue,"stype":'CUSTEXT2',"type":sType,"tagvalue":rVal})
            }else{
                var value = prev(prev(tag)).value;
                var rVal = prev(prev(tag)).value + prev(tag).innerHTML;
                okSelect.push({"SID":sID,"SValue":value,"type":sType,"tagvalue":rVal});
            }
        }
    }

    if (tagName == 'A') { //如果点击 的是 A
        var oPrevInput = prev(tag);

        if (!oPrevInput) { //如果上一个节点没有则认为点击的是 '不限'
            var parent = parents(tag, 'dd');
            var aItem = parent.getElementsByTagName('label');
            if(parent.getAttribute('data-more')) {
                var allCheckbox = next(parents(parent, 'dl')).getElementsByTagName('label');
                var sType = '';
                for (var i = 0, len = allCheckbox.length; i < len; i++) {
                    sType = prev(parents(allCheckbox[i], 'dd')).innerHTML;
                    delStr(text(allCheckbox[i]) + '|' + sType, okSelect);
                    allCheckbox[i].children[0].checked = false;
                }
            }
			
			
			
			if (trim(prev(parent).innerHTML) == '酒店价格') { //这里是直接根据 text来比较的.建议加个自定义属性作标识符//12
                for (var i = 0; i < aRadio.length; i++) {//11
                    aRadio[i].checked = false;//88
                }//88
                isCusPrice = false;//88
                a = true;//88
                radioVal = '';//88
            } else {//88
                var sType = '';//88
                for (var i = 0, len = aItem.length; i < len; i++) {//88
                    sType = prev(parents(aItem[i], 'dd')).innerHTML;//88
                    delStr(text(aItem[i]) + '|' + sType, okSelect);//88
                    aItem[i].children[0].checked = false;//88
                }//88
            }//88
			
			
			
			
        } else {
            if (oPrevInput && oPrevInput.getAttribute('type').toUpperCase() == 'RADIO') { //radio
                isCusPrice = false;
                oPrevInput.checked = true;
                var sType = prev(parents(tag, 'dd')).innerHTML;
                var sID = prev(parents(tag, 'dd')).id;
                var sValue =  $(tag).attr("value");
                for(var i=okSelect.length-1;i>=0;i--){
                    var okVal = okSelect[i];
                    if(okVal.type==sType){
                        okSelect.splice(i,1);
                    }
                }
//                okSelect.push(trim(tag.innerHTML) + '|' + sType)
                okSelect.push({"SID":sID,"SValue":sValue,"type":sType,"tagvalue":trim(tag.innerHTML)})
            }

            if (oPrevInput && oPrevInput.getAttribute('type').toUpperCase() == 'CHECKBOX') { //获取checkbox
                if (oPrevInput.checked) {
                    oPrevInput.checked = false;
                    var sType = prev(parents(tag, 'dd')).innerHTML;
                    delStr(tag.innerHTML + '|' + sType, okSelect);
                } else {
                    oPrevInput.checked = true;
                    var sType = prev(parents(tag, 'dd')).innerHTML;
                    var sID = prev(parents(tag, 'dd')).id;
                    var sValue =  $(tag).attr("value");
                    okSelect.push({"SID":sID,"SValue":sValue,"type":sType,"tagvalue":trim(tag.innerHTML)})
//                    okSelect.push(trim(tag.innerHTML) + '|' + sType)
                }
            }
        }
    };

    for (var i = 0; i < aRadio.length; i++) {
        if (aRadio[i].checked) {
            radioVal = next(aRadio[i]).innerHTML;
            isCusPrice = false;
            break;
        }
    }

    if(a) {
         isCusPrice = false;
    }

    if(a && a == 2) {
        for (var i = 0; i < aRadio.length; i++) {
            aRadio[i].checked = false;
        }
           
    }
    var vals = [];
    for (var i = 0,size = okSelect.length; i < size; i++) {
        vals = okSelect[i];
        infor += '<div class=\"selectedInfor selectedShow\"><span>' + vals.type + '</span><label>' +vals.tagvalue  + '</label><em></em></div>';
    }
    oClearList.html(infor);
};
$('div.eliminateCriteria').click(function(){
    $(oSelectList).find('input').attr('checked',false);
    radioVal = '';
    isCusPrice = false;
    okSelect.length = 0;
    $(oSelectList).trigger('click', 1);
})

$('.clearList').find('em').live('click',function(){
    var self = $(this);
    var val = self.prev().html() + '|' + self.prev().prev().html();
    var n = -1;
    var a = this.getAttribute('p') || 1;
    self.die('click');
    for(var i = 0, len = aItemTxt.length; i < len; i++) {
         var html = val.split('|')[0];
         if(trim(aItemTxt[i].innerHTML) == html) {
              prev(aItemTxt[i]).checked = false;
              break;
        }
    };
    delStr(val, okSelect);
    $(oSelectList).trigger('click', a);

})

function delStr(str, arr) { //删除数组给定相同的字符串
    var n = -1;
    for (var i = 0,
    len = arr.length; i < len; i++) {
        var select = arr[i];
        var selectvalue = select.tagvalue+"|"+select.type;
        if (str == selectvalue) {
            n = i;
            break;
        }
    }
    n > -1 && arr.splice(n, 1);
};
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '')
};
function text(e) {
    var t = '';
    e = e.childNodes || e;
    for (var j = 0; j < e.length; j++) {
        t += e[j].nodeType != 1 ? e[j].nodeValue: text(e[j].childNodes);
    }
    return trim(t);
}

function prev(elem) {
    do {
        elem = elem.previousSibling;
    } while ( elem && elem . nodeType != 1 );
    return elem;
};

function next(elem) {
    do {
        elem = elem.nextSibling;
    } while ( elem && elem . nodeType != 1 );
    return elem;
}

function parents(elem, parents) {  //查找当前祖先辈元素需要的节点  如 parents(oDiv, 'dd') 查找 oDiv 的祖先元素为dd 的
    if(!elem || !parents) return;
    var parents = parents.toUpperCase();
    do{
        elem = elem.parentNode;
    } while( elem.nodeName.toUpperCase() != parents );
    return elem;
};
