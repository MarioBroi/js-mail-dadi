//console.log('Test');

//MAIL

let email = prompt('Type your E-Mail');
const usersList = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com'];
let login = "You are not registered";
//console.log(email); // Typed text

for (let index = 0; index < usersList.length; index++) {

    if (email === usersList[index]) {
        //console.log("You can join");
        login = "You can join"
    }
}

console.log(login); //login message

// DADI

const min = 1;
const max = 6;
let userRandom = Math.random() * (max - min) + min;
console.log(userRandom); //number for user
let npcRandom = Math.random() * (max - min) + min;
console.log(npcRandom); //number for npc

if (userRandom > npcRandom) {
    console.log('you win');
} else {
    console.log('you lose');
}