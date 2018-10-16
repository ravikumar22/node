"use strict";
var userTestStatus = [
    { id: 0, name: "Available" },
    { id: 1, name: "Ready" },
    { id: 2, name: "Started" }
];
// userTestStatus[0].tooth = "as";
userTestStatus.forEach(function (val, index, array) { return console.log(++val.id + " " + val.name); });
function returnSomething() {
    return "U called me";
}
console.log(returnSomething());
// function types
function createStatus(id, name) {
    return id + name;
}
var statusCreator;
var newStatus = createStatus(3, "In progress");
console.log(newStatus);
