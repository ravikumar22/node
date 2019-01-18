let promise1 =  Promise.resolve(3);

let promise2 = 43;

let promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, "I am groot");
})

Promise.all([promise1, promise2, promise3])
.then(function(values) {
    console.log(values);
})