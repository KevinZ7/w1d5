var sortFunctions = require("./storeNumber");

var dataPoints = [6, 2, 9, 4, 20];

for (var i = 0; i < dataPoints.length; i++) {
  sortFunctions.storeInList(dataPoints[i]);
}

sortFunctions.sortList(sortFunctions.list);


console.log(sortFunctions.list);