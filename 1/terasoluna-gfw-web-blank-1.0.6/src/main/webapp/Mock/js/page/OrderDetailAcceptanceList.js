//===== 仕入先検索コールバック =====
var setSupplierName = function( sName ) {
	consoleLog( "setSupplierName execute start." );
	console.log( sName );
	$("#supplier_name").val(sName);
	consoleLog( "setSupplierName execute end." );
};

//==wbs検索コールバック==//
var setWbsScherResult = function(sName){
	consoleLog( "setWbsScherResult execute start." );
	console.log( sName );
	$("#wbs_earch_result1").val(sName);
	consoleLog( "setWbsScherResult execute end." );
}

//===== 検索条件アコーディオンクリック =====
var clickAccordionBtn = function() {
	consoleLog( "clickAccordionBtn execute start." );
	
	if( $("#btn_accordion01").hasClass( "btn_plus" ) ) { // アコーディオンが閉じている
		$("#btn_accordion01").addClass( "btn_minus" );
		$("#btn_accordion01").removeClass( "btn_plus" );
		
		$("#win_accordion01").addClass( "ac01_sc_height" );
		$("#win_accordion01").slideDown( "slow" );
		$("#win_accordion01").removeClass( "ac01_sc_height" );
	} else { // アコーディオンが開いている
		$("#btn_accordion01").addClass( "btn_plus" );
		$("#btn_accordion01").removeClass( "btn_minus" );
		
		$("#win_accordion01").slideUp( "slow" );
	}
	
	consoleLog( "clickAccordionBtn execute end." );
}

//===== 検索ボタンクリック =====
var clickSearchBtn = function() {
	myOrderListWin.listRetrieve();
}


//===== クリアボタンクリック =====
var clickClearBtn = function() {
	
}


