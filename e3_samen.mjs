import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let students = [];
let nameInput;

console.log('Geef \'S\' in om te stoppen.')
do{
    nameInput = await userInput.question('Geef een naam in: ');
    if(nameInput !== '') {
        students.push(nameInput);
    }else {
        console.error('Gelieve een naam te typen of \'S\' te typen om te stoppen.')
    }
}while(nameInput !== 'S')
students.pop(); // Removes empty element caused by last (empty) input

for(let i = 0; i < students.length; i++) {
    console.log(`${students[i]}, je bent uitgenodigd om deel te nemen aan de leukste cursus van EhB: Programming Essentials`);
}

process.exit();