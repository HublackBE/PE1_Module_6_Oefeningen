import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


const playingField = [
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
];
const boatsField = [
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],
];


let moves = 0;

function shoot(x, y) {
    if(x <= 0 || x > 10 || y <= 0 || y > 10) {
        throw Error();
    }else if(playingField[y-1][x-1] == '^' || playingField[y-1][x-1] == '*'){
        console.error('Je hebt op deze coördinaten al geschoten.');
    }else if(boatsField[y-1][x-1] === 'B'){
        playingField[y-1][x-1] = '*';
        boatsField[y-1][x-1] = '~';
        moves++;
    }else {
        playingField[y-1][x-1] = '^';
        moves++;
    }
    console.log(playingField.join('\n').replaceAll(',', ' '));
    console.log(boatsField.join('\n').replaceAll(',', ' '))
}

function boat(x, y, length, direction) {
    // TODO: prevent overlapping boats
    for(let i = 0; i < length; i++) {
        switch(direction.toLowerCase()) {
            case 'up':
                if (boatsField[y - i][x] == 'B') {
                    throw Error();
                }
                break;
            case 'down':
                if (boatsField[y + i][x] == 'B') {
                    throw Error();
                }
                break;
            case 'left':
                if (boatsField[y][x - i] == 'B') {
                    throw Error();
                }
                break;
            case 'right':
                if(boatsField[y][x + i] == 'B'){
                    throw Error();
                }
                break;
            default:
                throw Error();
        }
    }
    for(let i = 0; i <= length - 1; i++){
        if(length < 2 || 5 < length) {
            throw Error();
        } else if(x < 0 || x > 9 || y < 0 || y > 9) {
            throw Error();
        }
        switch(direction.toLowerCase()) {
            case 'up':
                if (y - length < 0) {
                    throw Error();
                }else {
                    boatsField[y - i][x] = 'B';
                    break;
                }
            case 'down':
                if (y + length > 10) {
                    throw Error();
                } else{
                    boatsField[y + i][x] = 'B';
                    break;
                }
            case 'left':
                if (x - length < 0) {
                    throw Error();
                } else{
                    boatsField[y][x - i] = 'B';
                    break;
                }
            case 'right':
                if(x + length > 10){
                    throw Error();
                }else {
                    boatsField[y][x + i] = 'B';
                    break;
                }
            default:
                throw Error();
        }
    }
}

const choices = ['up', 'down', 'left', 'right']

async function boatPlacement(boatsAmount) {
    if (boatsAmount > 20) {
        console.error('The max amount of boats is 20!');
        return await boatPlacement(parseFloat(await userInput.question('Geef een aantal boten in; ')));
    }
    for(let i = 0; i < boatsAmount; i++){
        try {
            boat(Math.floor(Math.random() * 9 + 1), Math.floor(Math.random() * 9 + 1), Math.floor(Math.random() * 5 + 1), choices[Math.floor(Math.random() * 4)]);
        } catch (error) {
            i--;
        }
    }
}


async function shooting(){
    try {
        shoot(parseFloat(await userInput.question('Geef een x-coördinaat in: ')), parseFloat(await userInput.question('Geef een y-coördinaat in: ')));
    }catch(error){
        console.error('Ongeldige coördinaten!');
        await shooting();
    }
    }

await boatPlacement(parseFloat(await userInput.question('Geef een aantal boten in; '))); // Places x numbers of boats randomly
console.log(playingField.join('\n').replaceAll(',', ' '));

let sumBoats = 0;
while(sumBoats !== 10){
    sumBoats = 0;
    await shooting();
    for(let i = 0; i < 10; i++){
        if(boatsField[i].indexOf('B') === -1){
            sumBoats += 1;
        }
    }
}

console.log(`You win! Je hebt ${moves} schotten gemaakt.`);

process.exit();