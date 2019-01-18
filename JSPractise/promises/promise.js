// let iPromised = true;

// let promise1 = new Promise((resolve,  reject) => {
//     if (iPromised) {
//         resolve("I like to keep my word");
//     } else {
//         reject("I doesn't want to keep my word");
//     }
// })

// console.log(promise1);


// var momsPromise = new Promise(function (resolve, reject) {
//   momsSavings = 20000;
//   priceOfPhone = 60000;
//   // console.log(momsSavings > priceOfPhone)
//   if (momsSavings > priceOfPhone) {
//     resolve({
//       brand: "iphone",
//       model: "6s"
//     });
//   } else {
//     reject("We donot have enough savings. Let us save some more money.");
//   }
// });

// momsPromise.then(function (value) {
//   console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
// });

// momsPromise.catch(function (reason) {
//   console.log("Mom coudn't buy me the phone because ", reason);
// });

// momsPromise.finally(function () {
//   console.log(
//     "Irrespecitve of whether my mom can buy me a phone or not, I still love her"
//   );
// });

var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = function(
  n = 0
) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        resolvedAfterNSeconds: n
      });
    }, n * 1000);
  });
});

var promiseTRJANSG = (promiseThatRejectsAfterNSecondsGenerator = function(
  n = 0
) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject({
        rejectedAfterNSeconds: n
      });
    }, n * 1000);
  });
});

console.time("Promise.All");
var promisesArray = [];
promisesArray.push(promiseTRSANSG(1));
promisesArray.push(promiseTRSANSG(4));
promisesArray.push(promiseTRSANSG(2));
var handleAllPromises = Promise.all(promisesArray);
handleAllPromises.then(function(values) {
  console.timeEnd("Promise.All");
  console.log("All the promises are resolved", values);
});
handleAllPromises.catch(function(reason) {
  console.log("One of the promises failed with the following reason", reason);
});