function app(t,o){window.urlproxy?o?urlproxy.invoke(t,"dataCallBack"):urlproxy.invoke(t,""):$.ajax({url:t,type:"POST",dataType:"json",timeout:300,success:function(t){o&&dataCallBack(t)},error:function(t){console.log(t)}})}function dataCallBack(t){window.urlproxy&&(t=JSON.parse(t)),init["int"]=t.hasLoginUser,1==init["int"]&&(obj.fourBtnOne.css("display","none"),obj.fourBtnTwo.addClass("fourBtnOne"))}var init={ky:1,jy:100,ry:-100,fy:-1,sat:!1,onesat:!0,twosat:!0,matches:1,distance:0,friction:2,n:0,oldMove:0},obj={body:$("body"),arrow:$(".arrow"),longding:$(".longding"),oneBackground:$(".oneBackground"),home:$(".home"),skip:$(".skip"),oneImg_1:$("#oneImg_1"),oneText:$("#oneText"),oneTime:$(".oneTime"),oneNum:$(".oneNum"),oneTxt:$(".oneTxt"),oneBottom:$("#oneBottom"),allOneDom_1:$(".allOneDom"),twoImg_1:$("#twoImg_1"),twoBottom:$("#twoBottom"),twoText:$("#twoText"),threeImg_1:$("#threeImg_1"),threeImgDiv:$(".souYi,.allMoney,.recoveryNum"),souYi:$(".souYi"),recoveryNum:$(".recoveryNum"),allMoney:$(".allMoney"),recoveryNum:$(".recoveryNum"),threeBottom:$("#threeBottom"),threeBlock:$(".threeBlock"),allOneDom:$("#oneText,#oneImg_1,.oneTime,.oneNum,.oneTxt,#oneBottom"),allTwoDom:$("#twoImg_1,#twoBottom,#twoText"),allTwoTest:$("#twoImg_1,#twoText"),allThreeDom:$("#threeImg_1,#threeBottom"),allThreeTest:$(".souYi,.allMoney,.recoveryNum"),allFourDom:$(".fourBtn,.fourBtn_1,.fourTime,.fourText_1,.fourText_2"),allFourDomClass:$(".fourText,.four"),fourText:$(".fourText"),fourText_1:$(".fourText_1"),fourText_2:$(".fourText_2"),fourBtnOne:$("#fourBtnOne"),fourBtnTwo:$("#fourBtnTwo"),fourBtn:$(".fourBtn "),homebg:$(".homebg"),oneBg:$(".one"),twoBg:$(".two"),threeBg:$(".three"),fourbg_1:$(".fourbg_1"),fourbg:$(".four")},mian={start:function(){console.log("message0");var t="http://tbj.native/hasloginuser",o=!0;app(t,o),init.wh=$(window).width(),init.wh>400&&(init.friction=2*init.friction),obj.oneBackground.addClass("oneAnime"),obj.allOneDom.bind("webkitAnimationEnd",function(){console.log("allOneDom"+this.nodeValue),$(this).css("opacity",1)}),obj.threeImgDiv.bind("webkitAnimationStart",function(){console.log("threeimgdiv"),obj.threeImgDiv.css("opacity",1)}),obj.fourBtn.bind("webkitAnimationStart",function(){console.log("fourbtn"),mian.arrow(!1)}),obj.allFourDom.bind("webkitAnimationStart",function(){console.log("allfourDom"),$(this).css("opacity",1)}),obj.oneTxt.bind("webkitAnimationEnd",function(){console.log("开始判断"),setTimeout(function(){obj.arrow.addClass("arrowInDown"),init.sat=!0},200)})},arrow:function(t){t?obj.arrow.addClass("arrowInDown"):obj.arrow.removeClass("arrowInDown")},kaiGuanOne:function(){init.sat?1==init.matches&&init.distance>1||2==init.matches&&init.distance>1?(cssfn.oneAnimationDom(1,0,0,0,0,100,0),init.oldMove=0,init.kaiguan=!1):1==init.matches&&init.distance<=-100||3==init.matches&&init.distance>=-100?(init.oldMove=-100,cssfn.defaultThree(),cssfn.oneAnimationDom(0,-100,-100,-100,-100,0,1),init.kaiguan=!1):2==init.matches&&init.distance<=-200||4==init.matches&&init.distance>=-200?(cssfn.defaultTwo(),cssfn.defaultFour(),cssfn.twoAnimationDom(0,-100,-100,-100,-100,0,0,1,1),init.kaiguan=!1):3==init.matches&&init.distance<-300||4==init.matches&&init.distance<-300?(init.oldMove=-300,init.kaiguan=!1,cssfn.threeAnimationDom(0,-100,-100,-100,-100,0,1)):init.kaiguan=!0:init.kaiguan=!1},matches:function(){1==obj.oneImg_1.css("opacity")?init.matches=1:1==obj.twoImg_1.css("opacity")?init.matches=2:1==obj.threeImg_1.css("opacity")?init.matches=3:1==obj.fourbg_1.css("opacity")&&(init.matches=4)},throttle:function(t,o){clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){},o)},fomatFloat:function(t,o){return Math.round(t*Math.pow(10,o))/Math.pow(10,o)},process:function(){mian.touchmove()},bgColorOne:function(){clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){obj.body.css("background-color","#362b6a")},50)},bgChoice:function(){clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){init.distance>=-250?(obj.homebg.css("display","block"),obj.fourbg_1.css("display","none"),obj.skip.css("display","block"),obj.fourBtn.css("display","none")):init.distance<=-250&&(obj.fourBtn.css("display","block"),obj.homebg.css("display","none"),obj.fourbg_1.css("display","block"),obj.skip.css("display","none"))},5)},bgColorfour:function(){obj.allFourDom.css("display","none")},debug:function(){clearTimeout(this.debug),this.debug=setTimeout(function(){debug.log("触发间距"+init.distance)},100)},touchmove:function(){init.distance=init.cy/init.friction-init.sy/init.friction+init.oldMove,mian.kaiGuanOne(),init.kaiguan&&(mian.bgChoice(),init.abs=Math.abs(init.distance),1==init.matches&&init.distance<1||2==init.matches&&init.distance>-100?(init.opacityTwe=mian.fomatFloat(init.abs/100,1),init.opacity=mian.fomatFloat(1-init.abs/100,1),init.right=2*init.abs,init.left=2*-init.abs,init.top=-init.abs/20,init.oneY=-init.abs,init.twoY=100-init.abs,cssfn.oneAnimationDom(init.opacity,init.right,init.left,init.top,init.oneY,init.twoY,init.opacityTwe)):2==init.matches&&init.distance<1||3==init.matches&&init.distance>-200?(3==init.matches&&init.distance>-200&&(mian.bgColorfour(),obj.home.removeClass("threeAnime")),init.opacityTwe=mian.fomatFloat((init.abs-100)/100,1),init.opacity=mian.fomatFloat(2-init.abs/100,1),init.oneY=-init.abs+100,init.left=init.abs-100,init.top=(-init.abs+100)/20,init.twoY=200-init.abs,init.threeY=200-init.abs,init.opacityThree=mian.fomatFloat((init.abs-100)/100,1),init.right=2*(init.abs-100),cssfn.twoAnimationDom(init.opacity,init.right,init.left,init.top,init.oneY,init.twoY,init.threeY,init.opacityTwe,init.opacityThree)):(3==init.matches&&init.distance<1||4==init.matches&&init.distance>-300)&&(4==init.matches&&init.distance>-300?(mian.bgColorfour(),obj.home.removeClass("fourAnime")):obj.home.removeClass("threeAnime"),obj.body.css("background-color","#5a5fb9"),init.opacityTwe=mian.fomatFloat((init.abs-200)/100,1),init.opacity=mian.fomatFloat(3-init.abs/100,1),init.oneY=-init.abs+200,init.left=init.abs-200,init.top=(-init.abs+200)/20,init.twoY=300-init.abs,cssfn.threeAnimationDom(init.opacity,init.right,init.left,init.top,init.oneY,init.twoY,init.threeY,init.opacityTwe)))}},cssfn={oneAnimationDom:function(t,o,i,n,e,s,a){obj.oneImg_1.css({"-webkit-transform":"translate3d("+o+"px,0,0)",opacity:""+t}),obj.oneText.css({"-webkit-transform":"translate3d("+i+"px,0,0)",opacity:""+t}),obj.oneBottom.css({"-webkit-transform":"translate3d(0,"+e+"px,0)",opacity:""+t}),obj.oneBg.css({"-webkit-transform":"translate3d(0,"+e+"%,0)"}),obj.twoBg.css({"-webkit-transform":"translate3d(0,"+s+"%,0)"}),obj.twoImg_1.css({"-webkit-transform":"translate3d(0,"+s+"%,0)",opacity:""+a}),obj.twoText.css({"-webkit-transform":"translate3d(-"+s+"%,0,0)",opacity:""+a}),obj.twoBottom.css({"-webkit-transform":"translate3d(0,"+s+"px,0)",opacity:""+a})},twoAnimationDom:function(t,o,i,n,e,s,a,r,c){console.log("哈哈"+init.distance),(init.distance>-200||init.distance<-200)&&(obj.home.removeClass("threeAnime"),obj.threeImgDiv.css({opacity:"0"}),obj.allFourDom.css({opacity:"0"})),obj.twoImg_1.css({"-webkit-transform":"translate3d("+e+"%,0,0)",opacity:""+t}),obj.twoText.css({"-webkit-transform":"translate3d("+i+"px,0,0)",opacity:""+t}),obj.twoBottom.css({"-webkit-transform":"translate3d(0,"+e+"px,0)",opacity:""+t}),obj.twoBg.css({"-webkit-transform":"translate3d(0,"+e+"%,0)"}),obj.threeBg.css({"-webkit-transform":"translate3d(0,"+s+"%,0)"}),obj.threeImg_1.css({"-webkit-transform":"translate3d(0,"+a+"%,0)",opacity:""+r}),obj.threeBottom.css({"-webkit-transform":"translate3d(0,"+s+"%,0)",opacity:""+r})},threeAnimationDom:function(t,o,i,n,e,s,a,r){init.distance>-300&&obj.allFourDom.css({opacity:"0"}),init.distance<-300&&obj.threeImgDiv.css({opacity:"0"}),obj.home.removeClass("threeAnime"),obj.threeBlock.css({opacity:"0"}),obj.threeBg.css({"-webkit-transform":"translate3d(0,"+e+"%,0)"}),obj.threeImg_1.css({"-webkit-transform":"translate3d(0,"+e+"%,0)",opacity:""+t}),obj.threeBottom.css({"-webkit-transform":"translate3d(0,"+e+"%,0)",opacity:""+t}),obj.fourbg.css({"-webkit-transform":"translate3d(0,"+s+"%,0)"}),obj.fourbg_1.css({opacity:""+r})},defaultThree:function(){obj.allThreeDom.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,100%,0)",opacity:"0"}),obj.threeBlock.css({opacity:"0"}),obj.threeBg.css({"-webkit-transform":"translate3d(0,100%,0)"})},defaultTwo:function(){obj.allTwoDom.css({opacity:"0","-webkit-transform":"translate3d(0,100%,0)"}),obj.twoBg.css({"-webkit-transform":"translate3d(0,-100%,0)"})},defaultFour:function(){obj.fourbg.css({"-webkit-transform":"translate3d(0,100%,0)"})},zhongzhiOne:function(){obj.fourbg.css({"-webkit-transform":"translate3d(0,100%,0)"}),obj.twoImg_1.css({"-webkit-transform":"translate3d(0,100%,0)",opacity:0}),obj.twoText.css({"-webkit-transform":"translate3d(-100%,0,0)",opacity:0}),obj.twoBg.css({"-webkit-transform":"translate3d(0,100%,0)"}),obj.twoBottom.css({"-webkit-transform":"translate3d(0,100%,0)",opacity:0}),obj.fourbg.css({"-webkit-transform":"translate3d(0,100%,0)"})},zhongzhiTwo:function(){obj.fourbg.css({"-webkit-transform":"translate3d(0,100%,0)"}),obj.oneText.css({"-webkit-transform":"translate3d(-100%,0,0)",opacity:0}),obj.oneBottom.css({"-webkit-transform":"translate3d(0,-100px,0)",opacity:0}),obj.oneBg.css({"-webkit-transform":"translate3d(0,-100%,0)"}),obj.allThreeDom.css({"-webkit-transform":"translate3d(0,-100%,0)",opacity:0}),obj.threeBg.css({"-webkit-transform":"translate3d(0,-100%,0)"}),obj.oneImg_1.css({opacity:0}),obj.fourbg.css({"-webkit-transform":"translate3d(0,100%,0)"})},zhongzhiThree:function(){obj.fourbg.css({"-webkit-transform":"translate3d(0,100%,0)"}),obj.oneText.css({"-webkit-transform":"translate3d(-100%,0,0)",opacity:0}),obj.oneBottom.css({"-webkit-transform":"translate3d(0,-100px,0)",opacity:0}),obj.oneBg.css({"-webkit-transform":"translate3d(0,-100%,0)"}),obj.twoImg_1.css({"-webkit-transform":"translate3d(-100%,0,0)",opacity:0}),obj.twoBg.css({"-webkit-transform":"translate3d(0,100%,0)"}),obj.twoBottom.css({opacity:0}),obj.oneImg_1.css({opacity:0}),obj.fourbg.css({"-webkit-transform":"translate3d(0,100%,0)"})},zhongzhiFour:function(){obj.oneImg_1.css({opacity:0}),obj.oneText.css({"-webkit-transform":"translate3d(-100%,0,0)",opacity:0}),obj.oneBottom.css({"-webkit-transform":"translate3d(0,-100px,0)",opacity:0}),obj.oneBg.css({"-webkit-transform":"translate3d(0,-100%,0)"}),obj.twoImg_1.css({"-webkit-transform":"translate3d(-100%,0,0)",opacity:0}),obj.twoBg.css({"-webkit-transform":"translate3d(0,100%,0)"}),obj.twoBottom.css({"-webkit-transform":"translate3d(0,100%,0)",opacity:0}),obj.allThreeDom.css({"-webkit-transform":"translate3d(0,-100%,0)",opacity:0}),obj.threeBg.css({"-webkit-transform":"translate3d(0,-100%,0)"})},oneDomReset:function(){init.distance<0&&(obj.oneImg_1.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,0,0)",opacity:1}),obj.oneText.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,0,0)",opacity:1}),obj.oneBottom.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,0%,0)",opacity:1}),obj.oneBg.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,0,0)"}),obj.twoImg_1.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,100%,0)",opacity:0}),obj.twoText.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(-100%,0,0)",opacity:0}),obj.twoBg.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,100%,0)"}),obj.twoBottom.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,100%,0)",opacity:0}))},twoDomReset:function(){obj.allTwoDom.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,0,0)",opacity:1}),obj.twoBg.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,0,0)"}),obj.oneImg_1.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(100%,0,0)",opacity:0}),obj.oneText.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(-100%,0,0)",opacity:0}),obj.oneBottom.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,-100px,0)",opacity:0}),obj.oneBg.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,-100%,0)"}),init.matches=3,init.distance=-100},threeDomReset:function(){obj.allTwoDom.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,0,0)",opacity:1}),obj.twoBg.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,0,0)"}),obj.threeImg_1.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,50%,0)",opacity:0}),obj.allThreeDom.css({"-webkit-transition":"all .3s ease-in",opacity:0}),obj.threeBlock.css({"-webkit-transition":"all .3s ease-in",opacity:0}),obj.threeBottom.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,100px,0)",opacity:0}),obj.threeBg.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,100%,0)"})},fourDomReset:function(){obj.allTwoTest.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(-100%,0,0)",opacity:0}),obj.twoBottom.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,-100%,0)",opacity:0}),obj.twoBg.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,100%,0)"}),obj.threeImg_1.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,0,0)",opacity:1}),obj.threeBottom.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,0,0)",opacity:1}),obj.threeBg.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,0,0)"}),obj.threeBlock.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,0,0)",opacity:1}),obj.fourbg.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,100%,0)"}),init.distance=-200},fiveDomReset:function(){mian.arrow(!1),obj.allThreeDom.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,-100%,0)",opacity:0}),obj.threeBg.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,-100%,0)"}),obj.fourbg.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,0,0)"}),obj.fourbg_1.css({"-webkit-transition":"all .3s ease-in","-webkit-transform":"translate3d(0,0,0)"})}},addEvent={touchSatrtFunc:function(t){$("div").css({"-webkit-transition":""}),init.sy=t.targetTouches[0].pageY,init.onesat=!0,mian.arrow(!1),mian.matches(),console.log("场景"+init.matches)},touchmoveFunc:function(t){t.preventDefault(),init.cy=t.targetTouches[0].pageY,console.log("累计间隔"+init.oldMove),mian.process()},touchendFunc:function(t){if(console.log("场景"+init.matches),console.log("间隔"+init.distance),init.sat){init.oldMove=init.distance,mian.arrow(!0);var o=init.matches,i=init.distance;1==o&&i>1||2==o&&i>=-50||1==o&&i>-50?(cssfn.oneDomReset(),cssfn.zhongzhiOne(),init.oldMove=0):1==o&&-50>=i||2==o&&i>-150&&-50>i||3==o&&i>-200?(console.log("第二场景点击间距"+o),-50>=i&&(cssfn.twoDomReset(),cssfn.defaultThree(),cssfn.defaultFour()),init.oldMove=-100,cssfn.zhongzhiTwo(),mian.arrow(!0)):2==o&&-150>=i||3==o&&i>=-250||4==o&&i>-250?(mian.bgColorOne(),obj.skip.css("display","block"),obj.home.addClass("threeAnime"),cssfn.fourDomReset(),init.oldMove=-200,cssfn.zhongzhiThree(),mian.arrow(!0)):(3==o&&-250>i||4==o&&-250>=i)&&(console.log("324242"),obj.homebg.css("display","none"),init.oldMove=-300,obj.allFourDom.css("display","block"),obj.home.addClass("fourAnime"),cssfn.fiveDomReset(),obj.fourbg_1.css("opacity",1),-250>=i&&cssfn.fiveDomReset(),mian.arrow(!1),cssfn.zhongzhiFour())}}};addEventListener("touchstart",addEvent.touchSatrtFunc,!1),addEventListener("touchmove",addEvent.touchmoveFunc,!1),addEventListener("touchend",addEvent.touchendFunc,!1),mian.start(),$(".skip,#fourBtnTwo").tap(function(){var t="http://tbj.native/appguidecomplete",o=!1;app(t,o)}),obj.fourBtnOne.tap(function(){var t="http://tbj.native/regorlogin",o=!1;app(t,o)});