hoisted()
hoisted2()

// function declartion is always hoisted
function hoisted() {
    console.log("Hoisted");
}

//  function expression are not hoisted
const hoisted2 = function () {
    console.log("kook");
}