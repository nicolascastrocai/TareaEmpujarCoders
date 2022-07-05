//Primera parte
let primerParrafo=document.getElementById('p1')
let primerEnlace=document.getElementById('enlace1').addEventListener('click',function(){
    primerParrafo.style.display='none'
})

//segunda parte
let segundaImg=document.getElementById('img2')
let segundoEnlace=document.getElementById('enlace2').addEventListener('click',function(){
    segundaImg.classList.add('img2')
})

//tercera parte
let btn=document.querySelector('button')
let tercerImg=document.getElementById('img3')
let tercerEnlace=document.getElementById('enlace3')

tercerEnlace.addEventListener('click',function(){
    tercerImg.classList.add('si')
    btn.style.display='block'
    tercerEnlace.innerHTML='gracias por ejecutar el codigo'
})

btn.addEventListener('click',function(){
    tercerImg.classList.remove('si')
    tercerImg.classList.add('no')
    btn.style.display='none'
    tercerEnlace.innerText='Vuelva pronto'
})

//ultima parte
let ultimoParrafo=document.getElementById('p4')
let ultimoEnlace=document.getElementById('enlace4')
ultimoEnlace.addEventListener('click',function(){
    ultimoParrafo.style.display='none';
    ultimoEnlace.innerText='gracias por ejecutar el codigo!!'
})

