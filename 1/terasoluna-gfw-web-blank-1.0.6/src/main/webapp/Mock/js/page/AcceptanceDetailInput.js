//===== 仕入先検索コールバック =====
var setSupplierName = function( sName ) {
	consoleLog( "setSupplierName execute start." );
	console.log( sName );
	$("#supplier_name").val(sName);
	consoleLog( "setSupplierName execute end." );
};

//===== 稟議検索コールバック =====
var setApprovalName = function( sName ) {
	consoleLog( "setApprovalName execute start." );
	console.log( sName );
	$("#approval_name").val(sName);
	consoleLog( "setApprovalName execute end." );
};

$(function(){
    //radioNone_recepitDetailsInputを選択した場合、以上の項目が非表示です。
    $('#radioNone_recepitDetailsInput').click(function(){
        var itemText = $('input:radio[name="出力有無"]:checked').text();
        if(itemText == null){
            //$("#yayinRequest").css("display","block");
            //$("#yayinRequest").show();

            return false;
        }
        $("#checkResultNotic_1").hide();
        $("#checkResultNotic_2").hide();
        $("#checkResultNotic_3").hide();
        $("#checkResultNotic_4").hide();
        $("#checkResultNotic_5").hide();
        $("#checkResultNotic_6").hide();
    });
    
    $("#radioHave_recepitDetailsInput").click(function(){
        var itemText = $('input:radio[name="出力有無"]:checked').text();
        if(itemText == null){
            //$("#yayinRequest").css("display","block");
            //$("#yayinRequest").show();
            $("#checkResultNotic_1").hide();
            $("#checkResultNotic_2").hide();
            $("#checkResultNotic_3").hide();
            $("#checkResultNotic_4").hide();
            $("#checkResultNotic_5").hide();
            $("#checkResultNotic_6").hide();
            return false;
        }
        else{
            $("#checkResultNotic_1").show();
            $("#checkResultNotic_2").show();
            $("#checkResultNotic_3").show();
            $("#checkResultNotic_4").show();
            $("#checkResultNotic_5").show();
            $("#checkResultNotic_6").show();
        }
    });

    //checked
    //$('input:radio[name="納入場所"]:checked').text();
    $('#checkbox_detail1').click(function(){
        if($('#checkbox_detail1').prop('checked') == true){
            $('.btn_checkbox_div').show();
            $('.btn_checkbox_div').children("P").eq(0).show();
            $('.btn_checkbox_div').children("P").eq(1).hide();
        }else if($('#checkbox_detail1').prop('checked') == false){
            $('.btn_checkbox_div').show();
            $('.btn_checkbox_div').children("P").eq(0).hide();
            $('.btn_checkbox_div').children("P").eq(1).show();
        }
    });

    $('#checkbox_detail2').click(function(){
        if($('#checkbox_detail2').prop('checked') == true){
            $('.btn_checkbox_div2').show();
            $('.btn_checkbox_div2').children("P").eq(0).show();
            $('.btn_checkbox_div2').children("P").eq(1).hide();
        }else if($('#checkbox_detail2').prop('checked') == false){
            $('.btn_checkbox_div2').show();
            $('.btn_checkbox_div2').children("P").eq(0).hide();
            $('.btn_checkbox_div2').children("P").eq(1).show();
        }
    });

    //WBS検索 popup WBSSearch.html
	$("#WBSBtn1").click( function() {
		schWinOpen( "WBS" , "#dialog_window_div" , setSupplierName ,'WBSSearch.html');

    });
    	// TODO: WBSボタンクリックイベント設定
	$("#WBS_acceptDetailsInput").click( function() {
        schWinOpen( "WBS" , "#dialog_window_div" , setSupplierName ,'WBSSearch.html');
        consoleLog("sss")
        // var titles = "itemName" ||  'title';
        // var Iheight = $(window).height();
        // var Iheight = 1000;
        // var Iwidth = $(window).width();
        // var Iwidth = 1000;
        // var heights = 600;
        // var widths = 600;
        // var Oheight = (Iheight - heights) / 2;
        // var Owidth = (Iwidth - widths)/2;
        // var contents = "content" || "内容";
        // var itemName = '#dialog_window_div' ;
        // var div = "<iframe id='InDiv' src='"+"../html/WBSSearch.html"+"' frameborder='0' scrolling='no' style='width:100%;height:100%;background-color:#ffffff;position:absolute;z-index:10000;top:0;left:0;opacity:0.7;'> "+
        //             "</iframe>";
        // //$(document.body).append(div);
        
        // //** ダイアログ表示アイテム内のHTMLを変更
        // $(itemName).html(div);
        
        // //** ダイアログオープン
        // var win = $(itemName).dialog( {
        //     modal:true,
        //     title:"WBS検索",
        //     width:Iwidth-90,
        //     height:Iheight-90,
        //     // buttons: { 
        //     // 	"確認": function() {
        //     // 		sName = $("#supSchsName").val();
        //     // 		callbackFnc( sName );
        //     // 		$(this).dialog("close");
        //     // 	}
        //     // } 
        // } );
        // win.dialog('open');
    });
    
        //click imgto top function
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('#toTopImg').show();
        }else {
            $('#toTopImg').hide();
        }
    });
    $("#toTopImg").on("click",function(){
        $('body,html').animate({
            scrollTop:0
        },1000);
        return false;
        
    });
    
    //监听子画面的值，动作；
	//此处可以拿到子画面的message,并关闭子画面弹框
	window.addEventListener('message',function(e){
		let data = e.data;
		consoleLog(data);
		$('.ui-dialog div').dialog("close");

	})
})
