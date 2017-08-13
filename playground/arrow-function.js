// // Statement syntax for the arrow func
// const square = (x) => {
//   var result = x * x;
//   return result;
// };
//
// console.log(square(9));

// // Expression syntax for the arrow func (one line)
// const square = (x) => x * x;
//
// console.log(square(9));

var user = {
  name: 'Ervis',
  sayHi: () => {
    // console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    // console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};
// THIS word doesn't work with Arrow function
user.sayHi(1, 2, 3);
// This way you can use THIS word
user.sayHiAlt(1, 2, 3);
