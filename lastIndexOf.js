function lastIndexOf(sample_array, value){
  var count = -1;
  if(sample_array.length < 1){
    return -1;
  }
  for(var i = 0; i < sample_array.length; i++){

    if(sample_array[i] == value ){

      count = i;
    }
  }
  return count;

}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);