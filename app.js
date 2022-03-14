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
console.log(friends);
for(const friend of friends){
    console.log(friend);
}