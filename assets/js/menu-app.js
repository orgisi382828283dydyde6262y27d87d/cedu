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