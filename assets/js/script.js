$(document).ready(function () {

    var menu = $(".menu-icon-container");
    var exit = $(".plus");

    menu.on("click", function () {
        $(".drop-menu").animate({
            left: "0"
        }, "slow");
    });

    exit.on("click", function () {
        $(".drop-menu").animate({
            left: "-500px"
        }, "slow");
    });



})