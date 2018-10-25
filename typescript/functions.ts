let userTestStatus = [
    { id: 0, name: "Available", status: true},
    { id: 1, name: "Ready", status: false},
    { id: 2, name: "Started", status: false}
];

// userTestStatus[0].tooth = "as";
userTestStatus.forEach((val, index, array) => console.log(`${++val.id} ${val.name}`));
function returnSomething() : string {
  return "U called me";
}

console.log(returnSomething());

// function types
function createStatus(id: number, name?: string): string {
  return `as ${id}`;
}

let statusCreator : (nums: number, chars: string) => string;

let newStatus: string = createStatus(31);
console.log(newStatus);

// overloading in typescript
function getStatus(name: string): string [];
function getStatus(status: boolean): string [];
function getStatus(statusProperty: any): string [] {

  let filteredStatuses : any[] = [];
  if (typeof statusProperty === "string") {
    filteredStatuses = userTestStatus.filter(status => status.name === statusProperty);
  } else if (typeof statusProperty === "boolean") {
    filteredStatuses = userTestStatus.filter(statuses => statuses.status === statusProperty);
  }

  return filteredStatuses;
}

let getStatusData: string[] = getStatus(false);
getStatusData.forEach(status => console.log(status));
