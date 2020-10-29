//===== 仕入先検索コールバック =====
var setSupplierName = function( sName ) {
	consoleLog( "setSupplierName execute start." );
	console.log( sName );
	$("#supplier_name").val(sName);
	consoleLog( "setSupplierName execute end." );
};

//点击时间选择框的图片/按钮
var clickDateImgBtn = function (){
    console.log("ccc")
    var x= event.target.prev();
    $('.'+x).datepicker('show');
}

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
        
        $('#calendar1').datepicker('show');
    }
        
    );
    $('.date-img2').click(function(){

        var x=$(this).prev();
        consoleLog(x);
        $('#calendar2').datepicker('show');
    }
        
    );
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
    //TODO:click button and direct to another html
    $('#poc2ToPoc1').click(
        function(){
            var i;
            for(i=0;i<$('.secondTd').length;i++){
                console.log(i);
                if($('.secondTd').eq(i).val()=='' ||$('.secondTd').eq(i).val()==null ||$('.secondTd').eq(i).val()==undefined ){
                     $('#checkLabel').css({"display":"block"});
                     return;
                }
            }
        }
    );
    
    //textarea实现输入框限制字数的动态监听
    textareaNumberChangeFun = function(){
        var len = $(this).val().length;
        if($(this).hasClass('textarea-group1')){
            if(len > 50){
                $(this).val($(this).val().substring(0,51));

            }
            var num = 51-len;
            if($(this).hasClass('textarea-group1-1')){
                $("#laveCount1-1").text(num);
            }
            if($(this).hasClass('textarea-group1-2')){
                $("#laveCount1-2").text(num);
            }
            if($(this).hasClass('textarea-group1-3')){
                $("#laveCount1-3").text(num);
            }
           
            // else if($(this).hasClass('textarea-group1-2')){
            //     $("#laveCount1_2").text(num);
            // }
        }
        else if($(this).hasClass('textarea-group2')){
            if(len > 100){
                $(this).val($(this).val().substring(0,101));

            }
            var num = 101-len;
            if($(this).hasClass('textarea-group2-1')){
                $("#laveCount2-1").text(num);
            }
            else if($(this).hasClass('textarea-group2-2')){
                $("#laveCount2-2").text(num);
            }
            else if($(this).hasClass('textarea-group2-3')){
                $("#laveCount2-3").text(num);
            }
        }
        else if($(this).hasClass('textarea-group3')){
            if(len > 200){
                $(this).val($(this).val().substring(0,201));

            }
            var num = 201-len;
            if($(this).hasClass('textarea-group3-1')){
                $("#laveCount3-1").text(num);
            }
            else if($(this).hasClass('textarea-group3-2')){
                $("#laveCount3-2").text(num);
            }
        }
        else if($(this).hasClass('textarea-group4')){
            if(len > 250){
                $(this).val($(this).val().substring(0,251));

            }
            var num = 251-len;
            if($(this).hasClass('textarea-group4-1')){
                $("#laveCount4-1").text(num);
            }
            else if($(this).hasClass('textarea-group4-2')){
                $("#laveCount4-2").text(num);
            }
        }
        else if($(this).hasClass('radioOtherBtn_Name_textarea')){
            if(len > 41){
                $(this).val($(this).val().substring(0,41));

            }
            var num = 41-len;
         
            $("#laveCount_radioOtherBtn_Name").text(num);
    
        }
        else if($(this).hasClass('textarea-group-homeplace')){
            if(len > 160){
                $(this).val($(this).val().substring(0,161));

            }
            var num = 161-len;
            
            $("#laveCount_radioOtherBtn_Homeplace").text(num);
        }
    }


    $('#jianMing').keyup(
        textareaNumberChangeFun
    );
    $('#textarea1-1').keyup(
        textareaNumberChangeFun
    );
    $('#textarea1-2').keyup(
        textareaNumberChangeFun
    );
    $('#textarea1-3').keyup(
        textareaNumberChangeFun
    );
    $('#textarea2-2').keyup(
        textareaNumberChangeFun
    );
    $('#textarea2-3').keyup(
        textareaNumberChangeFun
    );
    $('#textarea3-1').keyup(
        textareaNumberChangeFun
    );
    $('#textarea3-2').keyup(
        textareaNumberChangeFun
    );
    $('#textarea4-1').keyup(
        textareaNumberChangeFun
    );
    $('#textarea4-2').keyup(
        textareaNumberChangeFun
    );
    $('#radioOtherBtn_Name_textarea').keyup(
        textareaNumberChangeFun
    );
    $('#radioOtherBtn_Homeplace_textarea').keyup(
        textareaNumberChangeFun
    );
    //radioOtherBtn_Name_textarea
    //TODO:deliver the datas the another html

    //
    // $("#MoneyRestrict").keydown(function(){
    //     $(this).val($(this).val().replace(/[^0-9]/g,''));
    // }).bind("past",function(){
    //     $(this).val($(this).val().replace(/[^0-9]/g,''));
    // });
    //jquery 监听输入框只能输入数字
    $("#MoneyRestrict").bind('input propertychange',function(){
        var val = $(this).val();
        if(val!='' && isNaN(val)){
            $(this).val('');
        }
    });

    //模糊查询，input下拉框选择
    // var oldData = '';
    // var newData = '';
    // $("#inputOfList1").click(function(){
    //  oldData = $("#inputOfList1").val();
    //     $("#inputOfList1").val("");
    // })

    // $("#inputOfList1").change(function(){
    //     newData = $("#inputOfList1").val();
    // })
    // $("#inputOfList1").blur(function(){
    //     if(newData == oldData){
    //         $("#inputOfList1").val(oldData);
    //     }
    // })

    $("#inputOfList1").on("keyup",function(){
        if($('#inputOfList1').val()==''){

        }
        $("#inputListSearch_hatchuTanntosya option:contains(" + $('#inputOfList1').val().trim()+")").show();
        $("#inputListSearch_hatchuTanntosya option:not(:contains(" + $('#inputOfList1').val().trim()+"))").hide();
    })
    //发注パターン選択し、インプットコンポーネントにの内容がclearされます。
    $('#selectHatchubatan').change(function(){
        var item = $("#selectHatchubatan").find('option:selected').text();
        console.log($("#selectHatchubatan").get(0).selectedIndex)
        if(item!=null && $("#selectHatchubatan").get(0).selectedIndex <3){
            $("#hatchuSyouSakuseiContent").show();
            $("#siharaiJyoukennMonnGonn").show();
            $("#nanoBasyou").show();
            $("#hatchuWowaseSaki").show();
            $("#biKou").show();
            $("#hatchuSyouFileUpload").hide();
        }else if(item!=null && $("#selectHatchubatan").get(0).selectedIndex >=3){
            $("#hatchuSyouFileUpload").show();
            $("#hatchuSyouSakuseiContent").hide();
            $("#siharaiJyoukennMonnGonn").hide();
            $("#nanoBasyou").hide();
            $("#hatchuWowaseSaki").hide();
            $("#biKou").hide();
        }
    });

    //选中发注button之后显示  押...
    
    //印纸有的时候，显示一些东西...
    $("#selectHatchubatan").change(function(){
        var itemText = $("#selectHatchubatan option:selected").text();
        if(itemText!=""){
            //$("#yayinRequest").css("display","block");
            $("#yayinRequest").show();
        }
    });

    
    
    //印纸あり　click
    $("#radioPaperSelected").click(function(){
        var itemText = $('input:radio[name="印纸"]:checked').text();
        if(itemText == null){
            $('#yinzhiPaperMoney').hide();
            $('#PaperTannto').hide();
            $('#IndividualApprovalNumber').hide();
            return false;
        }
        else{
                $('#yinzhiPaperMoney').show();
                $('#PaperTannto').show();
                $('#IndividualApprovalNumberSearch').show();
                $('#IndividualApprovalNumber').hide();
        }
    });

    //印纸なし　click
    $("#radioPaperNone").click(function(){
        var itemText = $('input:radio[name="印纸"]:checked').text();
        if(itemText == null){
            //$("#yayinRequest").css("display","block");
            //$("#yayinRequest").show();

            return false;
        }else{
                $('#yinzhiPaperMoney').hide();
                $('#PaperTannto').hide();
                $('#IndividualApprovalNumberSearch').hide();
                $('#IndividualApprovalNumber').show();
        }
    });

    //その他を選択した場合は、Naruto场所，住所を入力する。
    //futureKennsyuTokoroを選択した場合、以上の項目が非表示です。
    $("#radioBtnOther").click(function(){
        var itemText = $('input:radio[name="納入場所"]:checked').text();
        if(itemText == null){
            //$("#yayinRequest").css("display","block");
            //$("#yayinRequest").show();
            $("#radioOtherBtn_Name").hide();
            $("#radioOtherBtn_Homeplace").hide();
            return false;
        }
        else{
                $('#radioOtherBtn_Name').show();
                $('#radioOtherBtn_Homeplace').show();
                $('#hatchuWowaseDestination').show();
        }
    });

    $('#futureKennsyuTokoro').click(function(){
        var itemText = $('input:radio[name="納入場所"]:checked').text();
        if(itemText == null){
            //$("#yayinRequest").css("display","block");
            //$("#yayinRequest").show();

            return false;
        }
        $("#radioOtherBtn_Name").hide();
        $("#radioOtherBtn_Homeplace").hide();
    });

	// 仕入先検索ボタンクリックイベント設定
	$("#supplierSch01").click( function() {
        //** ダイアログ表示アイテム内のHTMLを変更
        var Iheight = $(window).height();
        var Iwidth = $(window).width();
        var heights = 600;
        var widths = 600;
        var Oheight = (Iheight - heights) / 2;
        var Owidth = (Iwidth - widths)/2;
        $("#iframe").popShow({
            url:"../html/SupplierSearch.html",
            title:"仕入先検索",
            width:Iwidth-110,
            height:Iheight-90,
        });
	});
	
    window.addEventListener('message',function(e){
        $("#iframe").popHide();
		let data = e.data;
		consoleLog(data);
        
        var xx = data.datalist;
		if(data.filePath =="../html/WBSSearch.html"){
		
			//点击的是确认按钮的话
			if(data.s == "confirm"){
		
			}
		}else{
			$(".input_basicTXT_1").val(xx);
		}
    })
    
    //获取传来的表格的某一行的值并添加到本画面
       values = window.location.href.split('#')[1];
       codetype = decodeURI(values,'utf-8');
       valueFromOutside = codetype.split(',');
       consoleLog("valueFromOutside"+valueFromOutside);
       if(valueFromOutside[0] =='OrderBasicContentInput'){
        $('#hatchuBanngo').val(valueFromOutside[1]);
        $('#jianMing').val(valueFromOutside[2]);
        if(valueFromOutside[3] == '開発委托・宣传'){
            $('.radioType2MonthlyFixed').attr("checked","checked");
        }else{
            $('.radioType1NormalBuy').prop("checked","checked") ;
        }
        $('#inputOfList1').val(valueFromOutside[4]);
        $('#hatchuTanntoBuShu').val(valueFromOutside[5]);
      
        $('#calendar2').val(valueFromOutside[6]);
        }

        $("#radioPaperNone").attr("checked","checked");
        $('#futureKennsyuTokoro').attr("checked","checked");
  })
