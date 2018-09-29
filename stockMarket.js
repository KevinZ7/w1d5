function stockMarket(array){
  if (array.length < 2){
    return -1;
  }

  var minPrice = array[0];
  var profit = array[1] - minPrice;

  for(var i = 1; i < array.length; i ++){
    if((array[i] - minPrice) > profit){
      profit = array[i] - minPrice;
    }

    if(array[i] < minPrice){
      minPrice = array[i];
    }
  }

  if(profit <= 0){
    return -1;
  }
  else{
    return profit;
  }
}


var testArray = [45, 24, 35, 31, 40, 38, 1000];
console.log(stockMarket(testArray));