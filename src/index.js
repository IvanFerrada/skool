
import style from './style.css';
import scrollView from './scroll';
import send from './form';

import logo from './assets/logo.png';
import portada from './assets/portada.jpg';
import nosotros from './assets/nosotros.jpg';

/* Componentes scripts */
// import footerNav from './footerNav';
import img from './img';
/* Componentes scripts */


window.addEventListener('load', () => {
    window.addEventListener('load', img)
    window.addEventListener('scroll', scrollView)
    const btnSend = document.querySelector('#send');
    btnSend.addEventListener("click", send);
    
    // footerNav();
    
    

});