//===== 画面クラス =====
var myOrderListWin = new function() {
	this.tblDef = [
		{id: 'order_no'           , type: 'ANCHOR'  , sortable:true , css_area:'tx_center' },
		{id: 'details_no'         , type: 'CHAR'    , sortable:true , css_area:'tx_center' },
		{id: 'subject_name'       , type: 'VARCHAR' , sortable:true },
		{id: 'order_details'      , type: 'VARCHAR' , sortable:true },
		{id: 'wbs'                , type: 'VARCHAR' , sortable:false },
		{id: 'acceptance_status'  , type: 'BUTTON'  , sortable:false , css_area:'tx_center', css_item:'btn_opn_win2', width:'70px'},
		{id: 'acceptance'         , type: 'BUTTONIMAGE'  , sortable:false , css_area:'tx_center', css_item:'order_list_icon order_list_icon01', width:'28px' },
		{id: 'acceptance_date'    , type: 'DATE'    , sortable:true },
		{id: 'complete_day'       , type: 'DATE'    , sortable:true , css_area:'tx_center' },
		{id: 'order_quantity'     , type: 'CHAR'    , sortable:false , css_area:'tx_center' },
		{id: 'acceptance_quantity', type: 'CHAR'    , sortable:false , css_area:'tx_center' },
		{id: 'order_amount'       , type: 'VARCHAR' , sortable:false },
		{id: 'received_amount'    , type: 'VARCHAR' , sortable:false  },
		{id: 'order_leader'       , type: 'VARCHAR' , sortable:false },
		{id: 'order_deploy'       , type: 'VARCHAR' , sortable:false },
		{id: 'supplier'           , type: 'VARCHAR' , sortable:false },
		{id: 'amount'             , type: 'VARCHAR' , sortable:false },
		{id: 'payment_due_date'   , type: 'DATE'    , sortable:true , css_area:'tx_center' },
		{id: 'delivery_date'      , type: 'DATE'    , sortable:true , css_area:'tx_center' },
		{id: 'posting_date'       , type: 'DATE'    , sortable:true , css_area:'tx_center' },
		{id: 'payment_date'       , type: 'DATE'    , sortable:true , css_area:'tx_center' },
		{id: 'currency'           , type: 'CHAR'    , sortable:false , css_area:'tx_center' },
		{id: 'currency_rate'      , type: 'CHAR'    , sortable:false , css_area:'tx_center' },
		{id: 'input_department'   , type: 'CHAR'    , sortable:false, css_area:'tx_center' },
		{id: 'child_class'        , type: 'CHAR'    , sortable:false, css_area:'tx_center' },
		{id: 'final_flag'         , type: 'CHECKBOX', sortable:false, css_area:'tx_center', width:'28px' },
		{id: 'accounting_flag'    , type: 'CHECKBOX', sortable:false, css_area:'tx_center', width:'28px' },
		{id: 'contract_date'      , type: 'DATE'    , sortable:false, css_area:'tx_center'},
		{id: 'email'              , type: 'CHECKBOX', sortable:true , css_area:'tx_center', width:'28px' },
	];
	
	this.pagerCount = 5;
	
	this.isSelected = false;
	
	//=== 発注一覧リストへの行追加 ===
	this.insertOList = function( dat ) {
		var str_tr = '';
		
		$.each( this.tblDef , function( index, elem ) {
			//** td開始タグ **
			str_tr += '<td ';
			if( 'css_area' in elem ) { // CSS(td用)が定義されていたら
				str_tr += 'class="' + elem['css_area'] + '"';
			}
			str_tr += '><div>';
			
			//** 中身 **
			if( elem['id'] in dat ) { // dat内にデータが存在している場合
				if( elem['type'] == 'BUTTONIMAGE' ) { // ボタンの場合
					str_tr += '<input type="button" class="' + elem['css_item'] + '"'
					if( !(dat[elem['id']]) ) {
						str_tr += " disabled";
					}
					str_tr += ">";
				} else if( elem['type'] == 'ANCHOR' ) { // リンクの場合
					str_tr += '<a href="OrderContentConfirm.html">'  + dat[elem['id']] + "</a>";
				} else if(elem['type'] == 'CHECKBOX'){
					str_tr += "<input type = 'checkbox'>"
				}else if(elem['type'] == 'BUTTON'){
					str_tr += "<a href='AcceptanceContentConfirm.html'>" + "<input type = 'button' class='accept_basic_contents_btn' value='受入確認'>" + "</a>"
				}else { // 上記以外の場合
					str_tr += dat[elem['id']] ;
				}
			}
			
			//** td終了タグ **
			str_tr += "</div></td>"
			
		} );
		$('#tb_order_list tbody').append( '<tr>' + str_tr + '</tr>' );
	};
	
	//=== 発注一覧リストから全行削除 ===
	this.clearOList = function() {
		$('#tb_order_list tbody tr').remove();
	};
	
	//=== 一覧表示 ===
	this.listRetrieve = function() {
		var searchDefer = new $.Deferred();
		searchDefer.resolve();
		var searchPromise = searchDefer.promise();
		
		//** 検索 **
		searchPromise.then( function() {
			//** ボタンの無効化 **
			$("#btn_list_sch").attr('disabled', true);

			//** SHADE DIV & LOADING ICON　表示 **
			$("#shadeDiv").css('display', 'block');
			$("#loadingIcon").css('visibility', 'visible');
			setTimeout(function(){
				//** 検索中アイコンの表示 **
			    $( "#loadingBox").css( "transform" , "rotate(360deg)" );
			},0.1);
			
			//** マウスポインタを砂時計に **
			$(document.body).css( { cursor: 'wait' } );
			
			// //** 検索中アイコンの表示 **
			// $( "#ldicon_order_list .ld_ldicon").css( "animation-duration" , "1.5s" );
		}).then( function() {
			setTimeout( function() {
				//***** データのクリア *****
				myOrderListWin.clearOList();
				
				//***** データの表示 *****
				var datalist = myOrderListData4[ 'data' ];
				$.each( datalist , function( index , elem ){
					myOrderListWin.insertOList( elem );
				} );
				
				//***** ページャーの表示 *****
				var dispPagerCount = myOrderListWin.pagerCount > myOrderListData4[ 'pageInfo' ]['maxPage'] ?
				                     myOrderListData4[ 'pageInfo' ]['maxPage'] : myOrderListWin.pagerCount;
				var stPgCnt = myOrderListData4[ 'pageInfo' ]['currentPage'] - 2 < 1 ?
				            1 : myOrderListData4[ 'pageInfo' ]['currentPage'] - 2 ;
				stPgCnt = myOrderListData4[ 'pageInfo' ]['maxPage'] - dispPagerCount + 1 < stPgCnt ?
				        myOrderListData4[ 'pageInfo' ]['maxPage'] - dispPagerCount + 1 : stPgCnt;
				var edPgCnt = stPgCnt +  dispPagerCount - 1 > myOrderListData4[ 'pageInfo' ]['maxPage'] ?
				            myOrderListData4[ 'pageInfo' ]['maxPage'] : stPgCnt +  dispPagerCount - 1;
				var pgHtml = '<input type="button" class="pager_totop"'
				           + ( myOrderListData4['pageInfo']['currentPage'] == 1 ? ' disabled ' : '' )
				           + '><input type="button" class="pager_prev"'
				           + ( myOrderListData4['pageInfo']['currentPage'] == 1 ? ' disabled ' : '' )
				           + '></div>';
				for( var iloop = stPgCnt ; iloop <= edPgCnt ; iloop++ ) {
					if( iloop ==  myOrderListData4['pageInfo']['currentPage'] ) {
						pgHtml += '<div class="pager_pg_current">' + iloop + '</div>';
					} else {
						pgHtml += '<div class="pager_page">' + iloop + '</div>';
					}
				}
				pgHtml += '<input type="button" class="pager_next"'
				        + ( myOrderListData4['pageInfo']['currentPage'] == myOrderListData4['pageInfo']['maxPage'] ? ' disabled ' : '' )
				        + '><input type="button" class="pager_tolast"'
				        + ( myOrderListData4['pageInfo']['currentPage'] == myOrderListData4['pageInfo']['maxPage'] ? ' disabled ' : '' )
				        + '></div>';
				$("#tb_order_list_pager .pager_centerbox").html( pgHtml );
				
				$("#tb_order_list_pager .pager_centerbox .pager_totop").click( function() {
					 myOrderListData4['pageInfo']['currentPage'] = 1;
					 myOrderListWin.listRetrieve();
				} );
				
				$("#tb_order_list_pager .pager_centerbox .pager_prev").click( function() {
					 myOrderListData4['pageInfo']['currentPage'] -= 1;
					 myOrderListWin.listRetrieve();
				} );
				
				$("#tb_order_list_pager .pager_centerbox .pager_page").click( function() {
					 myOrderListData4['pageInfo']['currentPage'] = parseInt( $(this).text() );
					 myOrderListWin.listRetrieve();
				} );
				
				$("#tb_order_list_pager .pager_centerbox .pager_next").click( function() {
					 myOrderListData4['pageInfo']['currentPage'] += 1;
					 myOrderListWin.listRetrieve();
				} );
				
				$("#tb_order_list_pager .pager_centerbox .pager_tolast").click( function() {
					 myOrderListData4['pageInfo']['currentPage'] = myOrderListData4['pageInfo']['maxPage'];
					 myOrderListWin.listRetrieve();
				} );
				
				//***** ページャー右の件数表示 *****
				var stCnt = ( myOrderListData4['pageInfo']['currentPage'] - 1 ) * myOrderListData4['pageInfo']['dataCountPerPage'] + 1 ;
				var edCnt = myOrderListData4[ 'pageInfo' ]['currentPage'] * myOrderListData4[ 'pageInfo' ]['dataCountPerPage'] ;
				edCnt = edCnt > myOrderListData4[ 'pageInfo' ]['dataCountAll'] ? myOrderListData4[ 'pageInfo' ]['dataCountAll'] : edCnt;
				var infoHtml = stCnt + '-' + edCnt + '件／' + myOrderListData4[ 'pageInfo' ]['dataCountAll'] + "件" ;
				$("#tb_order_list_pager .pager_info").html( infoHtml ); 
				
				//***** 初期検索終了フラグをON *****
				myOrderListWin.isSelected = true;
				
				//***** 検索中アイコンの停止 *****
				$( "#ldicon_order_list .ld_ldicon").css( "animation-duration" , "0s" );
				
				//***** マウスポインタを標準に *****
				$(document.body).css( { cursor: 'auto' } );
				//** SHADE DIV & LOADING ICON　非表示 **
				$("#shadeDiv").css('display', 'none');
				$("#loadingIcon").css('visibility', 'hidden');
				
				//***** ボタンの有効化 *****
				$('#btn_list_sch').removeAttr('disabled');
			} , 1000 );
		});
		
	};
	
	//===== テーブルアクション =====
	this.selectBorder = false;    // テーブルヘッダの列の境界にマウスがあるかのフラグ
	this.dragBorder   = false;    // テーブルヘッダの列境界でドラック中かのフラグ
	this.drag_target  = null ;    // ドラックしているthエレメント
	this.orderColumn    = -1;     // ソート対象のthエレメント(0～)
	this.orderDirection = "";     // ソートが昇順か降順か
	
	//== ヘッダでのマウス移動 ==
	this.mouseMoveTbHead = function(e) {
		var colRightPos = parseInt( $(this).offset().left ) + $(this).outerWidth();
		//** 列の境界にマウスがあるときはIアイコンにする **
		if( (colRightPos - 5) < e.clientX && e.clientX < (colRightPos + 5) ) {
			$(this).css( { cursor: 'col-resize' } );
			myOrderListWin.selectBorder = true;
			return false;
		}
		
		//** マウスが外れた場合は戻す **
		if( myOrderListWin.selectBorder ) {
			$(this).css( { cursor: '' } );
			myOrderListWin.selectBorder = false;
		}
		return true;
	};
	
	//== ヘッダでのマウスダウン ==
	this.mouseDownTbHead = function(e) {
		if( myOrderListWin.selectBorder ) {
			myOrderListWin.dragBorder = true;
			myOrderListWin.drag_target = $(this);
			$(document.body).css( { cursor: 'col-resize' } );
			return false;
		} else {
			var selIdx = $( "#tb_order_list th" ).index( this ) ;
			if( myOrderListWin.tblDef[selIdx]["sortable"] ) {
				if( myOrderListWin.orderColumn == selIdx ) {
					if( myOrderListWin.orderDirection == "A" ) {
						$(this).removeClass( "orderasc" );
						$(this).addClass( "orderdesc" );
						myOrderListWin.orderDirection = "D";
					} else {
						$(this).removeClass( "orderdesc" );
						$(this).addClass( "orderasc" );
						myOrderListWin.orderDirection = "A";
					}
				} else {
					if( myOrderListWin.orderColumn != -1 ) {
						$("#tb_order_list th.orderasc").removeClass( "orderasc" );
						$("#tb_order_list th.orderdesc").removeClass( "orderdesc" );
					}
					$(this).addClass( "orderasc" );
					myOrderListWin.orderColumn = selIdx;
					myOrderListWin.orderDirection = "A";
				}
				if( myOrderListWin.isSelected ) {
					myOrderListWin.listRetrieve();
				}
				return false;
			}
		}
		return true;
	};
	
	//== 一覧ドラック中によるウィンドウのマウス移動 ==
	this.mouseMoveWin = function(e) {
		if( myOrderListWin.dragBorder  ) {
			var th_width = e.clientX - parseInt( $( myOrderListWin.drag_target ).offset().left );
			myOrderListWin.drag_target.css( { width: th_width + 'px' });
			return false;
		}
		return true;
	};
	
	//== 一覧ドラック中によるマウスアップ ==
	this.mouseUpWin = function(e) {
		myOrderListWin.drag_target = null;
		myOrderListWin.dragBorder = false;
		this.selectBorder = false;
		$(document.body).css( { cursor: '' } );
	};
	
	//=== 一覧イベント設定 ===
	this.initTable = function() {
		//** 空行を追加 **
		this.insertOList( {} );
		
		//** 一覧の幅設定 **
		$.each( this.tblDef , function( index, elem ) {
			if( 'width' in elem ) { // elem内にwidth設定が存在している場合
				$("#tb_order_list th").eq(index).css( 'width' , elem['width'] );
			}
		} );
		
		//** タイトルの切れ目のマウスオーバ時イベント **
		$( "#tb_order_list th" ).mousemove( this.mouseMoveTbHead );
		$( "#tb_order_list th" ).mousedown( this.mouseDownTbHead );
		$(window).mousemove( this.mouseMoveWin  );
		$(window).mouseup( this.mouseUpWin  );
	};
	
}();

