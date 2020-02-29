/* -------------------------------------------------------------------------- */
/*                                    task                                    */
/* -------------------------------------------------------------------------- */
// Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от
// четните елементи на подаден й двумерен масив.

let arr = [
    [1,2,3],
    [4,5,6]
];
// >>>> put your code bellow:

function SumEven2DimArrayElements(arr){ //name is not convention-friendly.
    let accumulator = 0;
    for(let i=0;i<arr.length;i+=1){
        for(let j=0; j<arr[i].length;j+=1){
            if(!(arr[i][j]%2)){
                accumulator+=arr[i][j];
            }
        }
    }
    console.log(accumulator);
}

// <<<< end of your code

// Примерно извикване на функцията:
let sum = SumEven2DimArrayElements(arr);
console.log(sum);
// expected output: 12