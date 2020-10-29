<script type="text/javascript" src="My97DatePicker/WdatePicker.js"></script>
<style type="text/css">
	table{
		border-collapse:collapse;
	}
	table tr{
		height:40px;
	}
	table tr td{
		border:solid 1px black !important;
		padding-left:5px;
	}
	.firstTd{
		background:#DAE3F3 !important;
		font-size:18px;
		padding-left:10px !important;
	}
	.secondTd{
		background:white !important;
	}
	button{
		border-radius: 6px;
		border-width:1px !important;
		box-shadow: 3px 3px 3px #888888;
	}
	div.container_title {
		width: 990px;
		/* height: 135px; */
		display: inline-block;
		padding-left: 35px;
		margin-top:80px;
	}
	div.title_1 {
	    width: 60px;
	    height: 45px;
	    margin: -30px 10px 0px -10px;
	    background: #f2f2f2;
	    border-radius: 50% / 50%;
	    border: solid 1px rgb(131, 131, 131);
	    display: inline-block;
	    text-align: center;
	    font-size: 26px;
	    font-weight: bold;
	}
	div.titleNameList {
	    width: 100px;
	    height: 35px;
	    text-align: center;
	    font-size: 14px;
	    font-weight: bold;
	    display: block;
	    padding-top: 10px;
	    margin-left: -25px;
	}
	div.titleTr {
	    margin: 0;
	    padding: 0;
	    border: 0;
	    font-weight: inherit;
	    font-style: inherit;
	    font-size: 100%;
	    font-family: inherit;
	    vertical-align: baseline;
	    display: inline-block;
	}
	div.titleSelected {
		background: rgb(157, 195, 230);
		border-color: rgb(46, 117, 182);
	}
	div.trigel {
		width: 0;
		height: 0;
		border-color: transparent transparent transparent rgb(126, 126, 126);
		display: block;
		float: right;
		margin: -3px 31px 0px 22px;
		border-width: 10px 0px 10px 30px;
		border-style: solid;
	}
	div.trigel::after {
		content: "";
		position: absolute;
		top: 0px;
		left: -28px;
		width: 0;
		height: 0;
		border-width: 10px 0px 10px 30px;
		border-style: solid;
		border-color: transparent transparent transparent rgb(191, 191, 191);
	}
	#inputOfList1,#inputOfList2,#inputOfList3 {
		height:25px;
		width:250px;
		margin:0;
		cursor:pointer;
		background:#F2F2F2;
		border:0.5px solid;
		border-radius:6px;
	}
</style>
<script type="text/javascript">
	function ToPoc2() {
		//check
		if (document.getElementById("jianMing").value == "") {
			document.getElementById("checkLabel").style.display = "block";
			return;
		} else {
			document.getElementById("checkLabel").style.display = "none";
		}
		
		//get values 
		tdInputList = document.getElementsByClassName("secondTd2");
		x0 = tdInputList[0].childNodes[1].value;
		// give values to poc2
		list = new Array();
		for (i = 0; i < tdInputList.length; i++) {
		    list[i] = tdInputList[i].childNodes[1].value + "";
		    console.log('list_'+i+':'+list[i]);
		    if (list[i] == 'undefined') {
		        list[i] = "";
		    }
		}
		list[4]=document.getElementsByClassName("radioPaperHave")[0].checked;
		if(list[4]=="false"){list[5]='';}
		list[6]='';
		list[8]=document.getElementsByClassName("paperOthers")[0].checked;
		
		window.location.href = './poc2?#' + 'poc1,' + encodeURI(list);
    }

	function tip1Change(val){
		if (val.length == 0) {
			document.getElementById("tip1").style.display = "inline";
			document.getElementById("jianMing").style.background = "#FF9999";
		} else {
			document.getElementById("tip1").style.display = "none";
			document.getElementById("jianMing").style.background = "white";
		} 
	}
               
    function textarea1Change(element){
    	element.style.height = 'auto';
    	element.scrollTop = 0; //防抖动
    	element.style.height = element.scrollHeight > 70 ? element.scrollHeight + 5 +'px': 70 + 'px';
    	document.getElementById('laveCount2').innerHTML = 250 - element.value.length;
    }    

    function fileNameInputChange(path){
		if (path != "") {
			var arr = path.split("\\");
			document.getElementById("fileNameInput").value=arr[arr.length-1];
		}
	}

	function fileNameFieldChange(){
		document.getElementById("fileNameField").style.display="block";
		document.getElementById("fileTextField").style.display="none";
		document.getElementById('fileField').click();
	}

	function fileDrop(event){
		event.preventDefault();
		document.getElementById("fileNameField").style.display="block";
		document.getElementById("fileTextField").style.display="none";
		document.getElementById("fileNameInput").value=event.dataTransfer.files[0].name;
	}
