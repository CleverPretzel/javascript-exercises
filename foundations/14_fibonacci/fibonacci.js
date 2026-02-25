const fibonacci = function(position) {
  if (position == 0) return 0;
  if (position < 0) return 'OOPS';

  let fibonacciSeq = [1, 1];
  for (let i = 1; fibonacciSeq.length < position; i++) {
    let previousEL = fibonacciSeq[i];
    let previousPreviousEl = fibonacciSeq[i - 1];
    fibonacciSeq.push(previousEL + previousPreviousEl);
  }

  return fibonacciSeq[position - 1];
};

// Do not edit below this line
module.exports = fibonacci;
