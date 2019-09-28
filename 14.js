let age= 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

const player = ['alison', 'jak', 'linus', 'stallman'];
const team = player;
console.log(player, team);
team[1] = 'touring';
console.log(player, team);
const team2 = player.slice();
const team3 = [].concat(player);
const team4 = [...player];
team4[0] = 'nuix';
console.log(team4);
const team5 = Array.from(player);

const person = {
    name : 'linus',
    job: 'softwareengineer',
    age : 50
}
const captain = person;
captain.name = 'stalman'
const cap2 = Object.assign({}, person, {religion: finland, now: silliconVally});
console.log(cap2);
const mra = {
    name: 'mra',
    job: 'engineer',
    age: '20',
    behavior: {
        antisocail: 'ya',
        geek: 'ya'
    }
}
console.log(mra);
//if change one thing similar in behavior then in mra will be change
const dev = Object.assign({}, mra);
const dev2 = JSON.parse(JSON.stringify(mra));