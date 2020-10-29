var clickAccordionBtn01 = function () {
	consoleLog("clickAccordionBtn execute start.");

	if ($("#btn_accordion001").hasClass("btn_plus")) { // アコーディオンが閉じている
		$("#btn_accordion001").addClass("btn_minus");
		$("#btn_accordion001").removeClass("btn_plus");

		$("#win_accordion001").addClass("ac01_sc_height");
		$("#win_accordion001").slideDown("slow");
		$("#win_accordion001").removeClass("ac01_sc_height");
	} else { // アコーディオンが開いている
		$("#btn_accordion001").addClass("btn_plus");
		$("#btn_accordion001").removeClass("btn_minus");

		$("#win_accordion001").slideUp("slow");
	}

	consoleLog("clickAccordionBtn execute end.");
}

var clickAccordionBtn02 = function () {
	consoleLog("clickAccordionBtn execute start.");

	if ($("#btn_accordion002").hasClass("btn_plus")) { // アコーディオンが閉じている
		$("#btn_accordion002").addClass("btn_minus");
		$("#btn_accordion002").removeClass("btn_plus");

		$("#win_accordion002").addClass("ac01_sc_height");
		$("#win_accordion002").slideDown("slow");
		$("#win_accordion002").removeClass("ac01_sc_height");
	} else { // アコーディオンが開いている
		$("#btn_accordion002").addClass("btn_plus");
		$("#btn_accordion002").removeClass("btn_minus");

		$("#win_accordion002").slideUp("slow");
	}

	consoleLog("clickAccordionBtn execute end.");
}

var clickAccordionBtn03 = function () {
	consoleLog("clickAccordionBtn execute start.");

	if ($("#btn_accordion003").hasClass("btn_plus")) { // アコーディオンが閉じている
		$("#btn_accordion003").addClass("btn_minus");
		$("#btn_accordion003").removeClass("btn_plus");

		$("#win_accordion003").addClass("ac01_sc_height");
		$("#win_accordion003").slideDown("slow");
		$("#win_accordion003").removeClass("ac01_sc_height");
	} else { // アコーディオンが開いている
		$("#btn_accordion003").addClass("btn_plus");
		$("#btn_accordion003").removeClass("btn_minus");

		$("#win_accordion003").slideUp("slow");
	}

	consoleLog("clickAccordionBtn execute end.");
}

var clickAccordionBtn04 = function () {
	consoleLog("clickAccordionBtn execute start.");

	if ($("#btn_accordion004").hasClass("btn_plus")) { // アコーディオンが閉じている
		$("#btn_accordion004").addClass("btn_minus");
		$("#btn_accordion004").removeClass("btn_plus");

		$("#win_accordion004").addClass("ac01_sc_height");
		$("#win_accordion004").slideDown("slow");
		$("#win_accordion004").removeClass("ac01_sc_height");
	} else { // アコーディオンが開いている
		$("#btn_accordion004").addClass("btn_plus");
		$("#btn_accordion004").removeClass("btn_minus");

		$("#win_accordion004").slideUp("slow");
	}

	consoleLog("clickAccordionBtn execute end.");
}

var clickAccordionBtn05 = function () {
	consoleLog("clickAccordionBtn execute start.");

	if ($("#btn_accordion005").hasClass("btn_plus")) { // アコーディオンが閉じている
		$("#btn_accordion005").addClass("btn_minus");
		$("#btn_accordion005").removeClass("btn_plus");

		$("#win_accordion005").addClass("ac01_sc_height");
		$("#win_accordion005").slideDown("slow");
		$("#win_accordion005").removeClass("ac01_sc_height");
	} else { // アコーディオンが開いている
		$("#btn_accordion005").addClass("btn_plus");
		$("#btn_accordion005").removeClass("btn_minus");

		$("#win_accordion005").slideUp("slow");
	}

	consoleLog("clickAccordionBtn execute end.");
}

$(function () {
	consoleLog("screen MyORderList init execute start.");
	// 仕入先検索ボタンクリックイベント設定
	$("#supplierSch01").click(function () {
		schWinOpen("supplier", "#dialog_window_div", setSupplierName);
	});

	// 稟議検索ボタンクリックイベント設定
	$("#approvalSch01").click(function () {
		schWinOpen("approval", "#dialog_window_div", setApprovalName);
	});

	// 詳細条件ボタンクリックイベント設定
	$("#btn_accordion01").click(clickAccordionBtn);
	$("#btn_accordion001").click(clickAccordionBtn01);

	// 詳細条件ボタンクリックイベント設定
	$("#btn_accordion002").click(clickAccordionBtn02);

	// 詳細条件ボタンクリックイベント設定
	$("#btn_accordion003").click(clickAccordionBtn03);


	// 詳細条件ボタンクリックイベント設定
	$("#btn_accordion004").click(clickAccordionBtn04);
	// 詳細条件ボタンクリックイベント設定
	$("#btn_accordion005").click(clickAccordionBtn05);
	// 検索ボタンクリックイベント設定
	$("#btn_list_sch").click(clickSearchBtn);

	// クリアボタンクリックイベント設定
	$("#btn_p_clear").click(clickClearBtn);

	// 一覧初期化
	myOrderListWin.initTable();

	consoleLog("screen MyORderList init execute end.");
});

//获取传来的表格的某一行的值并添加到本画面
values = window.location.href.split('#')[1];
codetype = decodeURI(values, 'utf-8');
valueFromOutside = codetype.split(',');
consoleLog("valueFromOutside" + valueFromOutside);
//举个例子而已，收入番号取到值：
if (valueFromOutside[0] == 'AcceptRealAchievementList') {
	consoleLog("valueFromOutside" + valueFromOutside[2]);
	if (valueFromOutside[2] == 'true') {
		$('#applicationClassification').val('受入取消');
	}
	$('#orderType').val(valueFromOutside[3]);
	$('#orderResponser').val(valueFromOutside[5]);
	$('#orderResponseDepartment').val(valueFromOutside[6]);
};
if (valueFromOutside[0] == 'OrderList') {
	consoleLog("valueFromOutside" + valueFromOutside[2]);
	if (valueFromOutside[2] == 'true') {
		$('#applicationClassification').val('受入');
	}
	$('#orderType').val(valueFromOutside[3]);
	$('#subjectName').val(valueFromOutside[4]);
	$('#orderResponser').val(valueFromOutside[5]);
	$('#orderResponseDepartment').val(valueFromOutside[6]);
	$('#OrderNumber').val(valueFromOutside[2]);
};

//获取传来的表格的某一行的值并添加到本画面
values = window.location.href.split('#')[1];
codetype = decodeURI(values, 'utf-8');
valueFromOutside = codetype.split(',');
consoleLog("valueFromOutside" + valueFromOutside);
//举个例子而已，收入番号取到值：
if (valueFromOutside[0] == 'AcceptRealAchievementList') {
	consoleLog("valueFromOutside" + valueFromOutside[2]);
	$('#OrderNumber').val(valueFromOutside[2]);
	$('#orderType').val(valueFromOutside[3]);
	$('#orderResponser').val(valueFromOutside[5]);
	$('#orderResponseDepartment').val(valueFromOutside[6]);
}