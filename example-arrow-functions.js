// var names = ['Quyen', 'Nam', 'Minh'];

// names.forEach(function(name) {
//   console.log('ForEach', name);
// });
//
// names.forEach((name) => {
//   console.log('ArrowFunc', name);
// });
//
// names.forEach(name => console.log('ArrowFuncShort', name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Quyen'));

// var person = {
//   name: 'Quyen',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' say hi to ' + name)
//     });
//   }
// }
//
// person.greet();

function add(a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));
console.log(addStatement(1, 3));
console.log(addStatement(9, 0));
console.log(addExpression(1, 3));
console.log(addExpression(9, 0));