//===== 初期処理 =====
$( function() {
	consoleLog( "screen MyORderList init execute start." );
	// 仕入先検索ボタンクリックイベント設定
	$("#supplierSch01").click( function() {
		schWinOpen( "supplier" , "#dialog_window_div" , setSupplierName, "SupplierSearch.html" );
	});
	
	// 稟議検索ボタンクリックイベント設定
	$("#approvalSch01").click( function() {
		schWinOpen( "approval" , "#dialog_window_div" , setApprovalName );
	});

	// 稟議検索ボタンクリックイベント設定
	$("#wbssearch").click( function() {
		schWinOpen( "WBS" , "#dialog_window_div" , setWbsScherResult , "WBSSearch.html" );
	});
	
	// 詳細条件ボタンクリックイベント設定
	$("#btn_accordion01").click( clickAccordionBtn );
	
	// 検索ボタンクリックイベント設定
	$("#btn_list_sch").click( clickSearchBtn );
	
	// クリアボタンクリックイベント設定
	$("#btn_p_clear").click( clickClearBtn );
	
	// 一覧初期化
	myOrderListWin.initTable();
	
	consoleLog( "screen MyORderList init execute end." );
});

var details_num = 2;

//showtable
$("#showtable").click(function(){
	$("#table_details").css("display","inline");
	$("#goukei_jpy").css("display","inline");
});

