/* --------- PARAMETERS/PROPERTIES START --------- */
let form = "formExample"
let tagNameResult = "resultValue"
let operator = "+"
var secondValue;
let jsonFields = { fieldVal1: 'firstValue', fieldVal2: 'secondValue' }
const property = "value"

/* --------- PARAMETERS/PROPERTIES END --------- */


/* --------- METHODS START --------- */

/* document.formularioNombre.atributoCampoNombre.propiedadNombre 
   document.formExample.firstValue.value */

const getProperty = (formName, attrName, property) => document[formName][attrName][property]
const setProperty = (formName, attrName, property, result) => document[formName][attrName][property] = result


const arimeticOperation = (formName, tagName, firstValue, secondValue, operator) => {
    document[formName][tagName].value = eval(`${firstValue} ${operator} ${secondValue}`)
}

const calculate = (e, obj = { fieldVal1: 0, fieldVal2: 0 }) => {
    let jsonForm = {
        firstVal: getProperty(form, obj.fieldVal1, property),
        secondVal: getProperty(form, obj.fieldVal2, property)
    }

    // let text = `${obj.fieldVal1} ${e.target.textContent} ${obj.fieldVal2}`;
    let text = `${jsonForm.firstVal} ${e.target.textContent} ${jsonForm.secondVal}`;
    let result =
        setProperty(form, tagNameResult, property, eval(text))
}

/* --------- METHODS START --------- */

// calculate(evento, jsonFields)