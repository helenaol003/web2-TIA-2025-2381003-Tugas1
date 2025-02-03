//plusMinus

function plusMinus (arr: number[]): void {
    const n = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    arr.forEach(num=> {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    });

    console.log((positiveCount / n).toFixed(6));
    console.log((negativeCount / n).toFixed(6));
    console.log((zeroCount / n).toFixed(6));
}

const arr = [-4, 3, -9, 0 , 4, 1];
plusMinus(arr);