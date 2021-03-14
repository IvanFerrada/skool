export default function footerNav (){

    import { link } from 'fs';
    import data from './assets/data.json';

    const documento = document;

    $ul = documento.getElementById("enlace");

    let menu= "";

    data.links.forEach(el => menu += `<a href="${link[0]}"> ${link[1]}<a/>`);

    $ul.innerHTML = menu;

    $ul.appendChild($ul);
};