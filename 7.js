const people = [
    {name:'kevin', year: 1988},
    {name:'vin', year: 1986},
    {name:'kev', year: 2016},

];

const comments =[
    {text:'hiiii', id: 1123},
    {text:'hellllo', id: 4553},
    {text:'heyyyyyy', id: 6663},
];

// Array.some() => check one thing in array 

// const isAdult = people.some(function(){
//     const currentYear = (new Date()).getFullYear();

//     if(currentYear - person.year >= 19 ){
//         return true;
//     }
// });

const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19 );
console.log(isAdult);

// Array.every => check all and do thing for all
const allAdult = people.every(person => (new Date()).getFullYear() - person.year >= 19 );
console.log(allAdult);

// Array.find => find thing in array 

// const commentFind = comments.find(function(comment){
//     if(comment.id === 6663){
//         return true;
//     }
// });

const commentFind = comments.find(comment => comment.id === 6663);
console.log(commentFind);

// Array.findIndex => find where Object in Array or find index of obj

const index = comments.findIndex(comment => comment.id === 6663);
console.log(index);

//????
comments.splice(index, 1);

//???
const newComment = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];


