const reverse = function (input) {
  // global var for output
  let string = "";

  // accept input
  const args = process.argv;

  // remove paths
  let slicedArgs = args.slice(2);

  //loop through all inputs to CLI
  for (let i = 0; i < slicedArgs.length; i++) {
    // stringify bay bay
    let input = String(slicedArgs[i]);
    // looping backwards
    for (let i = input.length - 1; i >= 0; i--) {
      string += input[i];
    }
    console.log(string);
    string = "";
  }
};

module.exports = reverse;
