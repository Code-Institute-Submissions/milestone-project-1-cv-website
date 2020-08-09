// Code modified from Will Chow's original at: https://jsfiddle.net/wilchow/4hzenxkh/

$(document).ready(function () {
    $(".timeline-icon").mouseover(function () {
        console.log("working");
        console.log($(this).parent().parent())
        // $(".timeline-info").css("display", "none"); // hide all timeline-infos
        $(this).parent().parent().next(".timeline-info").css("display", "block"); // show current timeline info
    })
    $(".timeline-icon").mouseout(function () {
        $(".timeline-info").css("display", "none"); // hide all timeline infos
    })
});