function fibonacciGenerator (n) {
  var output = [];

  if (n === 1) {
    output = [0];
  }
  else if (n === 2) {
    ouput = [0, 1];
  }

  output = [0, 1];
  while (n !== output.length) {
    var sum = output[output.length - 1] + output[output.length - 2]
    output.push(sum);
    
  }
  


  return output;
}
out = fibonacciGenerator(7);
console.log(out);
