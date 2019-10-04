$("ul.dropList").hide();
$("ul.dropList2").hide();
$("ul.dropList3").hide();







$("#menu-close").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});


$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$("#portItem").mouseenter(function () {
    $(".dropList").stop(true, true);
    $(".dropList").show(250);
    $("#portCaret").attr("class", "glyphicon glyphicon-chevron-down");
});

$("#portItem").mouseleave(function () {
    $(".droplist").stop(true,true);
    $(".dropList").hide(250);
    $("#portCaret").attr("class", "glyphicon glyphicon-chevron-right");

});

$("#portItem2").mouseenter(function () {
    $(".droplist2").stop(true,true);
    $(".dropList2").show(250);
    $("#portCaret2").attr("class", "glyphicon glyphicon-chevron-down");
});

$("#portItem2").mouseleave(function () {
    $(".droplist2").stop(true,true);
    $(".dropList2").hide(250);
    $("#portCaret2").attr("class", "glyphicon glyphicon-chevron-right");

});

$("#portItem3").mouseenter(function () {
    $(".droplist3").stop(true,true);
    $(".dropList3").show(250);
    $("#portCaret3").attr("class", "glyphicon glyphicon-chevron-down");
});

$("#portItem3").mouseleave(function () {
    $(".droplist3").stop(true,true);
    $(".dropList3").hide(250);
    $("#portCaret3").attr("class", "glyphicon glyphicon-chevron-right");

});

// $("#contactbutton").mouseenter(function () {
//     $("#contactbutton").stop(true, false);
//     $("#contactbutton").css("opacity", "1");
//     $("#contactbutton").animate({
//         left: "0"
//     }, 300, function () {

//     });

// });

// $("#contactbutton").mouseleave(function () {
//     $("#contactbutton").stop(true, false);
//     $("#contactbutton").animate({
//         left: "-85"
//     }, 300, function () {

//     });

// });

// $("#contactbutton").click(function () {
//     $("#contactbutton").css("opacity", "0.4");

// });


// Scrolls to the selected menu item on the page
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});