</script>
  
<div style="width:1000px;margin:0 auto">
	<div id="title" style="height: 36px; width: 1920px; background: #002060; position: absolute; left: 0px; color: white; font-size: 20px; line-height: 36px;">
		<strong onclick="confirm('入力内容は保存されません。よろしいですか？')">次期発注管理システム（仮称）</strong>
		<img src="resources/images/png1.png" height="36px" align="right" style="margin-right:20px"/>
	</div>
	
	<div class="container_title">
		<div class="titleTr">
            <div class="title_1">1</div>
            <div class="trigel"></div>
            <div class="titleNameList">ガバナンス確認</div>
        </div>
        <div class="titleTr">
            <div class="title_1 titleSelected">2</div>
            <div class="trigel"></div>
            <div class="titleNameList">基本内容入力</div>
        </div>
        <div class="titleTr">
            <div class="title_1">3</div>
            <div class="trigel"></div>
            <div class="titleNameList">明細内容入力</div>
        </div>
        <div class="titleTr">
            <div class="title_1">4</div>
            <div class="trigel"></div>
            <div class="titleNameList">稟議内容入力</div>
        </div>
        <div class="titleTr">
            <div class="title_1">5</div>
            <div class="trigel"></div>
            <div class="titleNameList">承認ルート入力</div>
        </div>
        <div class="titleTr">
            <div class="title_1">6</div>
            <div class="trigel"></div>
            <div class="titleNameList">内容確認</div>
        </div>
        <div class="titleTr">
            <div class="title_1">7</div>
            <div class="titleNameList">登録完了</div>
        </div>
    </div>
	
	<div style="height:35px;">
		<div style="height:35px;width:10px;background:#0070C0;float:left">
		</div>
		<div style="height:35px;width:990px;background:#F2F2F2;float:left;font-size:18px;line-height:35px;">
			発注基本内容入力
		</div>
	</div>
	
	<div style="margin:20px 0 10px 0">
		<button style="width:100px;">戻る</button>&nbsp;
		<button style="width:100px;">一時保存</button>&nbsp;
		<button style="width:100px;">次へ</button>&nbsp;
		<button style="width:150px;" onclick="ToPoc2()">発注内容確認画面へ</button>
	</div>
	
	<label id="checkLabel" style="color:red;margin-bottom:10px;display:none;"><strong>×××の場合は、×××を入力してください。</strong></label>
	
	<table border="1" style="border-color:black">
		<tr>
			<td class="firstTd" colspan="2" width="40%">
				発注番号
				<img src="resources/images/png3.png" align="right" title="ヘルプ内容を表示します。"/>
			</td>
			<td class="secondTd2">
				<input type="text" style="background:#F2F2F2;height:25px;width:580px;border-radius:6px;border:1px solid white;">
			</td>
		</tr>
		<tr>
			<td class="firstTd" colspan="2">年度</td>
			<td class="secondTd secondTd2">
				<select style="height:25px;width:580px;margin:0;border-radius:6px;">
				  <option value ="2020">2020</option>
				  <option value ="2021">2021</option>
				  <option value="2022">2022</option>
				</select>
			</td>
		</tr>
		<tr>
			<td class="firstTd" colspan="2">起案日</td>
			<td class="secondTd secondTd2">
				<input id="calendar1" type="text" readonly="readonly" onclick="WdatePicker({dateFmt:'yyyy/MM/dd'})"
					style="height:25px;width:130px;float:left;border-radius:6px;margin:5px 0;border-width:0.5px;"/>
				<img src="resources/images/png4.png" onclick="document.getElementById('calendar1').click()" style="height:25px;float:left;margin:5px;"/>
			</td>
		</tr>
		<tr>
			<td class="firstTd" colspan="2">
				件名
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<label style="color:red;"> ＊</label>
			</td>
			<td class="secondTd secondTd2" style="font-size:15px;">
				<input id="jianMing" type="text" placeholder="例）○○○の件" 
					onblur="tip1Change(this.value)" onkeyup="document.getElementById('laveCount1').innerHTML = 100-this.value.length"
					style="height:30px;width:510px;margin:0;border-width:0.5px;border-radius:6px;">
				残<label id="laveCount1">100</label>文字<br/>
				<label id="tip1" style="color: red;display:none;">件名を入力してください。</label>
			</td>
		</tr>
		<tr>
			<td class="firstTd" colspan="2">
				印紙貼付
				<img src="resources/images/png3.png" align="right" title="ヘルプ内容を表示します。"/>
			</td>
			<td class="secondTd secondTd2" style="line-height: 30px;">
				<input class="radioPaperNone" name="印紙" type="radio" value="印紙なし" onclick="document.getElementById('hiddenRow1').style.display='none'"/>&nbsp;印紙なし
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input class="radioPaperHave" name="印紙" type="radio" value="印紙あり"  onclick="document.getElementById('hiddenRow1').style.display='table-row'"/>&nbsp;印紙あり
			</td>
		</tr>
		<tr id="hiddenRow1" style="display:none;">
			<td class="firstTd" colspan="2">
				印紙額
				<img src="resources/images/png3.png" align="right" title="ヘルプ内容を表示します。"/>
			</td>
			<td class="secondTd secondTd2" style="line-height: 30px;">
				<input type="text" placeholder="例）999,999" style="height:25px;width:200px;">
			</td>
		</tr>
		<tr>
			<td class="firstTd" colspan="2">発注書</td>
			<td class="secondTd secondTd2">
				<div id="fileTextField" ondragover="event.preventDefault();"  ondrop="fileDrop(event)">
					ここにドラッグ&ドロップしてください<br/>
					または
					<label style="color:#2BCAFA;" onclick="fileNameFieldChange()">ファイルを選択...</label><br/>
					<label style="color: red">添付ファイルを設定後に　別ウィンドウ/別タブで当システムを開くと　ファイル・データが破損する場合があります。</label>
				</div>
				
				<input id="fileField" type="file" name="fileField" size="28" onchange="fileNameInputChange(this.value)" style="display:none"/>
				<div id="fileNameField" style="display:none;font-size:15px;">
					<input id="fileNameInput" type="text" style="width:250px;background:#F2F2F2;border-width:0.5px;"  onclick="document.getElementById('fileField').click();">
					<button onclick="document.getElementById('fileNameInput').value=''">削除</button><br/>
					<input type="text" onkeyup="document.getElementById('laveCount3').innerHTML = 100-this.value.length"
						style="height:25px;width:510px;margin:3px auto;border-width:0.5px;border-radius:6px;">
					残<label id="laveCount3">100</label>文字<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td class="firstTd" rowspan="2" >発注書</td>
			<td class="firstTd">契約文言</td>
			<td class="secondTd secondTd2" style="font-size:15px;">
				<textarea id="textarea1" onkeyup="textarea1Change(this)" style="height:70px;width:500px;border-radius:10px;"></textarea>
				残<label id="laveCount2">250</label>文字
			</td>
		</tr>
		<tr>
			<td class="firstTd">納入場所</td>
			<td class="secondTd secondTd2">
				<input class="paperFuture" name="印纸" type="radio" value="印纸1" />&nbsp;バンダイナムコ未来研究所
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input class="paperOthers" name="印纸" type="radio" value="印纸2" />&nbsp;その他
			</td>
		</tr>
		<tr>
			<td class="firstTd" colspan="2">承認者1</td>
			<td class="secondTd secondTd2">
				<!-- <select>
				  <option>承認　一郎（チーフ）</option>
				  <option>承認　二郎（アシスタントマネージャー）</option>
				  <option>承認　三郎（マネージャー）</option>
				</select> -->
				<input id="inputOfList1" list="list1">
				<datalist id="list1">
					<option>承認    一郎（チーフ）</option>
					<option>承認    二郎（アシスタントマネージャー）</option>
					<option>承認    三郎（マネージャー）</option>
				</datalist>
			</td>
		</tr>
		<tr>
			<td class="firstTd" colspan="2">承認者2</td>
			<td class="secondTd secondTd2">
				<input id="inputOfList2" list="list2">
				<datalist id="list2">
					<option>承認    一郎（チーフ）</option>
					<option>承認    二郎（アシスタントマネージャー）</option>
					<option>承認    三郎（マネージャー）</option>
				</datalist>
			</td>
		</tr>
		<tr>
			<td class="firstTd" colspan="2">承認者3</td>
			<td class="secondTd secondTd2">
				<input id="inputOfList3" list="list3">
				<datalist id="list3">
					<option>承認    一郎（チーフ）</option>
					<option>承認    二郎（アシスタントマネージャー）</option>
					<option>承認    三郎（マネージャー）</option>
				</datalist>
			</td>
		</tr>
	</table>
	
	<div style="margin:20px 0">
		<button style="width:100px">戻る</button>&nbsp;
		<button style="width:100px">一時保存</button>&nbsp;
		<button style="width:100px">次へ</button>&nbsp;
		<button style="width:150px" onclick="ToPoc2()">発注内容確認画面へ</button>
	</div>
	
	<div ><a href="#title"><img src="resources/images/png2.png" align="right"/></a></div>
</div>