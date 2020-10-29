$(function(){
    //获取传来的表格的某一行的值并添加到本画面
    values = window.location.href.split('#')[1];
    codetype = decodeURI(values,'utf-8');
    valueFromOutside = codetype.split(',');
    consoleLog("valueFromOutside"+valueFromOutside);
    //举个例子而已，收入番号取到值：
    if(valueFromOutside[0] =='AcceptRealAchievementList'){
        consoleLog("valueFromOutside"+valueFromOutside[2]);
     $('#acceptanceNumber').val(valueFromOutside[2]);
     $('#orderType').val(valueFromOutside[3]);
     $('#orderResponser').val(valueFromOutside[5]);
     $('#orderResponseDepartment').val(valueFromOutside[6]);
         //以下是发注基本内容入力画面的例子
     //$('#jianMing').val(valueFromOutside[2]);
    //  if(valueFromOutside[3] == '開発委托・宣传'){
    //      $('.radioType2MonthlyFixed').attr("checked","checked");
    //  }else{
    //      $('.radioType1NormalBuy').prop("checked","checked") ;
    //  }
    //  $('#inputOfList1').val(valueFromOutside[4]);
    //  $('#hatchuTanntoBuShu').val(valueFromOutside[5]);
   
    //  $('#calendar2').val(valueFromOutside[6]);
    //  }

    //  $("#radioPaperNone").attr("checked","checked");
    //  $('#futureKennsyuTokoro').attr("checked","checked");
    };
});
