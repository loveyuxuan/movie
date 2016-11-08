define(["jquery","../js/swiper",'../tpl/movie','../lib/template-native',"../lib/template","../lib/iscroll5"],function($, Swiper, tplFile, tpl,stpl,iscroll){
   /* console.log(tp);//模板引擎
    console.log(tpl);//模板*/

    var mainiscoll=new IScroll("#main-lists");
    var req = $.ajax({
        url:"data/data.json",
        success:function(data){
            var textArea=$("#mtql");

            var movielist=data.data.movie_data;

            var render= tpl.compile(tplFile);

            var html=render({imgList:movielist});

            var render2=stpl.compile(textArea.val());

            var html2=render2({list:movielist});

            $(".nav").html(html);
            $(".main-item").html(html2);
            mainiscoll.refresh();
            $(".info-list").each(function(ind,val){
                $(this).find('table').eq(0).siblings().addClass('hide');
            })


            var slides=null;
            var mySwiper=new Swiper(".nav",{
                slidesPerView: "auto",
                freeMode: true,
                onTap:function(c,v){

                    if(!slides) slides=document.querySelector('ul').querySelectorAll(".swiper-slide");
                    for(var i=0;i<slides.length;i++){
                        slides[i].className=slides[i].className.replace(" active","")
                    }

                    var str=c.clickedSlide && c.clickedSlide.className;
                    if(str && str.indexOf(" active")==-1){
                        c.clickedSlide.className=str+" active";
                    }
                    if(mySwiper.slideTo){
                        mySwiper.slideTo(c.clickedIndex,300,function(){
                    })}

                    var timeSwiper=new Swiper(".time-lists",{
                        slidesPerView: "auto",
                        freeMode: true
                    })

                    $('.list-one').eq(c.clickedIndex).removeClass('hide').siblings().addClass('hide');
                },
                onInit:function(a,b){
                    var slides=document.querySelector('ul').querySelectorAll(".swiper-slide");
                    slides[0].className+=" active";
                }

            })


        }
    })



});