function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function sum(number){
  total += number;
}

function cloneObject(prop){
  clonePerson[prop] = person[prop];
};


/* foreach to add numbers */
let numbers = Array.from({length: 20}, (v, k) => getRandomInt(k, 100));

console.log("numbers:", numbers);

let total = 0;
numbers.forEach(sum);

console.log('total :', total);

/* forEach to  clone objects */
let clonePerson = {};
let person = {
  name:"Leonardo",
  surname:"Rivaldo",
  age:31,
  marige:{
    wifes_name:"Juliete",
    wifes_surname:"Rivaldo",
    age:30
  },
  dogs:{
    dog_1:"Drogo",
    dog_2:"Thanos"
  }
}
console.log("\n\n####\n\n");
console.log('person ->', require('util').inspect(person, { depth: null }));

/* cloning */
Object.keys(person).forEach(cloneObject);


console.log('clonePerson ->', require('util').inspect(clonePerson, { depth: null }));
