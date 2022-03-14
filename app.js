let animle = undefined
/* {
    name : 'cow',
    color: 'red',
    quantity: 10
} */
let {name, ...hasib} = animle || {}
console.log(hasib);

//-------------- dilstructure by function 
let animles ={
    names : 'cow',
    colors: 'red',
    quantitys: 10
} 
const sum = (details) => {
    console.log(details.names);
    console.log(details.colors);
}
sum(animles)
