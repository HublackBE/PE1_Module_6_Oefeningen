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
]


function shoot(x, y) {
    playingField[y-1][x-1] = '*';
    console.log(playingField);
    console.log(playingField.join('\n').replaceAll(',', ' '));
}

function boat(x, y, length, direction) {
    for(let i = 0; i <= length - 1; i++){
        if(length < 2 || 5 < length) {
            return console.error('Ongeldige lengte.');
        } else if(x <= 0 || x > 10 || y <= 0 || y > 10) {
            return console.error('Ongeldige coördinaten')
        }
        switch(direction.toLowerCase()) {
            case 'up':
                if (y - length < 0) {
                    return console.error('Niet genoeg plaats.')
                }else {
                    playingField[y - 1 - i][x - 1] = 'B';
                    break;
                }
            case 'down':
                if (y + length > 10) {
                    return console.error('Niet genoeg plaats.')
                } else{
                    playingField[y - 1 + i][x - 1] = 'B';
                    break;
                }
            case 'left':
                if (x - length < 0) {
                    return console.error('Niet genoeg plaats.')
                } else{
                    playingField[y - 1][x - 1 - i] = 'B';
                    break;
                }
            case 'right':
                if(x + length > 10){
                    return console.error('Niet genoeg plaats.')
                }else {
                    playingField[y - 1][x - 1 + i] = 'B';
                    break;
                }
            default:
                return console.error('Ongeldige richting.');
        }
    }
    console.log(playingField.join('\n').replaceAll(',', ' '));
}

boat(8, 5, 5, 'down');