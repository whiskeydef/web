function audioAutoPlay(id) {
    var audio = document.getElementById(id);
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.play();
    }, false);
}


function slide_up(){
        $("#hi").css("color","#FFAEB9").slideUp(2000);
}
function show_text(){
        $("#hi").show(2000);
}

$(function() {
    var audio = $('#media');
    audio[0].play();
    $("#audio_btn").bind('click', function() {
        $(this).hasClass("off") ? ($(this).addClass("play_yinfu").removeClass("off"), $("#yinfu").addClass("rotate"), $("#media")[0].play()) : ($(this).addClass("off").removeClass("play_yinfu"), $("#yinfu").removeClass("rotate"),
            $("#media")[0].pause());
    });
});