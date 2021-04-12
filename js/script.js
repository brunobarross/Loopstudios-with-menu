function menuMobile() {
    let tamanhoTela = window.innerWidth;
    let inptMenu = document.getElementById('inptMenu');
    let menu =  document.getElementById('menu-mobile');
    let containerMenu = document.getElementById('nav-menu');

    if(inptMenu.checked == true && tamanhoTela < 739) {
      menu.style.display ="flex";
      containerMenu.style.background="#000"
    } else if (inptMenu.checked == false && tamanhoTela < 739) {
      menu.style.display ="none";
    }

}