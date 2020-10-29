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
		{id: 'order_content'   , type: 'VARCHAR' , sortable:true },
		{id: 'resp_person'  , type: 'VARCHAR' , sortable:true },
		{id: 'resp dep'     , type: 'VARCHAR' , sortable:true },
		{id: 'order_from'   , type: 'VARCHAR' , sortable:true },
		{id: 'admit_day'    , type: 'DATE'    , sortable:true , css_area:'tx_center' },
		{id: 'input_dep'    , type: 'VARCHAR'    , sortable:true , css_area:'tx_center' },
		{id: 'order_number'    , type: 'VARCHAR'    , sortable:true , css_area:'tx_center' },
		{id: 'input_number'    , type: 'VARCHAR'    , sortable:true , css_area:'tx_center' },
		{id: 'order_totalAmount'    , type: 'VARCHAR'    , sortable:true , css_area:'tx_center' },
		{id: 'input_totalAmount'    , type: 'VARCHAR'    , sortable:true , css_area:'tx_center' },

		{id: 'cancel_btn' , type: 'BUTTON'  , sortable:false, css_area:'tx_center', css_item:'order_list_icon order_list_icon04', width:'28px' },
		
		{id: 'takeback_btn' , type: 'BUTTON'  , sortable:false, css_area:'tx_center', css_item:'order_list_icon order_list_icon03', width:'28px' },
		
		{id: 'remove_btn'   , type: 'BUTTON'  , sortable:false, css_area:'tx_center', css_item:'order_list_icon order_list_icon05', width:'28px' },
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
			//str_tr += '><div';
			

			// TODO:
			// myself added CSS function:【発注明細内容】: マウスホバースタイルの変更 and 
			if(elem.id == "order_content"){
				// consoleLog("index is:"+index);
				
				consoleLog("elem is:"+dat[elem['id']]);
				
				
				str_tr += '><div class=' + '"order_contentMouse"' + '>' + '<p class="order_contentMouse_p">' + dat[elem['id']]+'</p>';
			}
			else {
				str_tr += '><div>';	
			}
			
			
			//** 中身 **
			if( elem['id'] in dat ) { // dat内にデータが存在している場合
				if( elem['type'] == 'BUTTON' && elem['id'] == 'cancel_btn') { // cancleボタンの場合
					if( !(dat[elem['id']]) ) {
						str_tr += '<input type="button" class="' + elem['css_item'] + '"';
						str_tr += " disabled />";
					}
					else{

						str_tr+='<a href="../html/AcceptanceBasicContentInput.html?#AcceptRealAchievementList,AcceptanceBasicContentInput,'+dat[elem['id']]+','+ dat['order_type']+','+ dat['order_name']+','+ dat['resp_person']+','+ dat['resp dep']+ ','+dat['order_day']+ '">' ;
						// str_tr+='<img class="' + elem['css_item'] + '"';
						str_tr+='<img border="0" src="../image/sairiyo_on.png" width="59%" height="60%">'  + "</a>";
						//str_tr += ' />';
					}
				} else if( elem['type'] == 'BUTTON' ) { // ボタンの場合
					str_tr += '<input type="button" class="' + elem['css_item'] + '"'
					if( !(dat[elem['id']]) ) {
						str_tr += " disabled";
					}
					str_tr += ">";
				} else if( elem['type'] == 'ANCHOR' ) { // リンクの場合
					//获取dat表格某一行的值
					str_tr += '<a href="../html/AcceptanceContentConfirm.html?#AcceptRealAchievementList,AcceptanceContentConfirm,'+dat[elem['id']]+','+ dat['order_type']+','+ dat['order_name']+','+ dat['resp_person']+','+ dat['resp dep']+ ','+dat['order_day']+ '">'  + dat[elem['id']] + "</a>";
				//	consoleLog(str_tr);
				} 
				else { // 上記以外の場合
					str_tr += dat[elem['id']] ;
				}
				//consoleLog(dat[elem['id']]);
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
				var datalist = AcceptRealAchievementListData[ 'data' ];
				$.each( datalist , function( index , elem ){
					myOrderListWin.insertOList( elem );
				} );
				
				//***** ページャーの表示 *****
				var dispPagerCount = myOrderListWin.pagerCount > AcceptRealAchievementListData[ 'pageInfo' ]['maxPage'] ?
				                     AcceptRealAchievementListData[ 'pageInfo' ]['maxPage'] : myOrderListWin.pagerCount;
				var stPgCnt = AcceptRealAchievementListData[ 'pageInfo' ]['currentPage'] - 2 < 1 ?
				            1 : AcceptRealAchievementListData[ 'pageInfo' ]['currentPage'] - 2 ;
				stPgCnt = AcceptRealAchievementListData[ 'pageInfo' ]['maxPage'] - dispPagerCount + 1 < stPgCnt ?
				        AcceptRealAchievementListData[ 'pageInfo' ]['maxPage'] - dispPagerCount + 1 : stPgCnt;
				var edPgCnt = stPgCnt +  dispPagerCount - 1 > AcceptRealAchievementListData[ 'pageInfo' ]['maxPage'] ?
				            AcceptRealAchievementListData[ 'pageInfo' ]['maxPage'] : stPgCnt +  dispPagerCount - 1;
				var pgHtml = '<input type="button" class="pager_totop"'
				           + ( AcceptRealAchievementListData['pageInfo']['currentPage'] == 1 ? ' disabled ' : '' )
				           + '><input type="button" class="pager_prev"'
				           + ( AcceptRealAchievementListData['pageInfo']['currentPage'] == 1 ? ' disabled ' : '' )
				           + '></div>';
				for( var iloop = stPgCnt ; iloop <= edPgCnt ; iloop++ ) {
					if( iloop ==  AcceptRealAchievementListData['pageInfo']['currentPage'] ) {
						pgHtml += '<div class="pager_pg_current">' + iloop + '</div>';
					} else {
						pgHtml += '<div class="pager_page">' + iloop + '</div>';
					}
				}
				pgHtml += '<input type="button" class="pager_next"'
				        + ( AcceptRealAchievementListData['pageInfo']['currentPage'] == AcceptRealAchievementListData['pageInfo']['maxPage'] ? ' disabled ' : '' )
				        + '><input type="button" class="pager_tolast"'
				        + ( AcceptRealAchievementListData['pageInfo']['currentPage'] == AcceptRealAchievementListData['pageInfo']['maxPage'] ? ' disabled ' : '' )
				        + '></div>';
				$("#tb_order_list_pager .pager_centerbox").html( pgHtml );
				
				$("#tb_order_list_pager .pager_centerbox .pager_totop").click( function() {
					 AcceptRealAchievementListData['pageInfo']['currentPage'] = 1;
					 myOrderListWin.listRetrieve();
				} );
				
				$("#tb_order_list_pager .pager_centerbox .pager_prev").click( function() {
					 AcceptRealAchievementListData['pageInfo']['currentPage'] -= 1;
					 myOrderListWin.listRetrieve();
				} );
				
				$("#tb_order_list_pager .pager_centerbox .pager_page").click( function() {
					 AcceptRealAchievementListData['pageInfo']['currentPage'] = parseInt( $(this).text() );
					 myOrderListWin.listRetrieve();
				} );
				
				$("#tb_order_list_pager .pager_centerbox .pager_next").click( function() {
					 AcceptRealAchievementListData['pageInfo']['currentPage'] += 1;
					 myOrderListWin.listRetrieve();
				} );
				
				$("#tb_order_list_pager .pager_centerbox .pager_tolast").click( function() {
					 AcceptRealAchievementListData['pageInfo']['currentPage'] = AcceptRealAchievementListData['pageInfo']['maxPage'];
					 myOrderListWin.listRetrieve();
				} );
				
				//***** ページャー右の件数表示 *****
				var stCnt = ( AcceptRealAchievementListData['pageInfo']['currentPage'] - 1 ) * AcceptRealAchievementListData['pageInfo']['dataCountPerPage'] + 1 ;
				var edCnt = AcceptRealAchievementListData[ 'pageInfo' ]['currentPage'] * AcceptRealAchievementListData[ 'pageInfo' ]['dataCountPerPage'] ;
				edCnt = edCnt > AcceptRealAchievementListData[ 'pageInfo' ]['dataCountAll'] ? AcceptRealAchievementListData[ 'pageInfo' ]['dataCountAll'] : edCnt;
				var infoHtml = stCnt + '-' + edCnt + '件／' + AcceptRealAchievementListData[ 'pageInfo' ]['dataCountAll'] + "件" ;
				$("#tb_order_list_pager .pager_info").html( infoHtml ); 
				
				//***** 初期検索終了フラグをON *****
				$( "#loadingBox").css( "transform" , "rotate(0deg)" );
				$( "#loadingBox").css( "transition" , "transform 2s" );
				
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
		schWinOpen( "supplier" , "#dialog_window_div" , setSupplierName ,'SupplierSearch.html');
	});
	
	// 個別契約番号ボタンクリックイベント設定
	$("#approvalSch01").click( function() {
		schWinOpen( "approval" , "#dialog_window_div" , setApprovalName ,'WBSSearch.html');
	});

	// TODO: WBSボタンクリックイベント設定
	$("#approvalSch02").click( function() {
		schWinOpen( "WBS" , "#dialog_window_div" , setApprovalName , 'WBSSearch.html');
	});
	// 詳細条件ボタンクリックイベント設定
	$("#btn_accordion01").click( clickAccordionBtn );
	
	// 検索ボタンクリックイベント設定
	$("#btn_list_sch").click( clickSearchBtn );
	
	// クリアボタンクリックイベント設定
	$("#btn_p_clear").click( clickClearBtn );
	
	// 一覧初期化
	myOrderListWin.initTable();
	
	//监听子画面的值，动作；
	//此处可以拿到子画面的message,并关闭子画面弹框
	window.addEventListener('message',function(e){
		//关闭弹框
		$('.ui-dialog div').dialog("close");
		//获取data
		let data = e.data;
		consoleLog(data);
		var xx = data.datalist;
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
	//TODO:15/50/100件的表示
	$(".torimotoru").mousedown(function(){
		consoleLog('asdfjeeigjeorg')
	})

	consoleLog( "screen MyORderList init execute end." );
});


