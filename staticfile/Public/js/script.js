/**
 * Created by MohammedSaleem on 12/11/15.
 */

$(document).ready(function () {

    var parentEle = $("body");
    fun = {
        notificationList: function () {
            parentEle.on("click", "#appHeader .notificationBtn", function (e) {
                e.stopPropagation();
                var init = $(this).data("init");
                // ...... UI style based function .......
                if ($("body").hasClass("arabicUIStyle")){
                    if (init == '0') {

                        $("#contWrapper #pageCont").animate({
                            marginLeft: "320px"
                        }, 300, function () {
                        });

                        setTimeout(function () {
                            $(".notifications").fadeIn(0, function () {
                                $(".notifications").removeClass("bounceOutLeftCustom").addClass("bounceInLeftCustom");
                            });
                        }, 200);

                        $(this).data({
                            'init': '1'
                        }).addClass("active");

                    }
                    else {

                        $(".notifications").removeClass("bounceInLeftCustom").addClass("bounceOutLeftCustom");

                        setTimeout(function () {
                            $("#contWrapper #pageCont").animate({
                                marginLeft: "0"
                            }, 300);
                        }, 300);

                        $(this).data({
                            'init': '0'
                        }).removeClass("active");

                        setTimeout(function () {
                            $(".notifications").fadeOut(0)
                        }, 500);
                    }
                }
                else {
                    console.log(init)
                    if (init == '0') {

                        $("#contWrapper #pageCont").animate({
                            marginRight: "320px"
                        }, 300, function () {
                        });

                        setTimeout(function () {
                            $(".notifications").fadeIn(0, function () {
                                $(".notifications").removeClass("bounceOutRightCustom").addClass("bounceInRightCustom");
                            });
                        }, 200);

                        $(this).data({
                            'init': '1'
                        }).addClass("active");

                    }
                    else {

                        $(".notifications").removeClass("bounceInRightCustom").addClass("bounceOutRightCustom");

                        setTimeout(function () {
                            $("#contWrapper #pageCont").animate({
                                marginRight: "0"
                            }, 300);
                        }, 300);

                        $(this).data({
                            'init': '0'
                        }).removeClass("active");

                        setTimeout(function () {
                            $(".notifications").fadeOut(0)
                        }, 500);
                    }
                }



            });


            parentEle.on("click", ".notificationList li", function () {
                var init = $(this).data("init");

                if (init == '0') {
                    $(this).find(".actionBtn").slideDown(200);
                    $(this).data({
                        'init': '1'
                    });
                }
                else {
                    $(this).find(".actionBtn").slideUp(200);
                    $(this).data({
                        'init': '0'
                    })
                }
            });

            parentEle.on("click", ".notificationList li .actionBtn .btn", function () {
                $(".notificationList li .actionBtn").slideUp(200);
                $(".notificationList li").data({
                    'init': '0'
                });
                $(this).parents().eq(2).addClass("notified");
            });

        },
        help: function () {
            parentEle.on("click", ".needHelpBtn", function (e) {
                e.stopPropagation();
                var init = $(this).data("init");

                if ($("body").hasClass("arabicUIStyle")){
                    if (init == '0') {
                        $(".helpBar").fadeIn(0, function () {
                            $(".helpBar").removeClass("bounceOutLeftCustom").addClass("bounceInLeftCustom");
                        });
                        $(this).data({
                            'init': '1'
                        }).text("HIDE HELP");
                    }
                    else{
                        $(".helpBar").removeClass("bounceInLeftCustom").addClass("bounceOutLeftCustom");
                        setTimeout(function () {
                            $(".helpBar").fadeOut(0)
                        }, 500);
                        $(this).data({
                            'init': '0'
                        }).text("SHOW HELP");

                    }
                }
                else {
                    if (init == '0') {
                        $(".helpBar").fadeIn(0, function () {
                            $(".helpBar").removeClass("bounceOutRightCustom").addClass("bounceInRightCustom");
                        });
                        $(this).data({
                            'init': '1'
                        }).text("HIDE HELP");
                    }
                    else{
                        $(".helpBar").removeClass("bounceInRightCustom").addClass("bounceOutRightCustom");
                        setTimeout(function () {
                            $(".helpBar").fadeOut(0)
                        }, 500);
                        $(this).data({
                            'init': '0'
                        }).text("SHOW HELP");

                    }
                }
            });
            parentEle.on("click", ".helpBar .x", function (e) {
                $(".helpBar").removeClass("bounceInRightCustom").addClass("bounceOutRightCustom");
                setTimeout(function () {
                    $(".helpBar").fadeOut(0)
                }, 500);

                $(".needHelpBtn").data({
                    'init': '0'
                }).text("NEED HELP");
            });
        },
        ripple: function () {

            parentEle.on("mousedown", ".rippleEle", function (e) {
                var ele = $(this);

                if (!ele.children().hasClass("rippleContainer")) {
                    ele.append('<div class="rippleContainer"><span></span></div>')
                }

                var rippleMain = ele.children(".rippleContainer");

                var left = (e.pageX) - (ele.offset().left);
                var top = (e.pageY) - (ele.offset().top);
                var r = $('<div class="ripple"></div>');
                r.appendTo(rippleMain)
                    .css({
                        left: left,
                        top: top
                    })
                    .css({
                        "-ms-transform": "scale(" + 3 + ")",
                        "-moz-transform": "scale(" + 3 + ")",
                        "-webkit-transform": "scale(" + 3 + ")",
                        transform: "scale(" + 3 + ")"
                    })
                    .addClass("on")
                    .animate({
                        width: 2 * Math.max(ele.outerWidth(), ele.outerHeight()),
                        height: 2 * Math.max(ele.outerWidth(), ele.outerHeight()),
                        "margin-left": -1 * Math.max(ele.outerWidth(), ele.outerHeight()),
                        "margin-top": -1 * Math.max(ele.outerWidth(), ele.outerHeight()),
                        opacity: .2
                    }, 500),
                    setTimeout(function () {
                        r.remove();
                    }, 500);

            });
        },
        dropDown: function () {
            parentEle.on("click", ".dropDown .head ,.multiSelect .head", function (e) {
                e.stopPropagation();

                if (!$(this).hasClass('disabled')) {
                    var init = $(this).data("init");
                    if (init == "0") {
                        $(".dropDown .list, .multiSelect .list").slideUp(100);
                        $(".dropDown .head, .multiSelect .head").data({
                            "init": "0"
                        });
                        $(".dropDown").removeClass("open");

                        $(this).parents().eq(0).addClass("open");
                        $(this).parents().eq(0).find(".list").slideDown(200);
                        $(this).data({
                            "init": "1"
                        })
                    }
                    else {
                        $(this).parents().eq(0).find(".list").slideUp(200);
                        $(this).data({
                            "init": "0"
                        });
                        var ele = $(this);
                        setTimeout(function () {
                            ele.parents().eq(0).removeClass("open");
                        }, 150);
                    }
                }
            });
            parentEle.on("click", ".dropDown .list li", function (e) {
                var value = $(this).text();
                $(this).parents().eq(1).find(".headTitle").focus();
                $(this).parents().eq(1).find(".headTitle").text(value);
                $(this).parents().eq(1).find(".headTitle").val(value);

                $(this).parent().slideUp(200);
                $(this).parents().eq(1).find(".head").data({
                    "init": "0"
                });

                var ele=$(this);
                setTimeout(function () {
                    ele.parents().eq(1).removeClass("open");
                },150);
            });
            $('body').on("click", function (e) {
                setTimeout(function () {
                    $('.multiSelect').removeClass("open");
                },150);
            });
            parentEle.on("click", ".multiSelect .list li", function (e) {
                e.stopImmediatePropagation();
                var that = this;
                var listHeader = $(this).parents().eq(1).find(".headTitle");
                var selectedVal = "";
                setTimeout(function () {
                    /*    selectionLen = $(that).parent().find("input[type='checkbox']:checked").length;

                     if (selectionLen == 0) {
                     listHeader.text("Please select");
                     }
                     else {
                     $(that).parent().find("input[type='checkbox']:checked").each(function () {

                     selectedVal = selectedVal + $(this).parents().eq(1).find(".listName").text().trim() + ", ";
                     });
                     listHeader.text(selectedVal);
                     console.log(selectedVal);
                     }

                     */
                }, 50)

            });
        },
        popup: function (btn, popup) {
            parentEle.on("click", btn, function (e) {
                e.stopPropagation();
                $(".background").fadeIn(250, function () {
                    $(popup).fadeIn(250);
                });
            });

            parentEle.on("click", ".popup .close", function (e) {
                e.stopPropagation();
                $(".popup").fadeOut(250, function () {
                    $(".background").fadeOut(250);
                });
            });
        },
        messageBox: function (btn, msgBox) {
            var setTime;
            parentEle.on("click", btn, function (e) {
                $(".messagePopup").fadeOut(100);
                clearTimeout(setTime);
                $(msgBox).fadeIn(200);
                setTime = setTimeout(function () {
                    $(msgBox).fadeOut(200);
                }, 3000);
            });
        },
        accordion: function () {
            parentEle.on("click", ".accordionSec .accordionHead", function (e) {
                var init = $(this).data("init");
                if (init == "0") {
                    // ..... to close prev opened ......
                    $(this).parents().eq(1).find(".accordionSec").removeClass("expand");
                    $(this).parents().eq(1).find(".accordionHead").data({
                        "init": 0
                    });
                    $(this).parents().eq(1).find(".expandBtn").text("+");
                    $(this).parents().eq(1).find(".accordionContent").slideUp(300);

                    // ..... to open current .......
                    $(this).parent().addClass("expand");
                    $(this).parent().find("> .accordionContent").slideDown(300);
                    $(this).data({
                        "init": "1"
                    });
                    $(this).find(".expandBtn").text("-");
                }
                else {
                    $(this).parent().removeClass("expand");
                    $(this).parent().find(".accordionContent").slideUp(300);
                    $(this).data({
                        "init": "0"
                    });
                    $(this).find(".expandBtn").text("+");


                    $(this).parent().find(".accordionSec").removeClass("expand");
                    $(this).parent().find(".expandBtn").text("+");
                    $(this).parent().find(".accordionSec .accordionHead").data({
                        "init": "0"
                    });
                }
            });
        },

        showCanvasDetails: function () {
            var showCanvasDetails=1;
            parentEle.on("click", ".canvasBox li .accordionHead", function (e) {
                if (showCanvasDetails==1){
                    if ($(this).parent().hasClass("expand")){
                        $(".canvasDetailsBox").fadeIn(0).addClass("show");
                        showCanvasDetails=0;
                    }
                }
            });
            parentEle.on("click", ".canvasDetailsBox .close", function (e) {
                if (showCanvasDetails==0){
                    $(".canvasDetailsBox").removeClass("show");
                    setTimeout(function () {
                        $(".canvasDetailsBox").fadeOut(0);
                    },300);
                    showCanvasDetails=1;
                }
            });
        },
        showMapMarkersDetails: function () {
            parentEle.on("click", ".markerMain", function (e) {
                $(".markerMain .markerGate").removeClass('active');
                $(".leaflet-marker-icon").css({
                    'z-index': 'auto'
                });
                $(this).parent().css({
                    'z-index': 500
                });
                $(this).find('.markerGate').addClass('active');
            });
        },
        defaultClick: function () {
            $(document).click(function () {
                $(".dropDown .list, .multiSelect .list").slideUp(200);
                $(".mapMenu").slideUp(200);
                $(".dropDown .head, .multiSelect .head").data({
                    "init": "0"
                });
                $(".dropDown").removeClass("open");

                $(".notificationList .actionBtn").slideUp(200);
                $(".notificationList li").data({
                    'init': '0'
                });

                $(".popup").fadeOut(250, function () {
                    $(".background").fadeOut(250);
                });

                $(".markerMain .markerGate").removeClass('active');
            })
        },
        preventDefaultClicks: function () {
            var selectors = '.notificationList, .notificationList .actionBtn, .popup ,.markerMain';

            parentEle.on("click", selectors, function (e) {
                e.stopPropagation()
            });
        }
    };
    fun.popup(".startInstanceBtn", ".popup.startInstance");
    fun.notificationList();
    fun.help();
    fun.ripple();
    fun.dropDown();
    fun.popup('.deleteCanvasBtn','.deleteCanvas');
    fun.popup('.addPeopleBtn','.addPeoplePopup');
    fun.accordion();
    fun.showCanvasDetails();
    fun.showMapMarkersDetails();
    fun.defaultClick();
    fun.preventDefaultClicks();
});
