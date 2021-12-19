//Add function
function add(a, b) {
    return new Promise((resolve, reject) => {
        if (a > b) {
            return resolve(a + b);
        } else {
            reject("Error Reject Add");
        }
    });
}
//Multiply function
function multiply(c, d) {
    return new Promise((resolve, reject) => {
        if (c > d) {
            return resolve(c * d);
        } else {
            reject("Error Multiply Reject");
        }
    });
}
//Calculater function
function calculator(a, b, c) {
    add(a, b).then((data) => {
            console.log("Add result", data); //8
            return multiply(data, c);
        })
        .then((datamultiple) => {
            console.log("multiply result", datamultiple); //64
        })
        .catch((err) => {
            console.log((err) => {
                console.log(err);
            });
        })
}

calculator(5, 3, 3); //firstly, Add the 5 and 3 then addesion result(5+3=8) multiply by 3
