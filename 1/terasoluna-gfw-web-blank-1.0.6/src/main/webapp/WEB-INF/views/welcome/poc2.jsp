<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <style type="text/css">
            .container {
                font-size: 12px;
                margin-top: 80px;
                width: 1000px;
            }
            /* skin tables */
            
            table thead tr th a {
                color: black;
            }
            
            table tfoot tr td {
                text-align: center;
            }
            
            tbody tr td,
            td {
                background: #ffffff;
            }
            
            .tdcolor,
            .tdcolor1,
            .tdcolor2 {
                background: #f2f2f2;
                border-radius: 6px;
            }
            
            .table_A table td {
                border: 0.1px solid rgb(131, 131, 131);
            }
            
            thead th {
                background: #ffffff;
            }
            
            tfoot tr th {
                font-weight: normal;
            }
            
            table {
                border-color: #ffffff;
                border-width: 1px 1px 1px 1px;
                border-style: solid;
            }
            
            label.fileName {
                width: 15%;
            }
            
            div.container_title {
                width: 990px;
                height: 135px;
                display: inline-block;
                padding-left: 10px;
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
            
            label.star {
                color: red;
                position: relative;
            }
            
            div.questionIcon {
                float: inline-end;
                width: 20px;
                height: 15px;
                /* margin: -30px 10px 0px -10px; */
                border-radius: 50% / 50%;
                display: inline-block;
                text-align: center;
                color: #ffffff;
                font-size: 10px;
                font-weight: bold;
                background: rgb(157, 195, 230);
                border-color: rgb(46, 117, 182);
            }
            
            tbody tr:nth-child(n) td {
                background: #ffffff;
                border: 0.1px solid rgb(131, 131, 131);
            }
            
            button,
            input {
                height: 30px;
                width: 130px;
                border: 0.5px soild rgb(131, 131, 131);
                border-radius: 6px;
                background: #f2f2f2;
                box-shadow: 0 0 5px rgb(131, 131, 131);
            }
            
            button:hover,
            input:hover {
                border: 0.5px solid #13adf5;
                box-shadow: 0 0 5px #03a9f4;
                background: #c7dce6;
            }
            
            .changeButton {
                width: 50px;
                position: absolute;	
            }
            
            .showTableButton {
                width: 40px;
                height: 20px;
				position: absolute;
				margin-left: 55px;
            }
            
            .panel {
                /* TODO:
                width: 1200px;
                border: 1px solid black;
                top: 0px;
                left: 0px;
                position: absolute;
                height: 800px; */
                margin: 0 auto;
                width: 1000px;
            }
        </style>
    </head>
    <div class="panel">
        <div style="height: 36px; width: 1900px; background: #002060; position: absolute; left: 0px; top:0px;color: white; font-size: 20px; line-height: 36px;">
            <strong>次期発注管理システム（仮称）</strong>
        </div>
        <div class="container">
            <div class="container_title">
                <%-- 	<%for (int titleCount = 1;titleCount<8;titleCount++){  %>
                    <div class="title_1" text="<%= titleCount %>"></div>
                    <%} %> --%>
                        <div class="titleTr">
                            <div class="title_1">1</div>
                            <div class="trigel"></div>
                            <div class="titleNameList">ガバナンス確認</div>
                        </div>
                        <div class="titleTr">
                            <div class="title_1">2</div>
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
                            <div class="title_1 titleSelected">6</div>
                            <div class="trigel"></div>
                            <div class="titleNameList">内容確認</div>
                        </div>
                        <div class="titleTr">
                            <div class="title_1">7</div>
                            <div class="titleNameList">登録完了</div>
                        </div>

            </div>
            <script type="text/javascript">
                //页面初始加载
                window.onload = function() {
                    //get urllist[1].value from poc1
                    values = window.location.href.split('#')[1];
                    xx=decodeURI(values,'utf-8');
                    valuefromOutside = xx.split(',');
                    if (valuefromOutside[0] === 'poc1') {
                        for (i = 1; i < valuefromOutside.length; i++) {
                          	if(i==5){
                                if(valuefromOutside[5]=='false'){
                                	document.getElementsByClassName('inputValue')[5].innerHTML='200';
                                	document.getElementsByClassName('inputValue')[4].innerHTML='印紙なし';
                                }
                                else if(valuefromOutside[5]=='true'){
                                	document.getElementsByClassName('inputValue')[4].innerHTML='印紙あり';
                                }
                            }
                          	else if(i==6){
                                document.getElementsByClassName('inputValue')[6].innerHTML = '〇〇〇〇〇.pdf';
                            }
                            
                           	else if(i==7){
                                if(valuefromOutside[8]==""|| valuefromOutside[8]=='' || valuefromOutside[8]===""){
                    				document.getElementsByClassName('inputValue')[7].parentNode.innerHTML='添付した契約書のコメント';
                                }
                            }
                           	else{
                            		document.getElementsByClassName('inputValue')[i - 1].innerHTML = valuefromOutside[i];

                               	}
                        }
                    } else if (valuefromOutside[0] == 'poc3') {
                        document.getElementsByClassName('inputValue')[0].innerHTML = valuefromOutside[1];
                        document.getElementsByClassName('inputValue')[3].innerHTML = valuefromOutside[2];
						document.getElementsByClassName('inputValue')[7].parentNode.innerHTML='添付した契約書のコメント';
						document.getElementsByClassName('inputValue')[6].innerHTML = '〇〇〇〇〇.pdf';
                    }
                    else{
						document.getElementsByClassName('inputValue')[7].parentNode.innerHTML='添付した契約書のコメント';
						document.getElementsByClassName('inputValue')[6].innerHTML = '〇〇〇〇〇.pdf';
                        }
                }

                function returnBackPage(){
                	values = window.location.href.split('#')[1];
                    xx=decodeURI(values,'utf-8');
                    valuefromOutside = xx.split(',');
					if(valuefromOutside[0]=='poc3'){
						window.location.href='./poc3?#' + 'poc2';
						}
					else if(valuefromOutside[0]=='poc1'){
						window.location.href='./poc1?#' + 'poc2';
						}
					else{
						//do nothing
						}
                    }
            </script>
            <div>
                <div style="height:50px;width:1000px;margin-top:-40px;margin-bottom:20px;">
                    <div style="height:50px;width:20px;background:rgb(0,112,192);float:left">
                    </div>
                    <div style="height:50px;width:980px;background:#f2f2f2;float:left;font-size:20px;line-height:50px;font-weight:bold">
                        発注内容確認
                    </div>
                </div>
                <div style="margin:10px 0px 30px 0px; ">
                    <!-- or this kind of writing is also fine: #name=join&&age=12&&[{\'sex\':\'women\'}]-->
                    <!-- window.location.href='http://localhost:8080/terasoluna-tourreservation-web/tours?form#name=join#age=12#[{\'sex\':\'women\'}] -->
                    <button class="returnBackPageButton" onclick="returnBackPage()">戻る</button>
                    <button>一時保存</button>
                    <button>発注登録</button>
                    <button>修正</button>
                    <input style="float:right" type="button" value="発注書プレビュー" />
                </div>

                <div style="height:50px;width:1000px;background: rgb(143,170,220);float:left;font-size:20px;line-height:50px;margin-bottom:10px;font-weight:bold">
                    発注基本内容
                    <div style="float:right;width:95px;height:30px;margin:15px 5px;">
                        <button class="changeButton" align="right" style="background: rgb(46,117,182);border:0px;color:#ffffff;border-radius:6px;height: 20px;">修正</button>
                        <button class="showTableButton" align="right" onclick="hiddenTable()" style="background: rgb(46,117,182);border:0px;border-radius:6px;">
                        <div style="font-weight:10px;font-size: 10px;background:#ffffff;height:2px;width:20px;padding:2px;background: #ffffff;"></div>
                    </button>
                    </div>
                    <script type="text/javascript">
                        function hiddenTable() {
                            x1 = document.getElementsByClassName("poc2_table");
                            console.log("x1" + x1);
                            if (x1[0].style.display == "block") {
                                x1[0].style.display = "none";
                            } else if (x1[0].style.display == "none") {
                                x1[0].style.display = "block";
                            }
                        }
                        //window.location.href='http://localhost:8080/terasoluna-tourreservation-web/poctest
                    </script>
                </div>

                <div class="table_A" style="width:1000px">
                    <table border="1" class="poc2_table" style="display:block">
                        <tr>
                            <td style="background:#DAE3F3;width:20%; font-size:16px;" colspan="2">発注番号</td>
                            <td>
                                <div class="inputValue tdcolor"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="background:#DAE3F3;width:200px; font-size:16px;" colspan="2">年度</td>
                            <td style="width:790px">
                                <div class="inputValue tdcolor"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="background:#DAE3F3;width:200px; font-size:16px;" colspan="2">起案日</td>
                            <td style="width:790px">
                                <div class="inputValue tdcolor"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="background:#DAE3F3;width:200px; font-size:16px;" colspan="2">
                                件名<label class="star" style="margin-left:100px;">*</label>
                                <div class="questionIcon">?</div>
                            </td>
                            <td style="width:790px">
                                <div class="inputValue tdcolor"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="background:#DAE3F3;width:200px; font-size:16px;" colspan="2">
                                印紙貼付<label class="star" style="margin-left:68px;">*</label>
                                <div class="questionIcon">?</div>
                            </td>
                            <td style="width:790px">
                                <div class="inputValue tdcolor"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="background:#DAE3F3;width:200px; font-size:16px;" colspan="2">
                                印紙額<label class="star" style="margin-left:84px;">*</label>
                                <div class="questionIcon">?</div>
                            </td>
                            <td style="width:790px">
                                <div class="inputValue tdcolor1"></div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="background:#DAE3F3;width:20%; font-size:16px;">
                                発注書<label class="star" style="margin-left:84px;">*</label>
                                <div class="questionIcon">?</div>
                            </td>
                            <td style="width:30%;display : inline-block; font-size:16px;">
                                <a class="poc2_pdfLinkName" style=''>
                                    <div class="inputValue tdcolor2" style="color: deepskyblue"></div>
                                </a>
                            </td>

                            <td colspan="1" style="width:68.5%;display : inline-block; font-size:16px;">
          
                            <div class="inputValue tdcolor" ></div>
                            </td>
                        </tr>
                    </table>

                </div>
                <div style="margin:10px 0px;">
                    <button onclick="returnBackPage()">戻る</button>
                    <button>一时保存</button>
                    <button>発注登録</button>
                    <button>修正</button>
                    <input style="float:right" type="button" value="発注書プレビュー" />
                </div>
            </div>

        </div>
    </div>

    </html>