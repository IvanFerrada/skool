import data from '../data.json';

export default function footerNav (){

    let form = document.getElementById('enlaces');
    
    let li = document.createElement('nav');
    let menu = "";
  
    data.links.forEach((e) => (menu += `<a href = "${e[1]}">${e[0]}</a>`)); 
    li.innerHTML = menu;
    
    form.appendChild(li);
    li.classList.add('menu');

    
    
   
};