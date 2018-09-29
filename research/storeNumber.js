function customSort(a,b) {
  return a - b;
}


module.exports = {
  list: [],
  storeInList: function(number) {
   this.list.push(number);
  },

  sortList: function(list) {
    return this.list.sort(customSort);
  }
}