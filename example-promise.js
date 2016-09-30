// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('city Not found')
// }
//
// getTempCallback('Ha Noi', function(err, temp) {
//   if(err) {
//     console.log('error ', err);
//   } else {
//     console.log('success ', temp)
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('city not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('ha noi').then(function(temp) {
//   console.log("promise success ", temp)
// }, function(err) {
//   console.log('promise err ', err);
// });

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a and b must be number!!!');
    }

  });
}

addPromise(1,4).then(function(sum){
  console.log("Sum is ", sum);
}, function(err) {
  console.log("Error: ", err);
});

addPromise(1,'a').then(function(sum){
  console.log("Sum is ", sum);
}, function(err) {
  console.log("Error: ", err);
});
