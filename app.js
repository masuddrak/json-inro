// const student={
//     name:'Masud Rana',
//     adress:"Dinajpur 514",
// }
// console.log(student)
// const notString=JSON.stringify(student);
// console.log(notString);
// const convert=JSON.parse(notString);
// console.log(convert)
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data=> console.log(data))