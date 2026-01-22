const dicc1 = {1: 1, 2: 2, 3: 100, 4: 12};


// Convertim a array de parells i ordenem segons el valor
const diccOrdenatArray = Object.entries(dicc1).sort((a, b) => a[1] - b[1]);


console.log(diccOrdenatArray);
