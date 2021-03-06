//deliever datas to OrderBasicContentInput.html 
var dataList= new Array();

var toStringData = '';





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
	myOrderListWin.clearOList();
}


//===== 画面クラス =====
var myOrderListWin = new function() {
	this.tblDef = [
		{id: 'order_no'     , type: 'ANCHOR'  , sortable:true , css_area:'tx_center' },
		{id: 'order_sts'    , type: 'CHAR'    , sortable:true , css_area:'tx_center' },
		{id: 'wf_upd_day'   , type: 'DATETIME', sortable:true , css_area:'tx_center' },
		{id: 'order_type'   , type: 'CHAR'    , sortable:true , css_area:'tx_center' },
		{id: 'order_name'   , type: 'VARCHAR' , sortable:true },
		{id: 'resp_person'  , type: 'VARCHAR' , sortable:true },
		{id: 'resp dep'     , type: 'VARCHAR' , sortable:true },
		{id: 'order_from'   , type: 'VARCHAR' , sortable:true },
		{id: 'order_day'    , type: 'DATE'    , sortable:true , css_area:'tx_center' },
		{id: 'delivery_btn' , type: 'BUTTON'  , sortable:false, css_area:'tx_center', css_item:'order_list_icon order_list_icon01', width:'28px' },
		{id: 'modify_btn'   , type: 'BUTTON'  , sortable:false, css_area:'tx_center', css_item:'order_list_icon order_list_icon02', width:'28px' },
		{id: 'takeback_btn' , type: 'BUTTON'  , sortable:false, css_area:'tx_center', css_item:'order_list_icon order_list_icon03', width:'28px' },
		{id: 'copy_btn'     , type: 'BUTTON'  , sortable:false, css_area:'tx_center', css_item:'order_list_icon order_list_icon04', width:'28px' },
		{id: 'remove_btn'   , type: 'BUTTON'  , sortable:false, css_area:'tx_center', css_item:'order_list_icon order_list_icon05', width:'28px' },
	];
	
	this.pagerCount = 5;
	
	this.isSelected = false;
	
	//=== 発注一覧リストへの行追加 ===
	this.insertOList = function( dat ) {
		var str_tr = '';
		
		$.each( this.tblDef , function( index, elem ) {
			// consoleLog('elem'+elem)
			//** td開始タグ **
			str_tr += '<td ';
			if( 'css_area' in elem ) { // CSS(td用)が定義されていたら
				str_tr += 'class="' + elem['css_area'] + '"';
			}
			
			// TODO:
			
			// myself added CSS function:【発注明細内容】: マウスホバースタイルの変更 and 
			if(elem.id == "order_name"){
				// consoleLog("index is:"+index);
				
				consoleLog("elem is:"+dat[elem['id']]);
				
				dataList[1] = dat[elem['id']];
				str_tr += '><div class=' + '"order_contentMouse"' + '>' + '<p class="order_contentMouse_p">' + dat[elem['id']]+'</p>';
			}
			else {
				str_tr += '><div>';	
			}
			//===todo end====

			//** 中身 **
			//===my add ==
			var i = 0;
			var j = 0;
			if( elem['id'] in dat ) {
				// dataList[i] = dat[elem['id']];
				// consoleLog(dataList[i]);
				// consoleLog(dat[0]);
				// i++;
			}
			//consoleLog('dataList'+dataList);
			//==my add end ==
			if( elem['id'] in dat ) { // dat内にデータが存在している場合
				if( elem['type'] == 'BUTTON' && elem['id'] == 'delivery_btn') { // 受入ボタンの場合
					if( !(dat[elem['id']]) ) {
						str_tr += '<input type="button" class="' + elem['css_item'] + '"';
						str_tr += " disabled />";
					}
					else{

						str_tr+='<a href="../html/AcceptanceBasicContentInput.html?#OrderList,AcceptanceBasicContentInput,'+dat[elem['id']]+','+ dat['order_type']+','+ dat['order_name']+','+ dat['resp_person']+','+ dat['resp dep']+ ','+dat['order_day']+ '">' ;
						// str_tr+='<img class="' + elem['css_item'] + '"';
						str_tr+='<img border="0" src="../image/ukeire_on.png" width="59%" height="60%">'  + "</a>";
						//str_tr += ' />';
					}
				} if( elem['type'] == 'BUTTON' && elem['id'] == 'modify_btn') { // 受入ボタンの場合
					if( !(dat[elem['id']]) ) {
						str_tr += '<input type="button" class="' + elem['css_item'] + '"';
						str_tr += " disabled />";
					}
					else{

						str_tr+='<a href="../html/OrderPremiseInput.html?#OrderList,OrderPremiseInput,'+dat[elem['id']]+','+ dat['order_type']+','+ dat['order_name']+','+ dat['resp_person']+','+ dat['resp dep']+ ','+dat['order_day']+ '">' ;
						// str_tr+='<img class="' + elem['css_item'] + '"';
						str_tr+='<img border="0" src="../image/shusei_on.png" width="59%" height="60%">'  + "</a>";
						//str_tr += ' />';
					}
				} else if( elem['type'] == 'BUTTON' ) { // ボタンの場合
					str_tr += '<input type="button" class="' + elem['css_item'] + '"'
					if( !(dat[elem['id']]) ) {
						str_tr += " disabled";
					}
					str_tr += ">";
				} else if( elem['type'] == 'ANCHOR' ) { // リンクの場合
					dataList[0] = dat[elem['id']];
					// str_tr += '<a href="#">'  + dat[elem['id']] + "</a>";order_type
					//获取dat表格某一行的值
					str_tr += '<a href="../html/OrderContentConfirm.html?#OrderList,OrderContentConfirm.html,'+dat[elem['id']]+','+ dat['order_type']+','+ dat['order_name']+','+ dat['resp_person']+','+ dat['resp dep']+ ','+dat['order_day']+ '">'  + dat[elem['id']] + "</a>";
				} else { // 上記以外の場合
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
			
		}).then( function() {
			setTimeout( function() {
				//***** データのクリア *****
				myOrderListWin.clearOList();
				
				//***** データの表示 *****
				var datalist = myOrderListData1[ 'data' ];
				$.each( datalist , function( index , elem ){
					myOrderListWin.insertOList( elem );
				} );
				
				//***** ページャーの表示 *****
				var dispPagerCount = myOrderListWin.pagerCount > myOrderListData1[ 'pageInfo' ]['maxPage'] ?
				                     myOrderListData1[ 'pageInfo' ]['maxPage'] : myOrderListWin.pagerCount;
				var stPgCnt = myOrderListData1[ 'pageInfo' ]['currentPage'] - 2 < 1 ?
				            1 : myOrderListData1[ 'pageInfo' ]['currentPage'] - 2 ;
				stPgCnt = myOrderListData1[ 'pageInfo' ]['maxPage'] - dispPagerCount + 1 < stPgCnt ?
				        myOrderListData1[ 'pageInfo' ]['maxPage'] - dispPagerCount + 1 : stPgCnt;
				var edPgCnt = stPgCnt +  dispPagerCount - 1 > myOrderListData1[ 'pageInfo' ]['maxPage'] ?
				            myOrderListData1[ 'pageInfo' ]['maxPage'] : stPgCnt +  dispPagerCount - 1;
				var pgHtml = '<input type="button" class="pager_totop"'
				           + ( myOrderListData1['pageInfo']['currentPage'] == 1 ? ' disabled ' : '' )
				           + '><input type="button" class="pager_prev"'
				           + ( myOrderListData1['pageInfo']['currentPage'] == 1 ? ' disabled ' : '' )
				           + '></div>';
				for( var iloop = stPgCnt ; iloop <= edPgCnt ; iloop++ ) {
					if( iloop ==  myOrderListData1['pageInfo']['currentPage'] ) {
						pgHtml += '<div class="pager_pg_current">' + iloop + '</div>';
					} else {
						pgHtml += '<div class="pager_page">' + iloop + '</div>';
					}
				}
				pgHtml += '<input type="button" class="pager_next"'
				        + ( myOrderListData1['pageInfo']['currentPage'] == myOrderListData1['pageInfo']['maxPage'] ? ' disabled ' : '' )
				        + '><input type="button" class="pager_tolast"'
				        + ( myOrderListData1['pageInfo']['currentPage'] == myOrderListData1['pageInfo']['maxPage'] ? ' disabled ' : '' )
				        + '></div>';
				$("#tb_order_list_pager .pager_centerbox").html( pgHtml );
				
				$("#tb_order_list_pager .pager_centerbox .pager_totop").click( function() {
					 myOrderListData1['pageInfo']['currentPage'] = 1;
					 myOrderListWin.listRetrieve();
				} );
				
				$("#tb_order_list_pager .pager_centerbox .pager_prev").click( function() {
					 myOrderListData1['pageInfo']['currentPage'] -= 1;
					 myOrderListWin.listRetrieve();
				} );
				
				$("#tb_order_list_pager .pager_centerbox .pager_page").click( function() {
					 myOrderListData1['pageInfo']['currentPage'] = parseInt( $(this).text() );
					 myOrderListWin.listRetrieve();
				} );
				
				$("#tb_order_list_pager .pager_centerbox .pager_next").click( function() {
					 myOrderListData1['pageInfo']['currentPage'] += 1;
					 myOrderListWin.listRetrieve();
				} );
				
				$("#tb_order_list_pager .pager_centerbox .pager_tolast").click( function() {
					 myOrderListData1['pageInfo']['currentPage'] = myOrderListData1['pageInfo']['maxPage'];
					 myOrderListWin.listRetrieve();
				} );
				
				//***** ページャー右の件数表示 *****
				var stCnt = ( myOrderListData1['pageInfo']['currentPage'] - 1 ) * myOrderListData1['pageInfo']['dataCountPerPage'] + 1 ;
				var edCnt = myOrderListData1[ 'pageInfo' ]['currentPage'] * myOrderListData1[ 'pageInfo' ]['dataCountPerPage'] ;
				edCnt = edCnt > myOrderListData1[ 'pageInfo' ]['dataCountAll'] ? myOrderListData1[ 'pageInfo' ]['dataCountAll'] : edCnt;
				var infoHtml = stCnt + '-' + edCnt + '件／' + myOrderListData1[ 'pageInfo' ]['dataCountAll'] + "件" ;
				$("#tb_order_list_pager .pager_info").html( infoHtml ); 
				
				//***** 初期検索終了フラグをON *****
				myOrderListWin.isSelected = true;
				
				//***** 検索中アイコンの停止 *****
				$( "#loadingBox").css( "transform" , "rotate(0deg)" );
				$( "#loadingBox").css( "transition" , "transform 2s" );
				
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
		$('#tb_order_list tr').bind('click',function(){
			var ind=$(this).index();
			consoleLog('ind+ind'+ind);
		})
		$(window).mousemove( this.mouseMoveWin  );
		$(window).mouseup( this.mouseUpWin  );
	};
	
}();

//===== 初期処理 =====
$( function() {
	consoleLog( "screen MyORderList init execute start." );
	// 仕入先検索ボタンクリックイベント設定
	$("#supplierSch01").click( function() {
		schWinOpen( "supplier" , "#dialog_window_div" , setSupplierName ,'SupplierSearch.html');
	});

	// $("#supplierSch01").click( 
	// 	openAddWin
	// );
	// 稟議検索ボタンクリックイベント設定
	$("#approvalSch01").click( function() {
		schWinOpen( "approval" , "#dialog_window_div" , setApprovalName ,'');
	});
	
	// 詳細条件ボタンクリックイベント設定
	$("#btn_accordion01").click( clickAccordionBtn );
	
	// 検索ボタンクリックイベント設定
	$("#btn_list_sch").click( clickSearchBtn );
	
	// クリアボタンクリックイベント設定
	$("#btn_p_clear").click( clickClearBtn );
	
	//WBS検索 popup WBSSearch.html
	$("#WBSBtn").click( function() {
		schWinOpen( "WBS" , "#dialog_window_div" , setSupplierName ,'WBSSearch.html');

	});
	
	// 一覧初期化
	myOrderListWin.initTable();
	
	//监听子画面的值，动作；
	//此处可以拿到子画面的message,并关闭子画面弹框
	window.addEventListener('message',function(e){
		$('.ui-dialog div').dialog("close");
		let data = e.data;
		consoleLog(data);
		if(data.filePath =="../html/WBSSearch.html"){
			//点击的是确认按钮的话
			if(data.s == "confirm"){
			$("#approval_name0").val(data.datalist[0]);
			$("#approval_name1").val(data.datalist[1]);
			}
		}else{
			$("#supplier_name").val(xx);
		}

	})
	// var dateLists = new Array();

	// var message = {s:"9999999",filePath:BASEURLRelative+'OrderList.html'}
	// window.parent.postMessage(message,'*');

	//

	consoleLog( "screen MyORderList init execute end." );
});


