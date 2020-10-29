<head>
    <style type="text/css">
        table {
            border-collapse: collapse;
            height: 24px;
            line-height: 24px;
            text-align: center;
        }
        
        table tr td {
            border: solid 1px black !important;
        }
        
        tr {
            font-size: 14px;
        }
        
        td {
            font-size: 12px;
        }
        
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
        
        input[type="number"] {
            -moz-appearance: textfield;
        }
    </style>

</head>

<div class="container">
    <div>
        <div style="height: 36px; width: 1920px; background: #002060; position: absolute; left: 0px; color: white; font-size: 20px; line-height: 36px;">
            <strong>次期発注管理システム（仮称）</strong>
            <img src="resources/images/png1.png" height="36px" align="right" style="margin-right:20px" />
        </div>
        <div style="height: 98px; width: 1000px; position: relative; left: 460px;">
            <div style="height: 38px; width: 10px; background: blue; float: left; margin-top: 50px;">
            </div>
            <div style="height: 38px; width: 990px; background: grey; float: left; font-size: 20px; line-height: 38px; margin-top: 50px;">
                <strong>発注一覧</strong></div>
        </div>
        <div style="height: 200px; width: 570px;font-size: 16px; position: relative; left: 675px;">
            <table>
                <tr>
                    <td style="background: #DAE3F3; width: 240px">発注タイプ</td>
                    <td>
                        <div style="position: relative;">
                            <span style="margin-left: 100px; width: 18px; overflow: hidden;">
								<select id="orderType" name="orderType" style="width: 230px; margin-left: -100px" onchange="this.parentNode.nextSibling.value=this.value">
									<option value=""></option>
									<option value="開発委託・宣伝">開発委託・宣伝</option>
									<option value="一般購買">一般購買</option>
									<option value="月額固定費">月額固定費</option>
							</select>
							</span><input id="ordInbox" style="width: 210px; position: absolute; left: 0px;" placeholder="選択してください">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="background: #DAE3F3">発注番号</td>
                    <td><input type="number" id="orderNo" name="orderNo" style="width:140px" placeholder="例）9999999999"></td>
                </tr>
                <tr>
                    <td style="background: #DAE3F3">発注担当者</td>
                    <td><input type="text" id="orderCharger" name="orderCharger" style="width:230px" placeholder="名前の一部を入力すると候補を表示します"></td>
                </tr>
                <tr>
                    <td style="background: #DAE3F3">仕入先</td>
                    <td><input type="text" id="vendor" name="vendor" style="width:230px"></td>
                </tr>
                <tr>
                    <td style="background: #DAE3F3">フリーワード</td>
                    <td><input type="text" id="freeWord" name="freeWord" style="width:230px"></td>
                </tr>
                <tr>
                    <td style="background: #DAE3F3">伝票状況</td>
                    <td>
                        <div style="position: relative;">
                            <span style="margin-left: 100px; width: 18px; overflow: hidden;">
								<select id="voucherStatus" name="voucherStatus" style="width: 230px; margin-left: -100px" onchange="this.parentNode.nextSibling.value=this.value">
									<option value=""></option>
									<option value="一時保存">一時保存</option>
									<option value="差し戻し">差し戻し</option>
									<option value="承認・決裁待ち">承認・決裁待ち</option>
									<option value="決裁済み">決裁済み</option>
									<option value="否決">否決</option>
							</select>
							</span><input id="voucherInbox" style="width: 210px; position: absolute; left: 0px;" placeholder="選択してください">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="background: #DAE3F3">受入状況</td>
                    <td>
                        <div style="position: relative;">
                            <span style="margin-left: 100px; width: 18px; overflow: hidden;">
								<select id="acceptanceStatus" name="acceptanceStatus" style="width: 230px; margin-left: -100px" onchange="this.parentNode.nextSibling.value=this.value">
									<option value=""></option>
									<option value="はい">はい</option>
									<option value="ない">ない</option>
							</select>
							</span><input id="acceptanceInbox" style="width: 210px; position: absolute; left: 0px;" placeholder="選択してください">
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div style="height: 25px; width: 500px;position: relative; left: 710px;">
            <button onclick="searchByCondition()">検索</button>
            <button onclick="clearCondition()">クリア</button>
            <input type="button" style="float: right" value="CSV出力" onclick="window.location.href='./download'"></input>
        </div>

        <div style="height: 30px; width: 1000px; position: relative; left: 270px; font-size: 10px;"> 表示件数
            <select id="numSelect" name="numSelect" onchange="pieceChange(this.value)">
				<option value="15">15件</option>
				<option value="50">50件</option>
				<option value="100">100件</option>
			</select>
        </div>

        <div style="height: 350px; width: 1380px; position: relative; left: 270px; top: 20px;">
            <table id="resultTable" border="1" style="table-layout:fixed">
                <colgroup>
                    <col width=100px>
                    <col width=110px>
                    <col width=160px>
                    <col width=100px>
                    <col width=160px>
                    <col width=80px>
                    <col width=200px>
                    <col width=135px>
                    <col width=85px>
                    <col width=50px>
                    <col width=50px>
                    <col width=50px>
                    <col width=50px>
                    <col width=50px>
                </colgroup>
                <thead>
                    <tr>
                        <th>発注番号</th>
                        <th>伝票状況</th>
                        <th>WF更新日</th>
                        <th>発注タイプ</th>
                        <th>件名</th>
                        <th>発注担当者</th>
                        <th>発注担当部署</th>
                        <th>仕入先</th>
                        <th>注文日</th>
                        <th>受入</th>
                        <th>修正</th>
                        <th>取戻</th>
                        <th>再利用</th>
                        <th>削除</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach items="${searchResult}" var="group">
                        <tr onclick="bgChange(this)">
                            <td class="tdOrdNum"><span onclick="ToPoc2(${group.orderNum}, '${group.orbName}')" style="color:#00E5EE">${group.orderNum}</span></td>
                            <td>${group.voucherStatus}</td>
                            <td>${group.wfUpdate}</td>
                            <td>${group.orderType}</td>
                            <td>
                                <div title=${group.orbName} style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; width: 160px">${group.orbName}</div>
                            </td>
                            <td>${group.orderCharger}</td>
                            <td>
                                <div title=${group.orderDeparter} style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; width: 200px">${group.orderDeparter}</div>
                            </td>
                            <td>${group.vendor}</td>
                            <td>${group.orderDate}</td>
                            <c:choose>
                                <c:when test="${group.acceptFlag == true}">
                                    <td><img src="resources/images/Acpt1.png" height="18px" align="right" style="margin-right:15px" /></td>
                                </c:when>
                                <c:otherwise>
                                    <td><img src="resources/images/Acpt2.png" height="18px" align="right" style="margin-right:15px" /></td>
                                </c:otherwise>
                            </c:choose>
                            <c:choose>
                                <c:when test="${group.fixFlag == true}">
                                    <td><img src="resources/images/Chg1.png" height="18px" align="right" style="margin-right:15px" /></td>
                                </c:when>
                                <c:otherwise>
                                    <td><img src="resources/images/Chg2.png" height="18px" align="right" style="margin-right:15px" /></td>
                                </c:otherwise>
                            </c:choose>
                            <c:choose>
                                <c:when test="${group.takebackFlag == true}">
                                    <td><img src="resources/images/Get1.png" height="18px" align="right" style="margin-right:15px" /></td>
                                </c:when>
                                <c:otherwise>
                                    <td><img src="resources/images/Get2.png" height="18px" align="right" style="margin-right:15px" /></td>
                                </c:otherwise>
                            </c:choose>
                            <c:choose>
                                <c:when test="${group.reuseFlag == true}">
                                    <td><img src="resources/images/Re1.png" height="18px" align="right" style="margin-right:15px" /></td>
                                </c:when>
                                <c:otherwise>
                                    <td><img src="resources/images/Re2.png" height="18px" align="right" style="margin-right:15px" /></td>
                                </c:otherwise>
                            </c:choose>
                            <c:choose>
                                <c:when test="${group.delFlag == true}">
                                    <td><img src="resources/images/Del1.png" height="18px" align="right" style="margin-right:15px" /></td>
                                </c:when>
                                <c:otherwise>
                                    <td><img src="resources/images/Del2.png" height="18px" align="right" style="margin-right:15px" /></td>
                                </c:otherwise>
                            </c:choose>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
            <div id="pageBox" style="height: 25px; width: 1380px; background: #DCDCDC">
            	<div style="display:inline; margin-left: 500px">
            		<input type="button" value="最初のページ" onclick="goFirstPage()"><input type="button" value="前のページ" onclick="goFormerPage()">
            		<p style="display:inline;" id="currPage"></p><p style="display:inline;">/</p><p style="display:inline;" id="totalPage"></p>
            		<input type="button" value="次のページ" onclick="goNextPage()"><input type="button" value="最後のページ" onclick="goFinalPage()">
            	</div>
            	<p style="display:inline; margin-left: 100px">該当件数:</p><p style="display:inline;" id="totalCount"></p>
            	<p style="display:inline;">件中 </p>
            	<p style="display:inline;" id="numFromTo"></p>
            	<p style="display:inline;">件 </p>
            </div>
        </div>
    </div>
