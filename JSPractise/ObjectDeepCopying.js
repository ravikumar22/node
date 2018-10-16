var newObj = {
    color: 1,
    radius: 2,
    methods: "none"
}

var newObj2 = {
    color: 21,
    radius: 3,
    methods: "some"
}

// Object assign method where we can combine multiple objects in an object
let anotherObj = Object.assign({
    color1: 12
}, newObj,newObj2)
console.log("using object assign method "+ JSON.stringify(anotherObj, null, 2));

//using ES6 spread operator here we cannot combine multiple objects but a single object can be deeply copied
let anotherNewObj = { ...newObj2 }
console.log("using object ES6 spread method "+ JSON.stringify(anotherNewObj, null, 2));
