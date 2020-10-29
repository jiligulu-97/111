// --------　番号検索
$(function() {
    // 基本契約表示非表示イベント設定
    $("#yes").click( function() {
      $("#hide1").css('display', 'table-row');
      $("#hide2").css('display', 'table-row');
      $("#hide3").css('display', 'none');
    });
    $("#no").click( function() {
      $("#hide1").css('display', 'none');
      $("#hide2").css('display', 'none');
      $("#hide3").css('display', 'block');
      $("#hide3").css('color', 'red');
    });
    // 契約書検索ボッタンクリックイベント設定
    $("#keiyakushoSch01").click(function() {
		 $("#dialog_div_keiyakushoSch01").dialog({
			modal:true,
			title:"基本契約番号検索",
			buttons: {
			"確認": function() {
        var basicAgreementNumSchVar = $('#basicAgreementNumSch').val();
        $('#basicAgreementNum').val(basicAgreementNumSchVar);
				$(this).dialog("close");
                },
            }
      });
    });
    // 稟議検索ボッタンクリックイベント設定
    $("#ringiSch01").click(function() {
		 $("#dialog_div_ringiSch01").dialog({
            modal:true,
            title:"予算稟議番号検索",
			buttons: {
			"確認": function() {
        var budgetApprovalNumSchVar = $('#budgetApprovalNumSch').val();
        $('#budgetApprovalNum').val(budgetApprovalNumSchVar);
				$(this).dialog("close");
                },
            }
		 });
    });
    // 法務相談検索ボッタンクリックイベント設定
    $("#houmuSch01").click(function() {
		 $("#dialog_div_houmuSch01").dialog({
			modal:true,
			title:"法務相談No検索",
			buttons: {
			"確認": function() {
        var legalAdviceNumSchVar = $('#legalAdviceNumSch').val();
        $('#legalAdviceNum').val(legalAdviceNumSchVar);
				$(this).dialog("close");
                },
            }
		 });
    });
  });    
    
  
//获取传来的表格的某一行的值并添加到本画面
    values = window.location.href.split('#')[1];
    codetype = decodeURI(values,'utf-8');
    valueFromOutside = codetype.split(',');
    consoleLog("valueFromOutside"+valueFromOutside);
    //举个例子而已，收入番号取到值：
    if(valueFromOutside[0] =='OrderList'){
        consoleLog("valueFromOutside"+valueFromOutside[2]);
        if(valueFromOutside[2] == 'true'){
            $('#applicationClassification').val('修正');}
     $('#orderType').val(valueFromOutside[3]);
     $('#orderResponser').val(valueFromOutside[5]);
     $('#orderResponseDepartment').val(valueFromOutside[6]);
    };