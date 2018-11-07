function findCuttedLength (num, allowedLengths){

    allowedLengths = allowedLengths.sort((cur, prev)=>{
        return cur-prev;
    });

    let cuttedLengths = [];

    allowedLengths.forEach((allowedLength)=>{

    });

}

function findPossibleDivisions(array, allowedLengths, lengthUnderCheck){
    let segments = num / lengthUnderCheck;
    let cutShot = num % lengthUnderCheck;
        
    if(allowedLengths.indexOf(cutShot)){
        for(let i=0; i<segments.length; i++){
            cuttedLengths.push(lengthUnderCheck);
        }
        cuttedLengths.push(cutShot);
        return;
    }
    lengthUnderCheck = lengthUnderCheck + segments;
    segments--;


    findPossibleDivisions(array, allowedLengths, );
}
