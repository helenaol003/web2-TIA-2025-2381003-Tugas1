//roundGrade

function roundGrade (grades: number[]): number[] {
    return grades.map(grade => {
        if (grade < 38) {
            return grade;
        }

        let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        if (nextMultipleOf5 - grade < 3) {
            return nextMultipleOf5;
        }

        return grade;
    });
}

const grades = [73, 67, 38, 33];
console.log(roundGrade(grades));