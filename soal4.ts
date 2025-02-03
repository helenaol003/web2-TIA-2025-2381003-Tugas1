//stairs

function stairCaseSize (stair: number) {
    const output = "";
    for (let i = 1; i <=stair; i++) {
        let spaces = " ".repeat(stair - 1);
        let hashes = "#".repeat(i);
        console.log(spaces + hashes);
    }
}

stairCaseSize(5);