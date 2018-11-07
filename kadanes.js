var argv = require('minimist')(process.argv.slice(2));

function findMaxSum(array){
    let overAllMax = array[0], maxOfCurrentElement;
    array.forEach((element, index) => {
        let sumWithPreviousValue = element + (maxOfCurrentElement ? maxOfCurrentElement : 0);
        maxOfCurrentElement = (element >= sumWithPreviousValue) ? element : sumWithPreviousValue;
        overAllMax = overAllMax < maxOfCurrentElement ? maxOfCurrentElement : overAllMax;
    });
    console.log(overAllMax);
}

findMaxSum(argv.a.split(',').map(e=>+e.trim()));