"use strict";
var userTestStatus = [
    { id: 0, name: "Available", status: true },
    { id: 1, name: "Ready", status: false },
    { id: 2, name: "Started", status: false }
];
// userTestStatus[0].tooth = "as";
userTestStatus.forEach(function (val, index, array) { return console.log(++val.id + " " + val.name); });
function returnSomething() {
    return "U called me";
}
console.log(returnSomething());
// function types
function createStatus(id, name) {
    return "as " + id;
}
var statusCreator;
var newStatus = createStatus(31);
console.log(newStatus);
// overloading in typescript
// function getStatus(name: string): string [];
// function getStatus(status: boolean): string [];
function getStatus(statusProperty) {
    var filteredStatuses = [];
    if (typeof statusProperty == "string")
        filteredStatuses = userTestStatus.filter(function (status) { return status.name === statusProperty; });
    else if (typeof statusProperty == "boolean")
        filteredStatuses = userTestStatus.filter(function (statuses) { return statuses.status === statusProperty; });
    return filteredStatuses;
}
;
var getStatusData = getStatus(false);
getStatusData.forEach(function (status) { return console.log(status); });