</div>

<script>
	var arrShowFlag = new Array();
	var dataCounter = 0;
	var currentPage = 1;
	var pageCounter = 1;

	window.onload = function() {
		var table, tr;
        table = document.getElementById("resultTable");
        tr = table.getElementsByTagName("tr");
        dataCounter = tr.length - 1;
        makeSortable(table);
        for (i = 1; i < tr.length; i++) {
        	arrShowFlag[i] = true;
        }
        this.pieceChange(15);
        pageCounter = parseInt(dataCounter/15) + 1;
        document.getElementById("totalCount").innerHTML = dataCounter;
        document.getElementById("currPage").innerHTML = currentPage;
        document.getElementById("numFromTo").innerHTML = "1-15";
	}

    function searchByCondition() {
        var input, filter, table, tr, tdOrderNum, tdVoucherStatus, tdOrderType, tdOrbName, tdOrderCharger, tdOrderDeparter, tdVendor, tdAccept, i;
        var orderTypeVal = document.getElementById('orderType').value;
        var orderNoVal = document.getElementById('orderNo').value;
        var orderChargerVal = document.getElementById('orderCharger').value;
        var vendorVal = document.getElementById('vendor').value;
        var freeWordVal = document.getElementById('freeWord').value;
        var voucherStatusVal = document.getElementById('voucherStatus').value;
        var acceptanceStatusVal = document.getElementById('acceptanceStatus').value;
        // filter = input.value.toUpperCase();
        table = document.getElementById("resultTable");
        tr = table.getElementsByTagName("tr");
        dataCounter = tr.length - 1;
        for (i = 1; i < tr.length; i++) {
            tr[i].style.display = "";
            arrShowFlag[i] = true;
            tdOrderNum = tr[i].getElementsByTagName("td")[0];
            tdVoucherStatus = tr[i].getElementsByTagName("td")[1];
            tdOrderType = tr[i].getElementsByTagName("td")[3];
            tdOrbName = tr[i].getElementsByTagName("td")[4];
            tdOrderCharger = tr[i].getElementsByTagName("td")[5];
            tdOrderDeparter = tr[i].getElementsByTagName("td")[6];
            tdVendor = tr[i].getElementsByTagName("td")[7];
            tdAccept = tr[i].getElementsByTagName("td")[9];

            if ('' != orderTypeVal) {
                if (orderTypeVal != tdOrderType.innerHTML) {
                    tr[i].style.display = "none";
                    arrShowFlag[i] = false;
                    dataCounter--;
                }
            }
            if ('' != orderNoVal) {
                if (tdOrderNum.innerHTML.indexOf(orderNoVal) == -1) {
                    if(arrShowFlag[i] == true){
                    	tr[i].style.display = "none";
                        arrShowFlag[i] = false;
                        dataCounter--;
                    }
                }
            }
            if ('' != orderChargerVal.replace(" ", "")) {
                if (tdOrderCharger.innerHTML.replace(" ", "").indexOf(orderChargerVal.replace(" ", "")) == -1) {
                    if(arrShowFlag[i] == true){
                    	tr[i].style.display = "none";
                        arrShowFlag[i] = false;
                        dataCounter--;
                    }
                }
            }
            if ('' != vendorVal.replace(" ", "")) {
                if (tdVendor.innerHTML.replace(" ", "").indexOf(vendorVal.replace(" ", "")) == -1) {
                    if(arrShowFlag[i] == true){
                    	tr[i].style.display = "none";
                        arrShowFlag[i] = false;
                        dataCounter--;
                    }
                }
            }
            if ('' != freeWordVal.replace(" ", "")) {
                if ((tdOrbName.innerHTML.replace(" ", "").indexOf(freeWordVal.replace(" ", "")) == -1) &&
                    (tdVendor.innerHTML.replace(" ", "").indexOf(freeWordVal.replace(" ", "")) == -1) &&
                    (tdOrderNum.innerHTML.indexOf(freeWordVal) == -1) &&
                    (tdOrderType.innerHTML.indexOf(freeWordVal.replace(" ", "")) == -1) &&
                    (tdOrderCharger.innerHTML.replace(" ", "").indexOf(freeWordVal.replace(" ", "")) == -1)) {
                    if(arrShowFlag[i] == true){
                    	tr[i].style.display = "none";
                        arrShowFlag[i] = false;
                        dataCounter--;
                    }
                }
            }
            if ('' != voucherStatusVal) {
                if (voucherStatusVal != tdVoucherStatus.innerHTML) {
                    if(arrShowFlag[i] == true){
                    	tr[i].style.display = "none";
                        arrShowFlag[i] = false;
                        dataCounter--;
                    }
                }
            }
            if ('' != acceptanceStatusVal) {
                if ("はい" == acceptanceStatusVal) {
                    if (tdAccept.innerHTML.indexOf("Acpt1") == -1) {
                        if(arrShowFlag[i] == true){
                        	tr[i].style.display = "none";
                            arrShowFlag[i] = false;
                            dataCounter--;
                        }
                    }
                } else {
                    if (tdAccept.innerHTML.indexOf("Acpt1") > -1) {
                        if(arrShowFlag[i] == true){
                        	tr[i].style.display = "none";
                            arrShowFlag[i] = false;
                            dataCounter--;
                        }
                    }
                }
            }
        }
        this.pieceChange(document.getElementById("numSelect").value);
        document.getElementById("totalCount").innerHTML = dataCounter;
        if(dataCounter == 0){
        	document.getElementById("numFromTo").innerHTML = "0-0";
        	document.getElementById("currPage").innerHTML = 0;
        }else if(document.getElementById("numSelect").value > dataCounter){
        	document.getElementById("numFromTo").innerHTML = "1-" + dataCounter;
        }else {
        	document.getElementById("numFromTo").innerHTML = "1-" + document.getElementById("numSelect").value;
        }
        document.getElementById("pageBox").style.display = "";
    }

    function clearCondition() {
        var table, tr;
        table = document.getElementById("resultTable");
        tr = table.getElementsByTagName("tr");
        dataCounter = tr.length - 1;
        for (i = 1; i < tr.length; i++) {
            tr[i].style.display = "none";
            arrShowFlag[i] = false;
        }
        document.getElementById('orderType').value = '';
        document.getElementById('orderNo').value = '';
        document.getElementById('orderCharger').value = '';
        document.getElementById('vendor').value = '';
        document.getElementById('freeWord').value = '';
        document.getElementById('voucherStatus').value = '';
        document.getElementById('acceptanceStatus').value = '';
        document.getElementById('ordInbox').value = '';
        document.getElementById('voucherInbox').value = '';
        document.getElementById('acceptanceInbox').value = '';
        document.getElementById("pageBox").style.display = "none";
    }

    function ToPoc2(ordNum, orbName) {
        // give values to poc2
        list = new Array();
        list[0] = ordNum;
        list[1] = orbName;
        window.location.href = './poc2?#' + 'poc3,' + encodeURI(list);
    }


    function bgChange(obj) {
        table = document.getElementById("resultTable");
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
            tr[i].bgColor = "";
        }
        obj.bgColor = "#DAE3F3";
    }


    function load() {
        var x = document.getElementById("orderType");
        x.selectedIndex = -1;
    }

    function pieceChange(numP) {
    	var table, tr;
    	var tempCount = 0;
    	currentPage = 1;
        table = document.getElementById("resultTable");
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
            if(arrShowFlag[i] == true) {
            	tempCount++;
              	tr[i].style.display = "";
            }
            if(tempCount > numP) {
                tr[i].style.display = "none";
            }
		}

        pageCounter = Math.ceil(dataCounter/numP);
        document.getElementById("totalPage").innerHTML = pageCounter;
        currentPage = 1;
    	document.getElementById("currPage").innerHTML = currentPage;
    	document.getElementById("numFromTo").innerHTML = "1-" + document.getElementById("numSelect").value;
    }

    function goFirstPage() {
        if(dataCounter > 0){
        	currentPage = 1;
        	document.getElementById("currPage").innerHTML = currentPage;
        	this.showCurrnetPageData();
        }
    }

    function goFormerPage() {
        if(currentPage > 1) {
            currentPage--;
            document.getElementById("currPage").innerHTML = currentPage;
            this.showCurrnetPageData();
        }  	
    }

    function goNextPage() {
        if(currentPage < pageCounter) {
            currentPage++;
            document.getElementById("currPage").innerHTML = currentPage;
            this.showCurrnetPageData();
        }  	
    }

    function goFinalPage() {
    	if(dataCounter > 0){
    		currentPage = pageCounter;
    		document.getElementById("currPage").innerHTML = currentPage;
    		this.showCurrnetPageData();
    	}
    }

    function showCurrnetPageData() {
    	var table, tr;
    	var tempCount = 0;
    	var numPerPage = document.getElementById("numSelect").value;
    	var startCount = numPerPage*(currentPage-1) + 1;
    	var endCount = currentPage==pageCounter ? dataCounter: numPerPage*currentPage;
        table = document.getElementById("resultTable");
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
            if(arrShowFlag[i] == true) {
            	tempCount++;
            	tr[i].style.display = "none";
            }
            if(arrShowFlag[i] == true && tempCount > numPerPage*(currentPage-1)) {
            	tr[i].style.display = "";
            }
            if(tempCount > numPerPage*currentPage) {
            	tr[i].style.display = "none";
            }
        }
        document.getElementById("numFromTo").innerHTML = startCount + "-" + endCount;
    }
    

    /**

    table拖拽
	
    **/
    var tTD; //用来存储当前更改宽度的Table Cell,避免快速移动鼠标的问题
    var table = document.getElementById("resultTable");
    for (j = 0; j < table.rows[0].cells.length; j++) {
        table.rows[0].cells[j].onmousedown = function() {
            //记录单元格
            tTD = this;
            if (event.offsetX > tTD.offsetWidth - 10) {
                tTD.mouseDown = true;
                tTD.oldX = event.x;
                tTD.oldWidth = tTD.offsetWidth;
            }
            //记录Table宽度
            //table = tTD; while (table.tagName != ‘TABLE') table = table.parentElement;
            //tTD.tableWidth = table.offsetWidth;
        };
        table.rows[0].cells[j].onmouseup = function() {
            //结束宽度调整
            if (tTD == undefined) tTD = this;
            tTD.mouseDown = false;
            tTD.style.cursor = 'default';
        };
        table.rows[0].cells[j].onmousemove = function() {
            //更改鼠标样式
            if (event.offsetX > this.offsetWidth - 10)
                this.style.cursor = 'col-resize';
            else
                this.style.cursor = 'default';
            //取出暂存的Table Cell
            if (tTD == undefined) tTD = this;
            //调整宽度
            if (tTD.mouseDown != null && tTD.mouseDown == true) {
                tTD.style.cursor = 'default';
                if (tTD.oldWidth + (event.x - tTD.oldX) > 0)
                    tTD.width = tTD.oldWidth + (event.x - tTD.oldX);
                //调整列宽
                tTD.style.width = tTD.width;
                tTD.style.cursor = 'col-resize';
                //调整该列中的每个Cell
                table = tTD;
                while (table.tagName != 'TABLE') table = table.parentElement;
                for (j = 0; j < table.rows.length; j++) {
                    table.rows[j].cells[tTD.cellIndex].width = tTD.width;
                }
                //调整整个表
                //table.width = tTD.tableWidth + (tTD.offsetWidth – tTD.oldWidth);
                //table.style.width = table.width;
            }
        };
    }

  	//查找表格的<th>元素，让它们可单击
    function makeSortable(table) {
        var headers=table.getElementsByTagName("th");
        for(var i=0;i<headers.length;i++){
            (function(n){
                var flag=false;
                headers[n].onclick=function(){
                    // sortrows(table,n);
                    var tbody=table.tBodies[0];//第一个<tbody>
                    var rows=tbody.getElementsByTagName("tr");//tbody中的所有行
                    rows=Array.prototype.slice.call(rows,0);//真实数组中的快照

                    //基于第n个<td>元素的值对行排序
                    rows.sort(function(row1,row2){
                        var cell1=row1.getElementsByTagName("td")[n];//获得第n个单元格
                        var cell2=row2.getElementsByTagName("td")[n];
                        var val1=cell1.textContent||cell1.innerText;//获得文本内容
                        var val2=cell2.textContent||cell2.innerText;

                        if(val1<val2){
                            return -1;
                        }else if(val1>val2){
                            return 1;
                        }else{
                            return 0;
                        }
                    });
                    if(flag){
                        rows.reverse();
                    }
                    //在tbody中按它们的顺序把行添加到最后
                    //如果<tbody>还包含了除了<tr>的任何其他元素，这些节点将会悬浮到顶部位置
                    for(var i=0;i<rows.length;i++){
                        tbody.appendChild(rows[i]);
                    }

                    flag=!flag;
                }
            }(i));
        }
    }
</script>