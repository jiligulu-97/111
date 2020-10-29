// ------カレンダー相関------
$(function(){
    var date = new Date();
    var time = date.toLocaleDateString();
    var year = date.getFullYear();
    $('.date-inp').val(time);
    //点击时间选择框 id选择器不能复用所以使用class选择器
    $('.date-inp').datepicker({
      changeMonth:true,
      changeYear:true,
      dateFormat:'yy/mm/dd',
      defaultDate:new Date(),
      onSelect: function(dateText,inst){
        if(new Date(dateText).getTime()< new Date('2017-10-01').getTime()){
            alert("start date must later than 2017.10.01.");
            $('.date-inp').val(inst.lastVal);
            return false;
        }
      }
    });
    //点击时间选择框的图片/按钮
    $('.date-img1').click(function(){
        var x=$(this).prev();
        consoleLog(x);
        $('#calendar1').datepicker('show');
    });
    $('.date-img2').click(function(){
        var x=$(this).prev();
        consoleLog(x);
        $('#calendar2').datepicker('show');
    });
    $('.date-img3').click(function(){
        var x=$(this).prev();
        consoleLog(x);
        $('#calendar3').datepicker('show');
    });
    $('.date-img4').click(function(){
        var x=$(this).prev();
        consoleLog(x);
        $('#calendar4').datepicker('show');
    });
});
        
    
    
    
    //获取传来的表格的某一行的值并添加到本画面
    values = window.location.href.split('#')[1];
    codetype = decodeURI(values,'utf-8');
    valueFromOutside = codetype.split(',');
    consoleLog("valueFromOutside"+valueFromOutside);
    //举个例子而已，收入番号取到值：
    if(valueFromOutside[0] =='AcceptRealAchievementList'){
        consoleLog("valueFromOutside"+valueFromOutside[2]);
        if(valueFromOutside[2] == 'true'){
            $('#applicationClassification').val('受入取消');}
     $('#orderType').val(valueFromOutside[3]);
     $('#orderResponser').val(valueFromOutside[5]);
     $('#orderResponseDepartment').val(valueFromOutside[6]);
    };
    if(valueFromOutside[0] =='OrderList'){
        consoleLog("valueFromOutside"+valueFromOutside[2]);
        if(valueFromOutside[2] == 'true'){
            $('#applicationClassification').val('受入');}
     $('#orderType').val(valueFromOutside[3]);
     $('#subjectName').val(valueFromOutside[4]);
     $('#orderResponser').val(valueFromOutside[5]);
     $('#orderResponseDepartment').val(valueFromOutside[6]);
    };