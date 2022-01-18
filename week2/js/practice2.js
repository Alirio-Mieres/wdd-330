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


//Requeriment 1
function reqOne() {
  const value1 = document.querySelector("#value1").value;
  const output1 = document.querySelector("#output1");
  output1.innerHTML = "You entered:" + value1;
}

//Requeriment 2
function reqTwo() {
  const myNumber = parseInt(document.querySelector("#value2").value);
  const outputData = document.querySelector("#output2");

  if (myNumber !== NaN) {
    outputData.innerHTML = 'total: ' + sum(myNumber);
  }

  function sum(number) {
    total = 0
    for (i = 0; i <= number; i++) {
      total += i;
    }
    return total;
  }
}

//Requeriment 3
function add() {
  const number1 = document.getElementById('req3Number1').value;
  const number2 = document.getElementById('req3Number2').value;
  const outputElement = document.getElementById('req3Output');
  const num1Float = parseFloat(number1);
  const num2Float = parseFloat(number2);
  if ((num1Float !== NaN) & (num2Float !== NaN)) {
    const total = num1Float + num2Float;
    outputElement.innerHTML = 'Total: ' + total;
  }
}

//Excercise 1
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));

//Excercise 2
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));