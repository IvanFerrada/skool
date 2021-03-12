export default function scrollView (){
    const animationOne = document.getElementById('animation');
    const positionObjecOne =  animationOne.getBoundingClientRect().top;
    console.log(positionObjecOne);

    const animationTwo = document.getElementById('descrition');
    const positionObjecTwo = animationTwo.getBoundingClientRect().top;
    console.log(positionObjecTwo);

 

    
    const sizeScreen = window.innerHeight/1.2;


    if(positionObjecOne < sizeScreen){
       animationOne.style.visibility = 'visible';
       animationOne.style.animation = 'slidein 2s ease-out';
    }

    if(positionObjecTwo < sizeScreen){
        animationTwo.style.visibility = 'visible';
        animationTwo.style.animation = 'descripcion 1s ease-out';
    }

  
    console.log("El ancho es  " + window.innerWidth);
    console.log("El alto es " + window.innerHeight);
};                     