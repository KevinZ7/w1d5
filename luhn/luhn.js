function luhnCheck(number){
  var numberArr = (number+'').split('').reverse();
  var finalSum = 0;

  console.log(numberArr);

  if(number < 0){
    return false;
  }
  else{
    for(var i = 0; i < numberArr.length; i++){
      if(i % 2 == 1){
        var alg = parseInt(numberArr[i],10) * 2;
        if(alg > 9){
          finalSum += alg - 9;
        }
        else{
          finalSum +=alg;
        }
      }
      else{
        finalSum += parseInt(numberArr[i],10);
      }

      console.log(finalSum);
    }

    if((finalSum % 10) === 0){
      return true;
    }
    else{
      return false;
    }

  }
}

luhnCheck(842745723);

module.exports = {
  luhnCheck
};




