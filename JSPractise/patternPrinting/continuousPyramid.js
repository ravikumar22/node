const numRows = 5;
const numCols = 21;
let output = "";
// https://stackoverflow.com/questions/32003645/c-programming-zig-zag-practice
const modulusVal = ((numRows - 1) * 2);
for (let row = 0; row < numRows; ++row)
{
    for (let col = 0; col < numCols; ++col)
    {
        let modCol = (col % modulusVal);
        if (col == row)
        {
            output+= "X";
        }
        else
        {
            // console.log(" ");
            output+= " ";
        }
    }
    output+= "\n";
    // console.log("\n");
}

console.log(output);