//birthdayCakeCandles

function birthdayCakeCandles (candles: number[]): number {
    let maxCandleHeight = Math.max(...candles);
    return candles.filter(candle => candle === maxCandleHeight).length;
}

const candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));