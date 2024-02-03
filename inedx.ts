function random(max:number,min?:number){
    min = min || 0
    if(max<min)max ^= min
    return Math.random()*(max-min)+min
}

function randint(max:number,min?:number){
    return random(max,min)
}

function randID(){
    return randint(1e10).toString(16)
}

function ck(){
    
}

