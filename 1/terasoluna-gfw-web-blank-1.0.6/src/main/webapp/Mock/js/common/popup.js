(function($){
$.fn.popShow = function (opitons) {
    var defaults = {
        url: "",
        title: "",
        width: "800",
        height: "600"
    };
    var settings = $.extend({}, defaults, opitons);
    this.each(function () {
        var tac = $(this),
            url = settings.url,
            title = settings.title,
            width = settings.width,
            height = settings.height;
        var tag = $('<div class="popWrap"><div class="popMask" ><iframe scrolling="no"src="about:blank"></iframe></div><div class="popMain" style="width: ' + width + 'px;height: ' + height + 'px;margin-left:-' + width / 2 + 'px;margin-top:-' + height / 2 + 'px"><div class="popTit" style="font-size: 1em;color: #333333;"  ><span>' + (title ? title : '') + '</span></div><div class="popCont"></div></div></div>').appendTo("body");

        tag.find(".close").click(function () {
            tac.popHide();
        });
        tag.find(".popCont").append($(this).show());
        if ($.trim(url).length != 0) {
            tac.prop("src", url);
        }
        return this;
    });
};
//关闭弹窗
$.fn.popHide = function () {
    var tab = $(this).closest('.popWrap');
    $(this).hide().appendTo('body');
    tab.remove();
    return this;
};
})(jQuery);