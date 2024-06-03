alert('Hello World');
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');
 const age = 40;
//  console.log(age);
const name = 'ifeoluwa';
const rating = 4.5;
const isTrue = true;
const y = null;
const x = undefined;
console.log(typeof y);
const hello = ('My name is ' + name + ' and I am ' + age);
console.log(hello);
const r ='Hello World!'
console.log(r.toUpperCase());
// console.log(r.length); number of text
console.log(r.substring(0, 7).toLowerCase()); // substring is used to determine the number of text
console.log(r.split(''));
const s = 'salon, engineer, eat, code';
console.log(s.split(','));
const cana = ['mango', 'loud','colo'];
console.log(cana);
const fruits = ['apples', 'orange', 'banana'];
console.log(fruits);
console.log(fruits[1]);
fruits[3] = 'grapes';
fruits.push('mangoes'); // .push is adding to the last element
fruits.unshift('strawberries'); // .unshift to add to the first element if not indicated in the array
// fruits.pop(); is for removing the last element in an array
console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'))
// Array is array is to confirm if an element is in array
console.log(fruits.indexOf('banana')); // indexof determines the value of an element in an array
const person = {
    firstName: 'ifeoluwa',
    lastName: 'osho',
    age: 40,
    hobbies: ['music', 'movies', 'football'],
    address: {
        street: '40 irewon st',
        city: 'Ijebu',
        state: 'ogun state',
    }
}
console.log(person.firstName, person.lastName);
console.log(person);
console.log(person.hobbies[2]); // targeting in the array
person.email = 'oshopizu@gmail.com'; // adding properties in array
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    }
];
console.log(todos);
console.log(todos[1].text);
const todoJSON = JSON.stringify(todos);
console.log(todoJSON); // JSON is used to send data to a server
for(let i = 0; i <= 10; i++) {
    console.log(i)
    console.log('For Loop Number: ${i}');
}
// for looping elements together
let i = 0;
while(i < 10) {
    console.log('While Loop Number: ${i}');
    i++;
}
for(let tea of todos) {
    console.log(tea.text);
    console.log(tea.id);
    console.log(tea.isCompleted);
    // for looping arrays
}
const teaText = todos.map(function(tea) { 
    return tea.text;
    // retur
});
console.log(teaText);
const teaCompleted = todos.filter(function(tea) {
     return tea.isCompleted === true;
     // using function to compare either true or false
}).map(function(tea) {
    return tea.text;
})
console.log(teaCompleted);
// document.getElementById("Outer").addEventListener("click", function(event){
//     console.log("Inner div clicked!");
// }, true);
// document.getElementById("inner").addEventListener("click", function(event){
//     console.log("Inner div clicked!");
// } );


















