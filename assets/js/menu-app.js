document.querySelector('.mainmenu_toggle').onclick = function(){
    let menus = document.querySelector('.menu');
    let sign = document.querySelector('.sign');
    if (menus.classList.contains('none')){
        menus.classList.remove('none');
        sign.classList.remove('none');
    }else{
        menus.classList.add('none');
        sign.classList.add('none');
    }
}

function scrollIt(){
    if(document.body.scrollTop>document.querySelector('.header').clientHeight+1||document.documentElement.scrollTop>document.querySelector('.header').clientHeight+1){
        document.body.querySelector('#main').before(document.querySelector('.header'));
    }else{
        document.body.querySelector('#main').getElementsByTagName("*")[0].before(document.querySelector('.header'));
    }
}

window.onscroll=function(){if(scroller){scrollIt()}};