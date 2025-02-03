//valleyCount

function valleyCount (steps: number, path: string): number {
    let seaLevel = 0;
    let valleys = 0;
    let currentLevel = 0;

    for(let step of path) {
        if (step === 'U') {
            currentLevel++;
        } else {
            currentLevel--;
        }

        if (currentLevel === 0 && step ==='U') {
            valleys++;
        }
    }

    return valleys;
}

const steps = 8;
const path = "UDDDUDUU";
console.log(valleyCount(steps, path));