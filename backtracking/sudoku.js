const cTable = require('console.table');

function solveSudoku(array){
    
    let {row, col} = findUnassignedPosition(array);

    if(row == null){
        return true;
    }

    for(var num=1; num<=9; num++){
        if(isSafeToPlace(array, row, col, num)){
            array[row][col] = num;
            if(solveSudoku(array)){
                return true;
            }
            array[row][col] = 0;
        }
    }
    return false;
}

function findUnassignedPosition(array){
    for(let i=0; i<9; i++){
        for(let j = 0; j<9 ; j++){
            if(array[i][j] == 0){
                return {row: i, col: j};
            }
        }
    }
    return {row: null, col: null};
}

function isSafeToPlace(array, row, col, num){

    // Row
    for(let i=0; i<9; i++){
        if(array[row][i] == num){
            return false;
        }
    }

    // Column
    for(let i=0; i<9; i++){
        if(array[i][col] == num){
            return false;
        }
    }

    // Sub grid
    let start = Math.floor(row/3) * 3;
    let end = Math.floor(col/3) * 3;

    for(let i = start; i< start+3; i++){
        for(let j = end; j< end+3; j++){
            if(array[i][j] == num){
                return false;
            }
        }
    }

    return true;
}

let array = [
    // [8,6,0,0,2,0,0,0,0],
    // [0,0,0,7,0,0,0,5,9],
    // [0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,6,0,8,0,0],
    // [0,4,0,0,0,0,0,0,0],
    // [0,0,5,3,0,0,0,0,7],
    // [0,0,0,0,0,0,0,0,0],
    // [0,2,0,0,0,0,6,0,0],
    // [0,0,7,5,0,9,0,0,0]

    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
];
solveSudoku(array);
console.log(array);