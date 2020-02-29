/* -------------------------------------------------------------------------- */
/*                            task: generateRandomNumber                      */
/* -------------------------------------------------------------------------- */
// Да се дефинира функцията generateRandomNumber(start, end), която генерира
// цяло случайно число в интервала, зададен чрез параметрите start и end.
// Hint: използвайте Math.random() функцията за генериране на случайно число.

function generateRandomNumber(start,end){
    let randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
        console.log(randomNumber);   

    return randomNumber;
}

// примерно извикване:
let randomNumber = generateRandomNumber(1,100);
console.log( randomNumber );
// randomNumber трябва да е цяло число, като 1 >= randomNumber <=100


// }    console.log(((Math.random()).toFixed(2)*100))