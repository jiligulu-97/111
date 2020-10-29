var fileTextField = $("#fileTextField");

fileTextField.bind('dragover',drag);
fileTextField.bind('dragleave',drag);
fileTextField.bind('drop',drag);

function drag(e){
    e.preventDefault();
    switch (e.type){
        case "dragover" :
            $(this).text("マウスを離してください");
            break;
        case "dragleave" :
            $(this).text("ここにドラッグ&ドロップしてください");
            break;
        case "drop" :
            var fileList = e.originalEvent.dataTransfer.files;
            console.log(e.dataTransfer);
            if (fileList.length > 0){
                var uploadFile = fileList[0];
                $("#fileNamefield").css("display",'block');
                $("#fileNameInput").val(uploadFile.name);
                $(this).text("");
            //     $(this).html("<table class='right_table'> <tr height='40px'><td><ul class='tag_ul'><li class='tag_li'>" + 
            //     uploadFile.name + 
            //     "<a class='delete_tag_btn' id='delete_tag_btn' title='delete' onclick = 'deleteTag()'>x</a></li><li>" +
            //     "<button class='delete_button' id='delete_button' onclick = 'deleteTag()'>削除</button></li></ul></td></tr><tr height='40px'><td><input type='text' placeholder='個別契約書コメント'></td></tr></table>");
            // 
        }
        break;
    }
}

function deleteTag() {
    $(fileTextField).html("ここにドラッグ&ドロップしてください");
}

function clean_input(obj) {
    var bro = $(obj).prev();
    $(bro).val("");
    $(bro).attr("placeholder","名前の一部を入力すると候補を表示します");
}

//TODO:
function  fileFieldOnChange(path){
    if(path!=""){
        var arr = path.split("\\");
       // $("#fileNameInput").html(arr[arr.length-1]);
    }
}

$(function(){
    // $("p").draggable({
    //     helper:"clone"
    // })
    // $("#input1,#input2").droppable({
    //     over : function(e,ui){
    //         $(this).attr("placeholder","マウスを離してください");
    //     },
    //     out : function(e,ui){
    //         $(this).attr("placeholder","名前の一部を入力すると候補を表示します");
    //     },
    //     drop : function(e,ui){
    //         $(this).val(ui.draggable.text());
    //     }
    // })
    //点击消除按钮把文件名删除
    $("#delectFileBtn").click(
        function(){
            $("#fileNameInput").val("");
        }
    )
    //点击input框从本地上传文件
    $("#fileNameInput").click(
        function(){
            $("#fileField").click();
            
            
        }
    );
    $("#fileField").change(function(){
        //$("#fileNameInput").css();
        var str = $("#fileField").val();
        var arr = str.split("\\");
        var file_name = arr[arr.length-1];
        $("#fileNameInput").val(file_name);
    });
    //点击选择文件从本地上传文件
    $("#fileSelect").click(
        function(){
            $("#fileNamefield").css("display","block");
            //$("#fileNameField").show();
            $("#fileTextField").hide();
            $("#fileField").click();
        }
    );
});
