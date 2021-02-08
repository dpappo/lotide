// global vars for output
let pigLatin = "";

// accept input
const args = process.argv;

// remove paths
const slicedArgs = args.slice(2);

// loop through words
for (let i = 0; i < slicedArgs.length; i++) {
  const firstLetter = slicedArgs[i][0];
  const removedFirst = slicedArgs[i].slice(1);
  pigLatin += removedFirst + firstLetter + "ay ";
}

console.log(pigLatin);