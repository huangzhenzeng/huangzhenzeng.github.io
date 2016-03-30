var init = {
    ky: 1,
    jy: 100,
    ry: -100,
    fy: -1,
    sat: false,
    onesat: true,
    twosat: true,
    matches: 1,
    distance: 0,
    friction: 2,
    n: 0,
    oldMove: 0
};
var obj = {
    body: $("body"),
    arrow: $(".arrow"),
    longding: $(".longding"),
    oneBackground: $(".oneBackground"),
    home: $(".home"),
    skip: $(".skip"),

    oneImg_1: $("#oneImg_1"),
    oneText: $("#oneText"),
    oneTime: $(".oneTime"),
    oneNum: $(".oneNum"),
    oneTxt: $(".oneTxt"),
    oneBottom: $("#oneBottom"),
    allOneDom_1: $(".allOneDom"),

    twoImg_1: $("#twoImg_1"),
    twoBottom: $("#twoBottom"),
    twoText: $("#twoText"),

    threeImg_1: $("#threeImg_1"),
    threeImgDiv: $(".souYi,.allMoney,.recoveryNum"),
    souYi: $(".souYi"),
    recoveryNum: $(".recoveryNum"),
    allMoney: $(".allMoney"),
    recoveryNum: $(".recoveryNum"),
    threeBottom: $("#threeBottom"),
    threeBlock: $(".threeBlock"),

    allOneDom: $("#oneText,#oneImg_1,.oneTime,.oneNum,.oneTxt,#oneBottom"),
    allTwoDom: $("#twoImg_1,#twoBottom,#twoText"),
    allTwoTest: $("#twoImg_1,#twoText"),
    allThreeDom: $("#threeImg_1,#threeBottom"),
    allThreeTest: $(".souYi,.allMoney,.recoveryNum"),
    allFourDom: $(".fourBtn,.fourBtn_1,.fourTime,.fourText_1,.fourText_2"),
    allFourDomClass: $(".fourText,.four"),


    fourText: $(".fourText"),
    fourText_1: $(".fourText_1"),
    fourText_2: $(".fourText_2"),
    fourBtnOne: $("#fourBtnOne"),
    fourBtnTwo: $("#fourBtnTwo"),
    fourBtn: $(".fourBtn "),



    homebg: $(".homebg"),
    oneBg: $(".one"),
    twoBg: $(".two"),
    threeBg: $(".three"),
    fourbg_1: $(".fourbg_1"),
    fourbg: $(".four")
};
var mian = { //工具函数
    start: function() { //默认设置
        console.log("message0");
        //进入铜板街
        var url = "http://tbj.native/hasloginuser";
        var isCallBack = true;
        //dataCallBack();
        //setTimeout(function(){
        app(url, isCallBack);
        //},200 );

        init.wh = $(window).width();

        if (init.wh > 400) {
            init.friction = init.friction * 2
        }
        //debug.log(init.friction);
        obj.oneBackground.addClass("oneAnime");
        obj.allOneDom.bind("webkitAnimationEnd", function() {
            console.log("allOneDom" + this.nodeValue);
            $(this).css("opacity", 1);
        });
        obj.threeImgDiv.bind("webkitAnimationStart", function() {
            console.log("threeimgdiv");
            obj.threeImgDiv.css("opacity", 1);
        });

        obj.fourBtn.bind("webkitAnimationStart", function() {
            console.log("fourbtn");
            mian.arrow(false);
        });
        obj.allFourDom.bind("webkitAnimationStart", function() {
            console.log("allfourDom");
            $(this).css("opacity", 1);
        });
        obj.oneTxt.bind("webkitAnimationEnd", function() {
             console.log("开始判断")
            //obj.longding.css("display","block");
            setTimeout(function() {
                //obj.longding.css("display","none");
                obj.arrow.addClass("arrowInDown");
                init.sat = true;
            }, 200);


        });
    },

    arrow: function(sct) {
        if (sct) {
            obj.arrow.addClass("arrowInDown")
        } else {
            obj.arrow.removeClass("arrowInDown")
        }

    },
    kaiGuanOne: function() { //开关
        if (!init.sat) {
            init.kaiguan = false;
        } else if (init.matches == 1 && init.distance > 1 || init.matches == 2 && init.distance > 1) {
            cssfn.oneAnimationDom(1, 0, 0, 0, 0, 100, 0);
            init.oldMove = 0;
            init.kaiguan = false;
        } else if (init.matches == 1 && init.distance <= -100 || init.matches == 3 && init.distance >= -100) {
            init.oldMove = -100;
            cssfn.defaultThree();
            cssfn.oneAnimationDom(0, -100, -100, -100, -100, 0, 1);
            init.kaiguan = false;
        } else if (init.matches == 2 && init.distance <= -200 || init.matches == 4 && init.distance >= -200) {
            cssfn.defaultTwo();
            cssfn.defaultFour();
            cssfn.twoAnimationDom(0, -100, -100, -100, -100, 0, 0, 1, 1);
            init.kaiguan = false;
        } else if (init.matches == 3 && init.distance < -300 || init.matches == 4 && init.distance < -300) {
            init.oldMove = -300;
            init.kaiguan = false;
            cssfn.threeAnimationDom(0, -100, -100, -100, -100, 0, 1);
        } else {
            init.kaiguan = true;
        }

    },
    matches: function() { //判断场景
        if (obj.oneImg_1.css("opacity") == 1) {
            init.matches = 1;
        } else if (obj.twoImg_1.css("opacity") == 1) {
            init.matches = 2;
        } else if (obj.threeImg_1.css("opacity") == 1) {
            init.matches = 3;
        } else if (obj.fourbg_1.css("opacity") == 1) {
            init.matches = 4;
        };

    },
    throttle: function(fn, delay) { //函数节流
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(function() {
            fn;
        }, delay);
    },
    fomatFloat: function(src, pos) { //取小数点一位
        return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
    },
    process: function() {
        // clearTimeout(this.timeoutId);
        // this.timeoutId = setTimeout(function() {
        mian.touchmove();
        // }, 10);
    },
    bgColorOne: function() {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(function() {
            obj.body.css("background-color", "#362b6a");
            //console.log("改变颜色")
        }, 50);
    },
    bgChoice: function() {
        //console.log("间距" + init.distance)
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(function() {
            if (init.distance >= -250) {
                obj.homebg.css("display", "block");
                obj.fourbg_1.css("display", "none");
                obj.skip.css("display", "block");
                obj.fourBtn.css('display', "none")
            } else if (init.distance <= -250) {
                obj.fourBtn.css('display', "block")
                obj.homebg.css("display", "none");
                obj.fourbg_1.css("display", "block");
                obj.skip.css("display", "none");
            };
        }, 5);

    },
    bgColorfour: function() {
        //console.log("间距" + init.distance)
        obj.allFourDom.css("display", "none");
    },
    debug: function() {
        //console.log("间距" + init.distance)
        clearTimeout(this.debug);
        this.debug = setTimeout(function() {
            debug.log("触发间距" + init.distance)
        }, 100);

    },
    touchmove: function() {
        init.distance = init.cy / init.friction - init.sy / init.friction + init.oldMove;
        //console.log("间隔" + init.distance)
        // console.log("起始" + init.sy)
        mian.kaiGuanOne();


        if (init.kaiguan) {
            mian.bgChoice();
            //cssfn.domBraek();
            init.abs = Math.abs(init.distance);
            //console.log("场景" + init.matches)
            //console.log("中间时间" + init.abs)

            //console.log("透明度" + init.opacity)
            if (init.matches == 1 && init.distance < 1 || init.matches == 2 && init.distance > -100) {
                init.opacityTwe = mian.fomatFloat(init.abs / 100, 1);
                init.opacity = mian.fomatFloat(1 - init.abs / 100, 1);
                init.right = init.abs * 2;
                init.left = -init.abs * 2;
                init.top = -init.abs / 20;
                init.oneY = -init.abs;
                init.twoY = 100 - init.abs;
                cssfn.oneAnimationDom(init.opacity, init.right, init.left, init.top, init.oneY, init.twoY, init.opacityTwe)
            } else if (init.matches == 2 && init.distance < 1 || init.matches == 3 && init.distance > -200) {
                // mian.bgColorOne();
                //obj.allFourDom.css("display", "none");
                if (init.matches == 3 && init.distance > -200) {
                    mian.bgColorfour();
                    obj.home.removeClass("threeAnime");
                }
                init.opacityTwe = mian.fomatFloat((init.abs - 100) / 100, 1);
                init.opacity = mian.fomatFloat(2 - init.abs / 100, 1);
                init.oneY = -init.abs + 100;
                init.left = init.abs - 100;
                init.top = (-init.abs + 100) / 20;
                init.twoY = 200 - init.abs;
                init.threeY = 200 - init.abs;
                init.opacityThree = mian.fomatFloat((init.abs - 100) / 100, 1);
                init.right = (init.abs - 100) * 2;
                cssfn.twoAnimationDom(init.opacity, init.right, init.left, init.top, init.oneY, init.twoY, init.threeY, init.opacityTwe, init.opacityThree);
            } else if (init.matches == 3 && init.distance < 1 || init.matches == 4 && init.distance > -300) {
                // mian.debug();
                if (init.matches == 4 && init.distance > -300) {
                    mian.bgColorfour();
                    obj.home.removeClass("fourAnime");

                } else {
                    obj.home.removeClass("threeAnime");
                }

                obj.body.css("background-color", "#5a5fb9");
                init.opacityTwe = mian.fomatFloat((init.abs - 200) / 100, 1);
                init.opacity = mian.fomatFloat(3 - init.abs / 100, 1);
                init.oneY = -init.abs + 200;
                init.left = init.abs - 200;
                init.top = (-init.abs + 200) / 20;
                init.twoY = 300 - init.abs;
                cssfn.threeAnimationDom(init.opacity, init.right, init.left, init.top, init.oneY, init.twoY, init.threeY, init.opacityTwe)

            }
        }
    }
}
var cssfn = {
    oneAnimationDom: function(opacity, right, left, top, oneY, twoY, opacityTwe) {
        // console.log("透明度" + opacity)
        obj.oneImg_1.css({
            "-webkit-transform": "translate3d(" + right + "px,0,0)",
            opacity: "" + opacity + ""
        });
        obj.oneText.css({
            "-webkit-transform": "translate3d(" + left + "px,0,0)",
            opacity: "" + opacity + ""
        });
        obj.oneBottom.css({
            "-webkit-transform": "translate3d(0," + oneY + "px,0)",
            opacity: "" + opacity + ""
        });
        obj.oneBg.css({
            "-webkit-transform": "translate3d(0," + oneY + "%,0)",
        });
        obj.twoBg.css({
            "-webkit-transform": "translate3d(0," + twoY + "%,0)",
        });
        obj.twoImg_1.css({
            "-webkit-transform": "translate3d(0," + twoY + "%,0)",
            opacity: "" + opacityTwe + ""
        });
        obj.twoText.css({
            "-webkit-transform": "translate3d(-" + twoY + "%,0,0)",
            opacity: "" + opacityTwe + ""
        });
        obj.twoBottom.css({
            "-webkit-transform": "translate3d(0," + twoY + "px,0)",
            opacity: "" + opacityTwe + ""
        });
    },
    twoAnimationDom: function(opacity, right, left, top, oneY, twoY, threeY, opacityTwe, opacityThree) {
        console.log("哈哈" + init.distance)
        if (init.distance > -200 || init.distance < -200) {
            obj.home.removeClass("threeAnime");
            obj.threeImgDiv.css({
                opacity: "0"
            })
            obj.allFourDom.css({
                opacity: "0"
            })
        }

        obj.twoImg_1.css({
            "-webkit-transform": "translate3d(" + oneY + "%,0,0)",
            opacity: "" + opacity + ""
        });
        obj.twoText.css({
            "-webkit-transform": "translate3d(" + left + "px,0,0)",
            opacity: "" + opacity + ""
        });
        obj.twoBottom.css({
            "-webkit-transform": "translate3d(0," + oneY + "px,0)",
            opacity: "" + opacity + ""
        });

        obj.twoBg.css({
            "-webkit-transform": "translate3d(0," + oneY + "%,0)",
        });

        obj.threeBg.css({
            "-webkit-transform": "translate3d(0," + twoY + "%,0)",
        });
        obj.threeImg_1.css({
            "-webkit-transform": "translate3d(0," + threeY + "%,0)",
            opacity: "" + opacityTwe + ""
        });
        // obj.threeImgDiv.css({
        //     opacity: "" + opacityThree + ""
        // });
        obj.threeBottom.css({
            "-webkit-transform": "translate3d(0," + twoY + "%,0)",
            opacity: "" + opacityTwe + ""
        });

    },
    threeAnimationDom: function(opacity, right, left, top, oneY, twoY, threeY, opacityTwe) {
        // console.log("哈哈"+opacity)
        if (init.distance > -300) {
            obj.allFourDom.css({
                opacity: "0"
            })
        }
        if (init.distance < -300) {
            obj.threeImgDiv.css({
                opacity: "0"
            })
        }

        obj.home.removeClass("threeAnime");
        obj.threeBlock.css({
            opacity: "0"
        })
        obj.threeBg.css({
            "-webkit-transform": "translate3d(0," + oneY + "%,0)",
        });
        obj.threeImg_1.css({
            "-webkit-transform": "translate3d(0," + oneY + "%,0)",
            opacity: "" + opacity + ""
        });
        // obj.threeImgDiv.css({
        //     opacity: "" + opacity + ""
        // });
        obj.threeBottom.css({
            "-webkit-transform": "translate3d(0," + oneY + "%,0)",
            opacity: "" + opacity + ""
        });
        obj.fourbg.css({
            "-webkit-transform": "translate3d(0," + twoY + "%,0)",
        });
        obj.fourbg_1.css({
            opacity: "" + opacityTwe + ""
        });
    },
    defaultThree: function() {
        obj.allThreeDom.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,100%,0)",
            "opacity": "0"
        })
        obj.threeBlock.css({
            "opacity": "0"
        })
        obj.threeBg.css({
            "-webkit-transform": "translate3d(0,100%,0)",
        });
    },
    defaultTwo: function() {
        obj.allTwoDom.css({
            "opacity": "0",
            "-webkit-transform": "translate3d(0,100%,0)"
        })
        obj.twoBg.css({
            "-webkit-transform": "translate3d(0,-100%,0)"
        });
    },
    defaultFour: function() {
        obj.fourbg.css({
            "-webkit-transform": "translate3d(0,100%,0)"
        });

    },
    zhongzhiOne: function() {
        obj.fourbg.css({
            "-webkit-transform": "translate3d(0,100%,0)"
        });
        obj.twoImg_1.css({
            "-webkit-transform": "translate3d(0,100%,0)",
            "opacity": 0
        });
        obj.twoText.css({
            "-webkit-transform": "translate3d(-100%,0,0)",
            "opacity": 0
        });
        obj.twoBg.css({
            "-webkit-transform": "translate3d(0,100%,0)",
        });
        obj.twoBottom.css({
            "-webkit-transform": "translate3d(0,100%,0)",
            "opacity": 0
        });
        obj.fourbg.css({
            "-webkit-transform": "translate3d(0,100%,0)",
        })
    },
    zhongzhiTwo: function() {
        obj.fourbg.css({
            "-webkit-transform": "translate3d(0,100%,0)"
        });
        obj.oneText.css({
            "-webkit-transform": "translate3d(-100%,0,0)",
            "opacity": 0
        });
        obj.oneBottom.css({
            "-webkit-transform": "translate3d(0,-100px,0)",
            "opacity": 0
        });
        obj.oneBg.css({
            "-webkit-transform": "translate3d(0,-100%,0)",
        });
        obj.allThreeDom.css({
            "-webkit-transform": "translate3d(0,-100%,0)",
            "opacity": 0
        });
        obj.threeBg.css({
            "-webkit-transform": "translate3d(0,-100%,0)",
        });
        obj.oneImg_1.css({
            "opacity": 0
        });
        obj.fourbg.css({
            "-webkit-transform": "translate3d(0,100%,0)",
        })
    },
    zhongzhiThree: function() {
        obj.fourbg.css({
            "-webkit-transform": "translate3d(0,100%,0)"
        });
        obj.oneText.css({
            "-webkit-transform": "translate3d(-100%,0,0)",
            "opacity": 0
        });
        obj.oneBottom.css({
            "-webkit-transform": "translate3d(0,-100px,0)",
            "opacity": 0
        });
        obj.oneBg.css({
            "-webkit-transform": "translate3d(0,-100%,0)",
        });
        obj.twoImg_1.css({
            "-webkit-transform": "translate3d(-100%,0,0)",
            "opacity": 0
        });

        obj.twoBg.css({
            "-webkit-transform": "translate3d(0,100%,0)",
        });
        obj.twoBottom.css({

            "opacity": 0
        });
        obj.oneImg_1.css({
            "opacity": 0
        });
        obj.fourbg.css({
            "-webkit-transform": "translate3d(0,100%,0)",
        })
    },
    zhongzhiFour: function() {
        obj.oneImg_1.css({
            "opacity": 0
        });
        obj.oneText.css({
            "-webkit-transform": "translate3d(-100%,0,0)",
            "opacity": 0
        });
        obj.oneBottom.css({
            "-webkit-transform": "translate3d(0,-100px,0)",
            "opacity": 0
        });
        obj.oneBg.css({
            "-webkit-transform": "translate3d(0,-100%,0)",
        });
        obj.twoImg_1.css({
            "-webkit-transform": "translate3d(-100%,0,0)",
            "opacity": 0
        });

        obj.twoBg.css({
            "-webkit-transform": "translate3d(0,100%,0)",
        });
        obj.twoBottom.css({
            "-webkit-transform": "translate3d(0,100%,0)",
            "opacity": 0
        });
        obj.allThreeDom.css({
            "-webkit-transform": "translate3d(0,-100%,0)",
            "opacity": 0
        });
        obj.threeBg.css({
            "-webkit-transform": "translate3d(0,-100%,0)",
        })
    },
    oneDomReset: function() {
        if (init.distance < 0) {

            //obj.allOneDom.css("display","none")
            obj.oneImg_1.css({
                "-webkit-transition": "all .3s ease-in",
                "-webkit-transform": "translate3d(0,0,0)",
                "opacity": 1
            });
            obj.oneText.css({
                "-webkit-transition": "all .3s ease-in",
                "-webkit-transform": "translate3d(0,0,0)",
                "opacity": 1
            });
            obj.oneBottom.css({
                "-webkit-transition": "all .3s ease-in",
                "-webkit-transform": "translate3d(0,0%,0)",
                "opacity": 1
            });
            obj.oneBg.css({
                "-webkit-transition": "all .3s ease-in",
                "-webkit-transform": "translate3d(0,0,0)",
            })
            obj.twoImg_1.css({
                "-webkit-transition": "all .3s ease-in",
                "-webkit-transform": "translate3d(0,100%,0)",
                "opacity": 0
            });
            obj.twoText.css({
                "-webkit-transition": "all .3s ease-in",
                "-webkit-transform": "translate3d(-100%,0,0)",
                "opacity": 0
            });
            obj.twoBg.css({
                "-webkit-transition": "all .3s ease-in",
                "-webkit-transform": "translate3d(0,100%,0)",
            });
            obj.twoBottom.css({
                "-webkit-transition": "all .3s ease-in",
                "-webkit-transform": "translate3d(0,100%,0)",
                "opacity": 0
            });

            // debug.log("111111111111111111111");
            // debug.log("第二场")
            // debug.log("间距" + init.distance);
            // debug.log("场景" + init.matches);
        }
    },
    twoDomReset: function() {

        obj.allTwoDom.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,0,0)",
            "opacity": 1
        });
        obj.twoBg.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,0,0)",
        })
        obj.oneImg_1.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(100%,0,0)",
            "opacity": 0
        });
        obj.oneText.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(-100%,0,0)",
            "opacity": 0
        });
        obj.oneBottom.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,-100px,0)",
            "opacity": 0
        });
        obj.oneBg.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,-100%,0)",
        });
        init.matches = 3;
        init.distance = -100;

    },
    threeDomReset: function() {
        obj.allTwoDom.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,0,0)",
            "opacity": 1
        });
        obj.twoBg.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,0,0)",
        })
        obj.threeImg_1.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,50%,0)",
            "opacity": 0
        });

        obj.allThreeDom.css({
            "-webkit-transition": "all .3s ease-in",
            "opacity": 0
        });
        obj.threeBlock.css({
            "-webkit-transition": "all .3s ease-in",
            "opacity": 0
        });
        obj.threeBottom.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,100px,0)",
            "opacity": 0
        });
        obj.threeBg.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,100%,0)",
        });
    },
    fourDomReset: function() {
        //console.log("44444444444444444")

        obj.allTwoTest.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(-100%,0,0)",
            "opacity": 0
        });

        obj.twoBottom.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,-100%,0)",
            "opacity": 0
        });
        obj.twoBg.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,100%,0)",
        })
        obj.threeImg_1.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,0,0)",
            "opacity": 1
        });
        obj.threeBottom.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,0,0)",
            "opacity": 1
        });
        obj.threeBg.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,0,0)",
        });
        obj.threeBlock.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,0,0)",
            "opacity": 1
        });
        obj.fourbg.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,100%,0)",
        })
        init.distance = -200;
    },
    fiveDomReset: function() {
        mian.arrow(false);

        //console.log("7777")
        obj.allThreeDom.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,-100%,0)",
            "opacity": 0
        });


        obj.threeBg.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,-100%,0)",
        })
        obj.fourbg.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,0,0)",
        });
        obj.fourbg_1.css({
            "-webkit-transition": "all .3s ease-in",
            "-webkit-transform": "translate3d(0,0,0)",
        });
    },

}
var addEvent = { //监听滑动函数
    touchSatrtFunc: function(event) {
        $("div").css({
            "-webkit-transition": ""
        })
        init.sy = event.targetTouches[0].pageY;
        init.onesat = true;
        mian.arrow(false);
        mian.matches();
        console.log("场景" + init.matches)
    },
    touchmoveFunc: function(event) {

        event.preventDefault();
        init.cy = event.targetTouches[0].pageY;
        console.log("累计间隔"+init.oldMove)
        mian.process()

    },
    touchendFunc: function(event) {
         console.log("场景" + init.matches);
         console.log("间隔" + init.distance);


        if (init.sat) {
            init.oldMove = init.distance;
            mian.arrow(true);
            var i = init.matches,
                k = init.distance;
            //debug.log("按钮离开"+k+"场景"+1)
            if (i == 1 && k > 1 || i == 2 && k >= -50 || i == 1 && k > -50) {
                cssfn.oneDomReset();
                cssfn.zhongzhiOne();
                init.oldMove = 0;
            } else if (i == 1 && k <= -50 || i == 2 && k > -150 && k < -50 || i == 3 && k > -200) {
                //console.log("第二场景点击间距"+k)
                console.log("第二场景点击间距" + i)
                if (k <= -50) {
                    cssfn.twoDomReset();
                    cssfn.defaultThree();
                    cssfn.defaultFour();
                }
                init.oldMove = -100;
                cssfn.zhongzhiTwo();
                mian.arrow(true);
            } else if (i == 2 && k <= -150 || i == 3 && k >= -250 || i == 4 && k > -250) {
                // console.log("第三场景点击间距"+k)
                //console.log("第三场景点击间距"+i)
                mian.bgColorOne();
                obj.skip.css("display", "block");
                obj.home.addClass("threeAnime");
                cssfn.fourDomReset();
                init.oldMove = -200;
                cssfn.zhongzhiThree();
                mian.arrow(true);

            } else if (i == 3 && k < -250 || i == 4 && k <= -250) {

                // debug.log("第四幕")
                console.log("324242")
                obj.homebg.css("display", "none")
                init.oldMove = -300;
                obj.allFourDom.css("display", "block");
                obj.home.addClass("fourAnime");
                cssfn.fiveDomReset();

                obj.fourbg_1.css("opacity", 1);
                if (k <= -250) {
                    cssfn.fiveDomReset();
                }
                mian.arrow(false);
                cssfn.zhongzhiFour();

            }
        }



    }
}
addEventListener("touchstart", addEvent.touchSatrtFunc, false); //开始事件
addEventListener("touchmove", addEvent.touchmoveFunc, false); //开始拖动
addEventListener("touchend", addEvent.touchendFunc, false); //拖动结束

mian.start();

$(".skip,#fourBtnTwo").tap(function() {
    var url = "http://tbj.native/appguidecomplete";
    var isCallBack = false;
    //console.log('进入')
    app(url, isCallBack);

});
obj.fourBtnOne.tap(function() {
    var url = "http://tbj.native/regorlogin";
    var isCallBack = false;
    app(url, isCallBack);
    // console.log('进入111')
});

function app(url, isCallBack) {
    if (window.urlproxy) {
        if (isCallBack) {
            urlproxy.invoke(url, "dataCallBack");
        } else {
            urlproxy.invoke(url, "");
        }
    } else {
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            timeout: 300,
            success: function(result) {
                if (isCallBack) {
                    dataCallBack(result);
                }
            },
            error: function(result) {
                console.log(result);
            }
        });
    }
}

function dataCallBack(result) {
    if (window.urlproxy) {
        result = JSON.parse(result);
    };
    init.int = result.hasLoginUser;
    if (init.int == 1) {
        obj.fourBtnOne.css("display", "none");
        obj.fourBtnTwo.addClass("fourBtnOne");
    }

}