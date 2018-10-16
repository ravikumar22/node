"use strict";
// string declaration
var newStr = "My new string";
console.log(newStr);
// enum declarations
var Department;
(function (Department) {
    Department[Department["PHP"] = 2] = "PHP";
    Department[Department["Dot-Net"] = 3] = "Dot-Net";
    Department[Department["Java"] = 4] = "Java";
})(Department || (Department = {}));
var myDepartment = Department["Dot-Net"];
console.log(myDepartment);
// console.log(Department["Dot-Net"]);
// Array Declaration
var strArr = ["Ravi", "is"];
var numArr = [1, 2];
var myTuple = ["23", 12, "asd"];
