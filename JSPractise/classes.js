// class Foo{
  // constructor(x){
	// console.log("Iam called seq 1  = "+ x);
    // this.x = x;
  // }
  // static addFooBar(f, b){
	// console.log("Iam called seq 2  = "+ f +" and "+b);
    // return f.x + b.x + b.y;
  // }
// }
// class Bar extends Foo{
  // constructor(x, y){
    // super(x);
    // this.y = y;
  // }
// }
// let f = new Foo(5);
// let b = new Bar(5, 5);
// console.log(Bar.addFooBar(f, b));


function list() {
	console.log(arguments);
	console.log([].slice);
  return [].slice.call(arguments);
}
var leadingThirtysevenList = list.bind(null, 12);
var list2 = leadingThirtysevenList();
console.log(list2);
var list3 = leadingThirtysevenList(1, 2, 3);
console.log(list3);
// console.log(leadingThirtysevenList);

// support@ultimateangular.com