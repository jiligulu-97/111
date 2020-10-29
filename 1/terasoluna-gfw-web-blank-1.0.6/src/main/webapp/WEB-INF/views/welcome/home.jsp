<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Home</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/app/css/styles.css">
</head>
<body>
    <div id="wrapper">
        <h1>Hello world!</h1>
        <p>The time on the server is ${serverTime}.</p>
    </div>
    
    <div class="span-24 last">
    <a href="${pageContext.request.contextPath}/poc1">発注基本内容入力画面</a> <br />
    <a href="${pageContext.request.contextPath}/poc2">発注内容確認画面</a> <br />
    <a href="${pageContext.request.contextPath}/poc3">発注一覧画面</a> <br />
    </div>

</html>
