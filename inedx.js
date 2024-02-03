function random(max, min) {
    min = min || 0;
    if (max < min) max ^= min;
    return Math.random() * (max - min) + min;
}

function randint(max, min) {
    return random(max, min);
}

function randID() {
    return randint(1e10).toString(16);
}


function store() {}

function enter() {
    /**@type {HTMLCanvasElement} */
    const canvas = document.getElementById("canvas");
    
};
