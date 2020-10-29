// DocumentRoot
//var BASEURL = 'file:///G:/18_BN_Intra-Mart/71_デモサイト/html/';
// var BASEURL = 'file://efiles/sbt3-all/tmp/im_demo20200806/html/';
// var BASEURL1 = 'file:///C:/Devkit_Ph2/Workspace/NEXT_ORDER_MNG/Mock/html/';
//使用相对路径
var BASEURLRelative = '../html/';

//================================================
//=====             共通関数                 =====
//================================================
// ログ出力
function consoleLog( message ) {
	console.log( message );
};


// 画面遷移関数
function gotoPage(pageName) {
	consoleLog( "function gotoPage() start." );
	url = BASEURLRelative.concat( pageName );
	document.location.href = url;
	consoleLog( "url:" +document.location.href);
	consoleLog( "function gotoPage() end." );
};

//================================================
//=====          イベント処理関数            =====
//================================================
// プレースホルダー付きコンボボックスの値が変更されたとき
var selectedComboBox = function() {
	consoleLog( "selectedComboBox() execute start." );
	var selVal = $(this).val();
	
	if( selVal == "-" ) {
		$(this).val( "" );
		selVal = "";
	}
	
	if( !(selVal) ) {  // 選択値が空の場合
		if( $(this).hasClass( "cb_col_black" ) ) {
			$(this).removeClass( "cb_col_black" );
		}
		if( !$(this).hasClass( "cb_col_gray" ) ) {
			$(this).addClass( "cb_col_gray" );
		}
	} else  {
		if( $(this).hasClass( "cb_col_gray" ) ) {
			$(this).removeClass( "cb_col_gray" );
		}
		if( !$(this).hasClass( "cb_col_black" ) ) {
			$(this).addClass( "cb_col_black" );
		}
	}
	consoleLog( "selectedComboBox() execute end." );
};

// プレースホルダー付きコンボボックスでキーが押されたとき
var keyDownComboBox = function(ev) {
	consoleLog( "keyDownComboBox() execute start." );
	if( ev.which == 46 || ev.which == 8 ) {  // Delキー、BackSpaceキーの場合
		$(this).val("") ;   // 値をクリアする
		$(this).change();
	}
	consoleLog( "keyDownComboBox() execute end." );
};

// プレースホルダー付きコンボボックスでキーが押されたとき
var keyDownCalendar = function(ev) {
	consoleLog( "keyDownCalendar() execute start." );
	if( ev.which == 46 || ev.which == 8 ) {  // Delキー、BackSpaceキーの場合
		$(this).val("") ;   // 値をクリアする
	}
	consoleLog( "keyDownCalendar() execute end." );
};

// ページトップへボタンが押されたとき
var clickPageTop = function() {
	consoleLog( "clickPageTop() execute start." );
	$('#main_win_area').animate( {scrollTop:0} , 'fast' );
	consoleLog( "clickPageTop() execute end." );
}

// TextAreaで文字が編集されたとき高さを自動調整する
var editTextAreaAutoH = function() {
	var minHeight = 20;
	while( $(this).outerHeight() > minHeight && $(this).outerHeight() > this.scrollHeight ) {
		$(this).height( $(this).height() - 1 );
	}
	
	while( $(this).outerHeight() < this.scrollHeight ) {
		$(this).height( $(this).height() + 1 );
	}
}

