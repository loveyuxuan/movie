define([],function(){
    return '<ul class="ul swiper-wrapper">'+
        '<% for(var i=0; i<imgList.length; i++){ %>'+
        '<li class="list-item swiper-slide"><img src="<%= imgList[i].movie_img_url%>" alt=""></li>'+
        '<% } %>'+
        '</ul>';
});


