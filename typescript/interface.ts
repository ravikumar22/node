// defining an interface
// type

// let userTestStatus = [
//     { id: 0, name: "Available", status: true},
//     { id: 1, name: "Ready", status: false},
//     { id: 2, name: "Started", status: false}
// ];

interface Statuses {
  id: number;
  name: string;
  status?: number;
  changeStatus: (status: boolean) => void;
}
