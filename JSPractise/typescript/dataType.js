// there are type annotations in typescript
// let a: number;
// let boolean: boolean;
// let str: string;
// let anyNum: any;
// let anArrTypeNumber: number[] = [1, 2, 3];
// let anArrAnyType: any[] = [12, true, {}];
// enum Color {Red = "#eew", Blue = 1, Green = 2};
// let backGround = Color.Red;
// type assertion in typescript
// let message;
// message = "abc";
// let endsWithCa = (<string>message).endsWith("c");
// let anotherEndsWithz = (message as string).endsWith("c");
//console.log(endsWithCa, anotherEndsWithz)
// class declaration
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("x Coordinate is: " + this.x + " y Coordinate is: " + this.y);
    };
    return Point;
}());
var point = new Point();
// console.log(point)
point.draw();
