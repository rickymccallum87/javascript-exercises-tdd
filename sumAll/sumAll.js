var sumAll = function(first, last) {
  // only positive numbers allowed
  if (typeof first != 'number' ||
      typeof last != 'number' ||
      first < 0 ||
      last < 0) return 'ERROR';

  // make sure smaller of two numbers is first
  if (first > last) {
    // swap using temp variable
    let tmp = first;
    first = last;
    last = tmp;
  }

  // count from first to last, adding each to sum
  let sum = 0;
  for (let i = first; i <= last; i++) {
    sum += i;
  }
  return sum;
}

module.exports = sumAll