//append_table
$("#append_table").click(function(){
	alert("add");
	var copytbl = $("#table_details").clone(true);
	copytbl.find("#tbl_details_num").text("明細"+ details_num);
	copytbl.find("#tbl_details_num").attr("id","table_details" + details_num);
	$("#add2copr").append(copytbl);
	details_num++;
});

//copy_table
$("#copy_table").click(function(){
	alert("copy");
	$("#add2copr").append($("#table_details").clone(true));
});

//remove_table
$("#remove_table").click(function(){
	$(this).parent().parent().parent().remove();
});

$("#cancel_box").click(function(){
	if(this.checked){
		$("#tb_order_cond_list6").each(function(i){
			$(input[type='text']).attr("readyonly",true);
		});
	}else{
		alert("2");
	}
});

//监听子画面的值，动作；
//此处可以拿到子画面的message,并关闭子画面弹框
window.addEventListener('message',function(e){
	$('.ui-dialog div').dialog("close");
	let data = e.data;
	if(data.datalist.length>1){
		$("#wbs_code").val(data.datalist[0]);
		$("#wbs_name").val(data.datalist[1]);
	}else{
		consoleLog(data);
		var xx = data.datalist[0];
		$("#supplier_name").val(xx);
	}
	
});
//计算输入框剩余字数
$("#nouhin_txt_2").bind("input propertychange", function(){
	$("#nouhin_lavecount_2").text(200-$(this).val().length);
});

$("#meisai_txt_4").bind("input propertychange", function(){
	$("#meisai_lavecount_4").text(400-$(this).val().length);
});

$("#bikou_txt_2").bind("input propertychange", function(){
	$("#bikou_lavecount_2").text(200-$(this).val().length);
});

$("#txt_bikou").bind("input propertychange", function(){
	$("#meisai1_bihou_lavecount_2").text(200-$(this).val().length);
});

$("#txt_nouhin").bind("input propertychange", function(){
	$("#meisai1_nouhin_lavecoun_2").text(200-$("#txt_nouhin").val().length);
});

$("#txt_details").bind("input propertychange", function(){
	$("#meisai1_meisai_lavecount_4").text(400-$(this).val().length);
});

//变换合计表格
var timeFn = null;

$(".default_write").click(function(){

	// clearTimeout(timeFn);

	// timeFn = setTimeout(function(){
		$(this).text("USD:米ドル");
		$("#goukei_jpy").css("display","none");
		$("#goukei_usd").css("display","inline");
	// }, 2000);	
});

$(".accept_basic_contents_btn").click(function(){
	alert("hhh");
	self.location.href = "AcceptBasicContentsInput.html";
	console.log("lllll");
});

