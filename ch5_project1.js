
let finalTable = [];
let rows = 10;
let columns = 10;

for(i = 0; i < rows; i++) {
    let tempArr = [];
    

    for(j = 0; j < columns; j++) {
        tempArr.push(i * j);
    }

    finalTable.push(tempArr);
}
console.table(finalTable);