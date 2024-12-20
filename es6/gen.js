export function* gen(from, to){
    for(let i = from; i <= to; i++){
        console.log('yieldim');
        yield i;
    }
}

function getNumeral(number, discharge){
    return parseInt((number % discharge) / (discharge / 10));
}

export function* getDischarges(number){
    let divider = 10;

    while(number % divider !== number){
        yield getNumeral(number, divider);
        divider *= 10;
    }
    
    yield getNumeral(number, divider);
}