//================================================
//=====             ダイアログ               =====
//================================================
var schWinOpen = function( itemType , itemName , callbackFnc,gotoPage) {
	consoleLog( "schWinOpen execute start." );
	switch( itemType ) {
		case "supplier" :
		
			var titles = "itemName" ||  'title';
			var Iheight = $(window).height();
			var Iwidth = $(window).width();
			var heights = 600;
			var widths = 600;
			var Oheight = (Iheight - heights) / 2;
			var Owidth = (Iwidth - widths)/2;
			var contents = "content" || "内容";
			var url = 'SupplierSearch.html' ;
			var div = "<form><iframe id='InDiv' src='"+BASEURLRelative.concat(gotoPage)+"' frameborder='0' scrolling='auto' style='width:100%;height:100%;background-color:#ffffff;position:absolute;z-index:10000;top:0;left:0;opacity:0.7;'> "+
			"</iframe></form>";
			//$(document.body).append(div);
			
			//** ダイアログ表示アイテム内のHTMLを変更
			$(itemName).html(div);
			
			//** ダイアログオープン
			var win = $(itemName).dialog( {
				modal:true,
				title:"仕入先検索",
				width:Iwidth-60,
				height:Iheight-60,
				// buttons: { 
				// 	"確認": function() {
				// 		sName = $("#supSchsName").val();
				// 		callbackFnc( sName );
				// 		$(this).dialog("close");
				// 	}
				// } 
			} );
			win.dialog('open');
			break;
		case "approval" :
			//** ダイアログ表示アイテム内のHTMLを変更
			$(itemName).html( '予算稟議番号: <input type="text" id="supSchsName" value="BNE-RG12345678">' );
			
			//** ダイアログオープン
			$(itemName).dialog( {
				modal:true,
				title:"稟議番号検索",
				buttons: { 
					"確認": function() {
						sName = $("#supSchsName").val();
						callbackFnc( sName );
						$(this).dialog("close");
					}
				} 
			} );
			break;
			case "WBS" :
				var titles = "WBS" ||  'title';
				var Iheight = $(window).height();
				var Iwidth = $(window).width();
				var heights = 600;
				var widths = 600;
				var Oheight = (Iheight - heights) / 2;
				var Owidth = (Iwidth - widths)/2;
				var contents = "content" || "内容";
				var url = 'SupplierSearch.html' ;
				var div = "<form><iframe id='InDiv' src='"+BASEURLRelative.concat(gotoPage)+"' frameborder='0' scrolling='auto' style='width:100%;height:100%;background-color:#ffffff;position:absolute;z-index:10000;top:0;left:0;opacity:0.7;'> "+
							"</iframe></form>";
				//$(document.body).append(div);
				
				//** ダイアログ表示アイテム内のHTMLを変更
				$(itemName).html(div);
				
				//** ダイアログオープン
				var win = $(itemName).dialog( {
					modal:true,
					title:"WBS検索",
					width:Iwidth-90,
					height:Iheight-90,
					// buttons: { 
					// 	"確認": function() {
					// 		sName = $("#supSchsName").val();
					// 		callbackFnc( sName );
					// 		$(this).dialog("close");
					// 	}
					// } 
				} );
				win.dialog('open');
				break;
			//WBSSearch.html
	
		//当部署到tomcat等服务器的时候应该用这种方法比较好
		//没有部署到tomcat等服务器的情况下，无法跨域访问url
		/** 
		case "supplierSearch" :
			//** 
			var titles = "itemName" ||  'title';
			var Iheight = $(window).height();
			var Iwidth = $(window).width();
			var heights = 600;
			var widths = 600;
			var Oheight = (Iheight - heights) / 2;
			var Owidth = (Iwidth - widths)/2;
			var contents = "content" || "内容";
			var url = 'SupplierSearch.html' ;
			var div = "<div id='InDiv' style='width:"+Iwidth+"px;height:"+Iheight+"px;background-color:#888;position:absolute;z-index:10000;top:0;left:0;opacity:0.7;'> "+
						"<div id='offDiv' style='width:"+widths+"px;height:"+heights+"px;left:"+Owidth+"px;top:"+Oheight+"px;background-color:#ffffffff;position:absolute;z-index:10001;'>" + 
						"<h4 id='HTitle' style='margin:0px;paddin3px;background:#336699;opacity:0.9;border:1px solid ##336699;height:20px;line-height:20px;font:12px Verdana,Geneva,Arial,Helvetica,sans-serif;color:white;cursor:pointer;text-align:left;'>"+titles+"<a id='AClose' onclick='btnCloses()' style='float;right;'>close</a></h4>" +
						"<div id='Contents'>"+contents+"</div></div></div>";
			$(document.body).append(div);
			if(url!=""){
				$('#Contents').load(url);
			}		
			break;

		*/
	}
	consoleLog( "schWinOpen execute end." );
};

//移出弹出层
function RemoveDiv(){
		$("#AClose").remove();
		$("#HTitle").remove();
		$("#offDiv").remove();
		$("#InDiv").remove();
}

function btnCloses(){
	RemoveDiv();
}

//================================================
//=====               初期処理               =====
//================================================
$( function() {
	console.log( "screen init execute start." );
	
	//** ヘッダ **
	$(".lnk_menu").click( function() {
		gotoPage("Top.html");
	});
	
	//** プレースフォルダ **
	$(".cb_placeholder").change( selectedComboBox );
	$(".cb_placeholder").keydown( keyDownComboBox );
	
	//** 自動高さ拡張テキストエリア **
	$(".txt_auto_size").on( 'change keyup paste cut', editTextAreaAutoH );
	
	/* //** オートコンプリート(ユーザ名) **
	$( ".txt_userlist").autocomplete( {
		source: userNameList ,
	} ); */
	
	//** カレンダコントロール **
	$.datepicker.setDefaults( $.datepicker.regional[ "ja" ] );
	$.datepicker.formatDate( "ATOM" );
	$(".ctl_calendar").datepicker( {
		autoSize: true,
		changeMonth: true ,
		changeYear: true
	});
	$(".ctl_calendar").keydown( keyDownCalendar );
	$(".ctl_calendarbtn").click( function() {
		$(this).prev().datepicker('show');
	});
	
	//** ページの先頭へボタン **
	$('#toTopImg').hide();
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
	
	//一時保存ボタン
    $("#saveAllChanges").click(function(){
        //STEP1:SAVE DATA INTO Object:
        objUserChangeData = new Object();
        objUserChangeData.aaa = $("#secondTd").val();
        objUserChangeData.aaa1 = $("#firstTd").val();
        console.log(objUserChangeData);
        alert("一時保存しました。");
	})
	
	// ======= 共通入力制限イベント
	$('.input_alphanumeric').on('input', function() {
		// 半角変換
			var halfVal = $(this).val().replace(/[！-~]/g,function (tmpStr) {
				// 文字コードをシフト
				return String.fromCharCode(tmpStr.charCodeAt(0) - 0xFEE0);
			}
		);
		// 数字以外の不要な文字を削除
		$(this).val(halfVal.replace(/[^A-Za-z0-9/-]/g, ''));
		});

	/* // ======= ブラウザの「戻る」「進む」は使用できないように制御する。
	history.pushState(null, null, document.URL);
	window.addEventListener('popstate', function(){
	  history.pushState(null, null, document.URL);
	}); */
});



