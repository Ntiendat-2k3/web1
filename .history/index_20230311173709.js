let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
     menu.classList.toggle('bx-x');
     navbar.classList.toggle('open');
}

window.onscroll = () => {
     menu.classList.remove('bx-x');
     navbar.classList.remove('open');
}

let darkmode = document.querySelector('#darkmode');
darkmode.onclick = () => {
     if(darkmode.classList.contains('bx-moon')){
          darkmode.classList.re
     }
}