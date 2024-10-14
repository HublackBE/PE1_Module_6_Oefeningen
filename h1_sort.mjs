let numbers = [-1, -42, 112, 2, 42, 1, 10, 18, 21, 42];

let numbersLength = numbers.length; // Used in first for-loop as it needs static start length

let numbersSorted = [];

for(let n = 0; n < numbersLength; n++) {
    numbersSorted.push(numbers[0]); // Pushes first index
    numbers.splice(0, 1); // Removes first index from numbers array
        for(let i = 0; i < numbers.length; i++) { // Use of dynamic numbers.length as length of array decreases
            if (numbers[i] < numbersSorted[n]) {    // Switching both numbers if smaller, allows for lesser iterations
                let biggerNumber = numbersSorted[n]; // Temporary variable to switch both values
                numbersSorted.splice(n, 1, numbers[i]); // Replaces number in numbersSorted array
                numbers.splice(i, 1, biggerNumber); // Replaces number in numbers array
            }
        }
    }

console.log(numbersSorted);