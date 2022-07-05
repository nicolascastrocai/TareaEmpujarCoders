let btn=document.querySelectorAll('button')
let contenedor=document.querySelector('div')
let numerosA=[1,2,3,4,5,6]
let numerosB=[1,2,3,4,5,6]
let contenedorDado=document.querySelectorAll('h2')



btn[0].addEventListener('click',function(){
    for (let index = 0; index < 10; index++) {
        dado1()
        dado2()
    }
    
    
})

function dado1() {
    return contenedorDado[0].innerHTML+=Math.floor(Math.random() * (7 - 1) + 1) +' ';  
}

function dado2() {
    return contenedorDado[1].innerHTML+=Math.floor(Math.random() * (7 - 1) + 1) +' ';
}

//Ejercicio 2
let contenedor2= document.querySelector('section')
let todosLosNumeros=[]
btn[1].addEventListener('click',function(){
    let numero1=prompt('numero 1')
    let numero2=prompt('numero 2')
    let numero3=prompt('numero 3')
    let numero4=prompt('numero 4')
    let numero5=prompt('numero 5')
    let numero6=prompt('numero 6')
    todosLosNumeros.push(numero1,numero2,numero3,numero4,numero5,numero6)
    console.log(todosLosNumeros);
    todosLosNumeros.reverse()
    imprimir()
})



function imprimir() {
    for (let index = 0; index < 6; index++) {
        contenedor2.innerHTML+='<li>'+todosLosNumeros[index]+'</li>' 
    }

}