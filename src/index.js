
import style from './style.css';
import scrollView from './scroll';
import send from './form';

import logo from './assets/logo.png';
import portada from './assets/portada.jpg';
import nosotros from './assets/nosotros.jpg';

window.addEventListener('load', () => {
    window.addEventListener('scroll', scrollView)
    const btnSend = document.querySelector('#send');
    btnSend.addEventListener("click", send);
    
    document.getElementById("logo").innerHTML = `<img src="${logo}">`
    document.getElementById("portada").innerHTML =` <img src="${portada}" width="100%" height="600px">`
    document.getElementById("aniThree").innerHTML = `<img src ="${nosotros}" width="90%" height="300px">`
});

