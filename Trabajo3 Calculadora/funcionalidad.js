var operandoa
var operanbob
var operacion
var r

//variable de la pantalla de la calculadora
var pantalla = document.getElementById('pantallaGeneral')

//variables de los botones numericos de la calculadora
var numeros= document.getElementsByName('numeros')

//variables de los botones especiales de la calculadora
var mas= document.getElementById('mas')
var menos= document.getElementById('menos')
var por= document.getElementById('por')
var dividir= document.getElementById('dividir')
var reset= document.getElementById('reset')

var igual= document.getElementById('igual')

//evento  para agregarle funcionalidad a los botones de la calculadora

numeros.forEach(numero => {
numero.addEventListener('click',function(){
    console.log(numero);
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
    pantalla.innerText+='-' 
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
    var resultado= parseFloat(operandoa) + parseFloat(operanbob) 
    pantalla.innerText=resultado
  }
  if (operacion=='-') {
    var resultado= parseFloat(operandoa) - parseFloat(operanbob) 
    pantalla.innerText=resultado
  }

  if (operacion=='/') {
    var resultado= parseFloat(operandoa) / parseFloat(operanbob) 
    pantalla.innerText=resultado
  }

  if (operacion=='*') {
    var resultado= parseFloat(operandoa) * parseFloat(operanbob) 
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
