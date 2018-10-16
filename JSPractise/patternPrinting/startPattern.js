function generateTree(number) {
	let treeData;
	
	if(number > 0 && number%2 != 0) {
		let starCount = 1
		spaceCount = number - 3,
		printLineCount = number - 2;
		
		for(let line = 0; line < printLineCount; line++) {
			console.log("printedLine");
			starCount = (line == 0) ? starCount : starCount + 2;
			for(let space = 0; space < spaceCount; space++) {
				treeData+= " ";
			}
			
			for(let star = 0; star < starCount; starCount++) {
				treeData+= "*";
			}
			
			treeData+= "\n";
			console.log(spaceCount);
			spaceCount --;
		}
	}
	return treeData;
}

console.log(generateTree(5))