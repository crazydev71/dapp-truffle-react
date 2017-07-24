var Token = artifacts.require("./Token.sol");

contract('Token', function(accounts) {
  it("should put 100 Millions Token in the initial supply", function() {
    return Token.deployed().then(function(instance) {
      return instance.totalSupply();
    }).then(function(totalSupply) {
      assert.equal(totalSupply, 100000000, "100000000 wasn't in the first account");
    });
  });
  it("should put 100 Millions Token in the owner account", function() {
    return Token.deployed().then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 100000000, "100000000 wasn't in the first account");
    });
  });
  it("should transfer 100 token from owner account to the second account", function() {
    return Token.deployed().then(function(instance) {
      return instance.transfer.call(accounts[1], 100);
    }).then(function(result) {
      // console.log("Here is the result.........", result)
      assert.equal(result, true, "100 token wasn't transfereed from owner account to the second account");
    });
  });
});
