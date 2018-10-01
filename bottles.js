var money = process.argv[2];


var bottleCount = money / 2;
var emptyBottle = bottleCount;
var bottleCap = bottleCount;
var bottleRecycling = 0;
var capRecycling = 0;



while(emptyBottle >= 2 || bottleCap >= 4){
  if(emptyBottle >= 2){
    emptyBottle -= 1;
    bottleCap += 1;
    bottleCount += 1;
    bottleRecycling += 1;
  }

  if(bottleCap >= 4){
    bottleCap -= 3;
    emptyBottle += 1;
    bottleCount += 1;
    capRecycling += 1;
  }
}

console.log('TOTAL BOTTLES: ' + bottleCount + '\nREMAINING BOTTLES: ' + emptyBottle + '\nREMAINING CAPS: ' + bottleCap + '\nTOTAL EARNED:\n  BOTTLES: ' + bottleRecycling + '\n  CAPS: ' + capRecycling);