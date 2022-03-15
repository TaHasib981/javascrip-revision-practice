//--------distructure
let animle = undefined
/* {
    name : 'cow',
    color: 'red',
    quantity: 10
} */
let {name, ...hasib} = animle || {}
// console.log(hasib);

//-------------- dilstructure by function 
let animles ={
    names : 'cow',
    colors: 'red',
    quantitys: 10
} 
const sum = (details) => {
 /*    console.log(details.names);
    console.log(details.colors); */
}
sum(animles)

//===================================================================

// nested object of array

const dreamGirl = [
    {
      dream1: {
        name: "bbu",
        height: "5.4",
        family: [{ father: "rock", mother: "shila", sister: "chinki" }],
        age: undefined,
        contactInfo: [
          {
            facebook: {
              link: "https://www.facebook.com/",
              followers: "12545",
              status: "single",
              friendsList: [
                { name: "rofik" },
                { name: "jobbar" },
                { name: "salam" },
                { name: "borkot" },
                // undefined,
              ],
            },
          },
          { instagram: "https://www.instagram.com/" },
          { twitter: "https://twitter.com/" },
          { github: "https://github.com/" },
          { phone: ["01254823212", "02152457"] },
        ],
      },
    },
  ];
const friends = dreamGirl[0].dream1.contactInfo[0].facebook.friendsList
// console.log(friends)
const fndName = []
for(const friend of friends){
    const names = friend.name 
    fndName.push(names)
}
// console.log(fndName);


//=============================for in loop
const object = { a: 1, b: 2, c: 3 };
// console.log(object["a"]);
for(const element in object){
    // console.log(`${element}: ${object[element]}`); 
} 

// =========================== squer with for of 

const numbers = [1, 2, 3, 4, 5,6,7]
const container = []
 
const sub = (total) => {return total * total}

for(const element of numbers){
  const squer  =sub(element)
   container.push(squer)
}
// console.log(container);
// shortcut version for loop 
 const results = numbers.map( (x) => x*x )
//  console.log(results);
const products = [
  { id: 1, name: "apple", price: 500, color: "golden" },
  { id: 2, name: "xiaomi", price: 124, color: "black" },
  { id: 3, name: "samsung", price: 200, color: "black" },
  { id: 4, name: "samsung2", price: 200, color: "black" },
  { id: 5, name: "lenovo", price: 300, color: "pink" },
  { id: 6, name: "xiaomi", price: 100, color: "pink" },
  { id: 7, name: "lenovo", price: 300, color: "pink" },
];

const result=products.filter((x)=>x.id==1)
// console.log(result);
const withoutOne=products.filter((x)=>x.id!=1)
// console.log(withoutOne);


// ========== ternery operator 
const myName = 'hasib'
/* if(myName){
  console.log('this is true value');
}
else{
  console.log('this is not true value');
} */

// ternery 
console.log(myName ? 'this is my name' : 'this is not my name');