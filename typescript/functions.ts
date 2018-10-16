let userTestStatus = [
    { id: 0, name: "Available" },
    { id: 1, name: "Ready" },
    { id: 2, name: "Started" }
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
