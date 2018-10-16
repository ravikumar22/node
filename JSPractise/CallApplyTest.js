function reverseColorAxis(param1, param2) {
    let visObj = this;
    visObj.mytitle = "test title";
    visObj.paramObj = param1;
    return visObj;
}


let visObj = {
    title: "Test title",
    subtitle: "Test subtitle"
}

let callFunc = reverseColorAxis.bind(visObj);
console.log(callFunc());

console.log(reverseColorAxis.call(visObj, {a:"param1", b: "param2"}));


