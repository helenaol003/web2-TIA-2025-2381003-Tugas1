//camelCase

function countCamelCase (s: string): number {
    let count = 1;
    for(let i = 0; i < s.length; i++){
        if( s[i] >= 'A' && s[i] <= 'Z'){
            count++;
        }
    }

    return count;
}

console.log("Jumlah kata dalam camelCase ada: "+ countCamelCase("goodMorningToAllOfUs"));