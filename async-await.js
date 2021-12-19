// Add
function add(a, b) {
  return new Promise((resolve, reject) => {
    if (a > b) {
      return resolve(a + b);	//5 + 3 = 8
    } else {
      return reject("Error Reject Add");
    }
  });

}
//Multiply function
function multiply(c, d) {
  return new Promise((resolve, reject) => {
    if (c > d) {
      return resolve(c * d);	//8 * 3 = 24
    } else {
      return reject("Error Multiply Reject");
    }
  });
}

async function calculator(a, b, c) {
  try {
    const addResult = await add(a, b);
    console.log(addResult);
    const multiplyResult = await multiply(addResult, c);
    console.log(multiplyResult);
  } catch (e) {
    console.log(e);
  }
}

calculator(5, 3, 3);	//firstly, Add the 5 and 3 then addesion result(5+3=8) multiply by 3
