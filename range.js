function range(start, end, step) {
  var some_array = [];
  var i = 0
  if (start === undefined || end === undefined || start > end || step < 0)
    return some_array;

  for (i = start; i <= end; i = i + step)
  {
    some_array.push(i);


  return some_array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
