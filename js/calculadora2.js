// RETORNAN UNA LISTA = ARRAY = ARREGLO = MATRIZ
// document.querySelectorAll()
// document.getElementsByClassName()
// document.getElementsByName()
// document.getElementsByTagName()
// document.getElementsByTagNameNS()

// if (elemento != type) { // (element.target.type != 'button')
//     return false
// } else {
//     return true
// }
// const isValid = (elemento, type) => {
//     return (elemento != type) ? false : true;
// }

// if (!field1.value || !field2.value) {
//     result.value = 'hubo un error 2'
//     return
// }

const field1 = document.getElementsByName('firstValue')[0]
const field2 = document.getElementsByName('secondValue')[0]
const result = document.getElementsByName('resultValue')[0]

const isValid = (elemento, type) => (elemento != type) ? false : true
const isFieldsValids = (val1, val2) => (!val1 || !val2) ? false : true

const calcular = (element) => {
    if (!isValid(element.target.type, 'button')) return
    if (!isFieldsValids(field1.value, field2.value)) return

    const operator = element.target.textContent
    result.value = eval(` ${field1.value} ${operator} ${field2.value}`)
}

document.getElementById('buttons').addEventListener('click', calcular)