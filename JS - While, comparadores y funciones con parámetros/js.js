let btn = document.querySelector('button')

btn.addEventListener('click',function(){
    let numero1=Number( prompt('cual es tu primer numer'))
    let numero2=Number( prompt('cual es tu segundo numero'))
    numeroUsuario(numero1,numero2)
})

function numeroUsuario(valor1,valor2) {
    let resultado= valor1 + valor2
    if (resultado > 10) {
        alert('tu numero es valido '+ resultado)
    }
}

let btn2= document.getElementById('boton')
let lista
let listDeComprar=[]
btn2.addEventListener('click',function(){
while (lista !='fin') {
    lista= prompt('cual es tu producto')
    let espacioBlanco=lista.trim()
    if (lista!='fin') {    
        listDeComprar.push(espacioBlanco)
        console.log(listDeComprar)
    }
    
}
})

