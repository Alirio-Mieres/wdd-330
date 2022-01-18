//Practice 1 Typeof
const practiceTypeof = (type) =>{
  const data = typeof type
  alert(data)
}

const typeof1 = 'Hello World';
const typeof2 = 10;
const typeof3 = true;
const typeof4 = {ninja: 'turtle'};


/*for (let line = "#"; line.length < 8; line += "#")
  console.log(line);*/



let student = ["Alirio", "Pedro", "Daniel", "Jacob"];
console.log("Array properties")
console.log(student.length);
console.log(student[student.length -1]);

console.log("concat() example:")

student.concat(["Jose", "Carlos", "Juan"]);
console.log(student);

student = student.concat(["Jose", "Carlos", "Juan"]);
console.log(student);

console.log("join() method:");
let joinExample = student.join();
console.log(joinExample);

joinExample = student.join(" & ");
console.log(joinExample);


console.log("slice() method:");
let sliceExample = student.slice(2, 4);
console.log(sliceExample);

console.log("splice() method");
let student2 = ['Alirio', 'Pedro', 'Daniel', 'Jacob', 'Jose', 'Carlos', 'Juan'];
student2.splice(3, 1, "Jason");
console.log(student2);

console.log("transform set to array")
const setExample = new Set().add('Mormon').add('Nephi').add('Lehi');
const setExample2 = Array([...setExample]);
console.log(setExample2);

console.log("Switch example:");
const number = 6;
switch (number) {
  case 4:
  console.log('You rolled a four');
  break;
  case 5:
  console.log('You rolled a five');
  break;
  case 6:
  console.log('You rolled a six');
  break;
  default:
  console.log('You rolled a number less than four');
  break;
}

console.log("For loop example:");
for(i=0, max= student.length; i < max; i++ ){
  console.log(student[i]);
}

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

  for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }