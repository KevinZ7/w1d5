// 61735     luhn = true
// 842745713 luhn = true
// 842745723 luhn = false
// 0         luhn = false

var luhnChecker = require("../luhn.js");
var assert = require("chai").assert;

describe("Luhn Checker: ", function(){
  it("Should return TRUE for number 56861: ", function(){
    var number = 56861;
    var result = luhnChecker.luhnCheck(number);
    assert.isTrue(result);
  });

  it("Should return TRUE for number 842745713: ", function(){
    var number = 842745713;
    var result = luhnChecker.luhnCheck(number);
    assert.isTrue(result);
  })

  it("Should return FALSE for number 842745723: ", function(){
    var number = 842745723;
    var result = luhnChecker.luhnCheck(number);
    assert.isFalse(result);
  })

  it("Should return TRUE for number 0: ", function(){
    var number = 0;
    var result = luhnChecker.luhnCheck(number);
    assert.isTrue(result);
  })

  it("Should return FALSE for number -12345: ", function(){
    var number = -12345;
    var result = luhnChecker.luhnCheck(number);
    assert.isFalse(result);
  })

});