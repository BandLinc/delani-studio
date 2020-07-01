$(document).ready(function () {
    $("div#test").click(function () {
        if ($('#design').css('display') == 'none') {
            $("#design").show();
            $("#test").hide();
            $("#design_text").hide();
        }
        else {
            $("#test").show();
            $("#design").hide();
        }
    });
});
$(document).ready(function () {
    $("div#test1").click(function () {
        if ($('#development').css('display') == 'none') {
            $("#development").show();
            $("#test1").hide();
            $("#development_text").hide();
        }
        else {
            $("#test1").show();
            $("#development").hide();
        }
    });
});
$(document).ready(function () {
    $("div#test2").click(function () {
        if ($('#product').css('display') == 'none') {
            $("#product").show();
            $("#test2").hide();
            $("#product_text").hide();
        }
        else {
            $("#test2").show();
            $("#product").hide();
        }
    });
});
