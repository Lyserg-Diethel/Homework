/*                             task: isPalindrome                             */
/* -------------------------------------------------------------------------- */
// Да се дефинира функция isPalindrome, която връща "true" ако подадената й
// като аргумент дума е палиндром, и "false" - ако думата не е палиндром.
// Палиндром е дума, която се чете по един и същ начин от ляво надясно и от
// дясно наляво. Пример за палиндром са: мадам, боб, капак.

function isPalindrome(word){
    if(word){
        for(let i=0;i<word.length; i+=1){
            if(word[i] !== word[word.length-i-1]){
                return false;
            }else if(i===word.length-1){
                return true;
            }
        }
    }
}

// примерно извикване:
console.log( isPalindrome("madam") );// true
console.log( isPalindrome("test") ); // false
