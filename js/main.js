// TIPOS DE DATOS EN JAVASCRIPT
let variable1 = "" //string
let variable2 = 1 // number
let variable3 = true // boolean
let variable4 = undefined //undefined
let variable5 = null // null
var variable6 = {} // object
var variable6 = [] // object
let variable7 = () => {} // function  // esta es un arrow function
let variable8 = Symbol() // symbol

let variable; //undefined

// MALEJEMPLO = CODIGO QUEMADO
function getValue() {
    //     document.formExample.campo_valor.value
    return document["formExample"]["campo_valor"]["value"]
}
// BUEN EJEMPLO = CODIGO REUTILIZABLE
function getPropertyExample(formName, fieldName, property) {
    // document.formExample.campovalor.value
    return document[formName][fieldName][property]
}
// EJEMPLOS DE EJECUCION
// console.log("testing", getPropertyExample("formExample", "campovalor", "value"));
// console.log("testing 2", getPropertyExample("formExample2", "campovalor", "value"));
// funcion de flecha VERSION 1
const getValue2 = () => {
    return Number(document.formExample.campo_valor.value)
}

// funcion de flecha VERSION 2 de una sola linea
const getValue3 = () => Number(document.formExample.campo_valor.value)

// Ejemplo de funciones dentro de un objeto
const objeto = {
    getValue3: () => Number(document.formExample.campo_valor.value)
};

// EJEMPLO FUNCION ANÓNIMA + ejemplos de callbacks
const alertar = () => alert("hello")
const callbackEvent = () => setTimeout(alertar, 5000)

const anonimous = function() { return "deploy" }
var anonima = function() {
    console.log("Nuevo mensaje anonimo")
};

// Ejemplo de acceder a el array de getElementsByName
// document.getElementsByName("campovalor")[0].addEventListener("click", callbackEvent)

// // CALLBACK HELL
// const funcionCallback = (argumento, callback) => {
//     /* ... Do something */
//     callback(argumento)
// }
// const getEvent = (parametroCallback) => {
//     /* ... Do something */
//     return parametroCallback()
// }
// getEvent(funcionCallback)

// ejemplo de objetos por clave valor + anidacion de objetos dentro de objetos
let objetoEjemplo = {
    clave: "valor",
    clave2: {
        clave: {
            clave: {
                clave: "texto",
                clave2: 10000
            }
        }
    }
}