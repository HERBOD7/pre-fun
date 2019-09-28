var inventor = [...];

//filter
const fifteen = inventor.filter(inventor => {
    if(inventor.year >= 500 && inventor.year < 600){
        return true;
    }
}); 

const fifteen = inventor.filter(inventor => (inventor.year >= 500 && inventor.year < 600));

console.table(fifteen);

//map
const fullname = inventor.map(inventor => `${inventor.firstname} ${inventor.lastname}`);

//sort
const order = inventor.sort(function(a, b){
    if(a.year > b.year){
        return 1;
    } else {
        return -1;
    }
});

const order = inventor.sort((a, b) => a.year > b.year ? 1:-1);

//reduce
var totalyear = 0;
for(var i = 0; i < inventor.length; i++){
    totalyear += inventor[i].year
} 

console.log(totalyear);

const totalyear = inventor.reduce((total, inventor) => {
    return total + (inventor.pass - inventor.year);
}, 0);
//put zero for in the first time when it's not have any result, it return obj obj; 
console.log(totalyear);

//sort inventor by yaer
const oldest = inventor.sort(function(a, b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - a.year;
    return lastGuy > nextGuy ? 1 : -1;
});

console.table(oldest);

// Array.from => for change a type to Array 
//list
const category = document.querySelector('....');
const links = Array.from(category.querySelectorAll('a'));
const de = links.
                map(links => links.textContent)
                filter(streetName => streetName.include('de'));

//sort     
const alpha = people.sort((lastOne, nextOne) => {
    const [aFirst, aLast] = lastOne.split(', ');
    const [bFirst, bLast] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
}); 

//reduce
const data = [...];

const transport = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.log(transport);




