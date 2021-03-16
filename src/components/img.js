import logo from '../assets/logo.png';
import portada from '../assets/portada.jpg';
import nosotros from '../assets/nosotros.jpg';

export default function img (){

    document.getElementById("logo").innerHTML = `<img src="${logo}">`
    document.getElementById("portada").innerHTML =` <img src="${portada}" width="100%" height="600px">`
    document.getElementById("aniThree").innerHTML = `<img src ="${nosotros}" width="90%" height="300px">`
 
}