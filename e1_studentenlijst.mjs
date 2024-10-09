import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let names = [];
let nameInput;

console.log('Geef \'S\' in om te stoppen.')
do{
    nameInput = await userInput.question('Geef een naam in: ');
    if(nameInput !== '') {
        names.push(nameInput);
    }else {
        console.error('Gelieve een naam te typen of \'S\' te typen om te stoppen.')
    }
}while(nameInput !== 'S')
names.pop(); // Removes empty element caused by last (empty) input

console.log(names);

process.exit();