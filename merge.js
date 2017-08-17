function merge(array_1, array_2){

  for (var i = 0; i < array_2.length; i++){

    array_1.push(array_2[i]);

    for (var k = 0; k < array_1.length; k++){

      array_1.sort();

    }

  }
}






console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);