function largestOfFour(arr) {
  //will push max of each sub array in here.
  var resultantArr=new Array();
  var array = arr;
  var max=0;
  var outer;
  var inner;
  //iterates through double arrays
  //outer array
  for(var row = 0; row<array.length; row++){
    max=0;
    //inner array
    for(var col = 0; col<array[row].length; col++){
      if(array[row][col]>max){
        max = array[row][col];
      }
    }
    console.log(max);
    resultantArr.push(max);
  }
  arr = resultantArr;
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);