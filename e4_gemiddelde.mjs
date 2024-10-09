let scores = [42, 2, 52, 5, 10, -42];
let sum = 0;

for(let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

console.log(`De gemiddelde score is gelijk aan ${sum / scores.length}`)