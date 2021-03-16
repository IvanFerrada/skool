
import style from './style.css';
import {scrollView} from './components/scroll';
import {send} from './components/form';



/* Componentes scripts */

import img from './components/img';
import footerNav from './components/footerNav';

/* Componentes scripts */


window.addEventListener('load', () => {
    img();
    window.addEventListener('scroll', scrollView)
    
    const btnSend = document.querySelector('#send');
    btnSend.addEventListener("click", send);
    
    footerNav();
    
    

});


