// block scope
{
var a = 2
    let b = 3
    console.log(`var variable inside of block scope does work:${a}`)
 console.log(`let variable inside of block scope does not work:${b}`)

  }
console.log(`var variable outside of block scope does work:${a}`)
// console.log(`let variable outside of block scope does not work:${b}`)

  // function scope
  
  function myFunction() {
    let g = 6;
    var gg = 9;
    const ggg = 10;
    var string = `var variable inside of function scope does work:${gg}`+
    `let variable inside of function scope does work:${g}`+
    `const variable inside of function scope does work:${ggg}` 
    return string
  }
  
  let functionstring = myFunction()
console.log(functionstring)
  // console.log(`var variable outside of function scope does not work:${gg}`)
  // console.log(`let variable outside of function scope does not work:${g}`)
  // console.log(`const variable outside of function scope does not work:${ggg}`)
// global scope

let carName = "Volvo";
console.log(`global variable can be used here:${carName}`)

function mycar() {
  console.log(`global variable can be used inside function scope:${carName}`)

}
mycar.call()

  

