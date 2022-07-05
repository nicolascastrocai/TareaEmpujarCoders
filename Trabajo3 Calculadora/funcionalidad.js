let operandoa
let operanbob
let operacion
let r

//variable de la pantalla de la calculadora
let pantalla = document.getElementById('pantallaGeneral')

//variables de los botones numericos de la calculadora
let numeros= document.getElementsByName('numeros')

//variables de los botones especiales de la calculadora
let mas= document.getElementById('mas')
let menos= document.getElementById('menos')
let por= document.getElementById('por')
let dividir= document.getElementById('dividir')
let reset= document.getElementById('reset')

let igual= document.getElementById('igual')

//evento  para agregarle funcionalidad a los botones de la calculadora

numeros.forEach(numero => {
numero.addEventListener('click',function(){
    if (r== 0) {
        pantalla.innerText=''
        r=1
    }
    pantalla.innerText+=numero.innerText
})
});

//le agregamos la funcionalidad a cada boton dependiendo de la operacion
mas.addEventListener('click',function(){
    operandoa=parseFloat(pantalla.innerText)
    console.log(parseFloat(operandoa))
    operacion='+'
    pantalla.innerText+='+' 
})

menos.addEventListener('click',function(){
    operandoa=parseFloat(pantalla.innerText)
    console.log(parseFloat(operandoa))
    operacion='-'
    pantalla.innerText+='-' 
})

dividir.addEventListener('click',function(){
    operandoa=parseFloat(pantalla.innerText)
    console.log(parseFloat(operandoa))
    operacion='/'
    pantalla.innerText+='/' 
})

por.addEventListener('click',function(){
    operandoa=parseFloat(pantalla.innerText)
    console.log(parseFloat(operandoa))
    operacion='*'
    pantalla.innerText+='*' 
})

//le asiganmos al = la funcion para podes realizar la operacion-
//dependiendo del operador asignado 
igual.addEventListener('click',function(){
  operanbob=parseFloat(pantalla.innerText)
  if (operacion=='') {
    pantalla.innerText=''
  }
  
  if (operacion=='+') {
    let resultado= parseFloat(operandoa) + parseFloat(operanbob) 
    pantalla.innerText=resultado
  }
  if (operacion=='-') {
    let resultado= parseFloat(operandoa) - parseFloat(operanbob) 
    pantalla.innerText=resultado
  }

  if (operacion=='/') {
    let resultado= parseFloat(operandoa) / parseFloat(operanbob) 
    pantalla.innerText=resultado
  }

  if (operacion=='*') {
    let resultado= parseFloat(operandoa) * parseFloat(operanbob) 
    pantalla.innerText=resultado
  }
  operandoa=0
  operandob=0
  operacion=''
  r=0
})

reset.addEventListener('click',function(){
    pantalla.innerText=''
    operandoa=0
    operanbob=0
    operacion=''
    r=0
})
