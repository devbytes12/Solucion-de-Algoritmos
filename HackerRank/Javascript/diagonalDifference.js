// https://www.hackerrank.com/challenges/diagonal-difference/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
// Reprak11

function diagonalDifference(arr){
    let valor1 = 0;
    let valor2 = 0;
    for (let i in arr){
        valor1 += arr[i][i];
        valor2 += arr[i][arr.length-1-i]
    }
    return Math.abs(valor2-valor1);
}


let n = prompt("n");
n = parseInt(n,10);

let arr = Array(n);


for (let i = 0; i < n; i++){
    arr[i]=prompt("arr");
    arr[i] = arr[i].split(' ').map(arrTemp => parseInt(arrTemp,10));
}
console.log(diagonalDifference(arr));



/** georgedelaselva12 solution **/
function diagonalDifference(arr) {
    // Write your code here
    const matrixLength = arr.length;
    const diagonalA = []
    const diagonalB = []
    let indexA=0;
    let indexB=matrixLength-1;

    let diagonalsDiferences = 0;

    arr.forEach((el,index)=>{
        
        diagonalA.push(el[indexA]);
        diagonalB.push(el[indexB]);
        
        indexA++;
        indexB--;
    })
    console.log(diagonalB)
    let diagonalAsum=0;
    let diagonalBsum =0;
    diagonalA.forEach(val=>diagonalAsum+=val)
    diagonalB.forEach(val=>diagonalBsum+=val)

    return Math.abs(diagonalAsum-diagonalBsum);
}


