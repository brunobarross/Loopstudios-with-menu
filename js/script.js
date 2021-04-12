function menuMobile() {
    let tamanhoTela = window.innerWidth;
    let inptMenu = document.getElementById('inptMenu');
    let menu =  document.getElementById('menu-mobile');
    let containerMenu = document.getElementById('nav-menu');
    let intro = document.getElementById('intro');


    if(inptMenu.checked == true && tamanhoTela < 739) {
      menu.style.display ="flex";
      menu.classList.add('animaDiv');
      menu.classList.remove('sobeDiv');
      intro.style.marginTop ="150px";
      intro.style.transition="0.5s";
      inptMenu.style.transform = "rotate(90deg)";
      inptMenu.style.transition = "0.5s";

    } else if (inptMenu.checked == false && tamanhoTela < 739) {
      menu.style.display="none";
      menu.classList.remove('animaDiv');
      intro.style.marginTop ="";
      inptMenu.style.transform = "rotate(0)";
    } else if(tamanhoTela > 739) {
      menu.style.display="flex";
      containerMenu.style.background="none";
      

    }


}