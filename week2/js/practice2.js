function displayNum() {
  let myNumbers = getInput();
  display(computeSum(myNumbers[0]));
}

function computeSum(num) {
  let mySum = 0;
  if (num > 0) {
    let i = 0;
    while (i <= num) {
      mySum = mySum + i;
      i++;
    }
  }
  return mySum;
}

const sayHello = ()=>{
  console.log('Hello');
}

const getInput = function () {
  const input = parseInt(document.getElementById("myNumber").value);
  const input2 = parseInt(document.getElementById("mySecondnum").value);

  const myInput = [input, input2];
  return myInput;
}

function addNumber() {
  let myNumbers = getInput();
  display(myNumbers[0] + myNumbers[1]);
}

function display(result) {
  document.getElementById("displayTotal").innerHTML = result;
}

document.getElementById("sum").addEventListener("click", displayNum);
document.getElementById("add").addEventListener("click", addNumber);
document.getElementById("multiply").addEventListener("click", () => {
  let myNumbers = getInput();
  display(myNumbers[0] * myNumbers[1]);
});

sayHello();