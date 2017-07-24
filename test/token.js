var Token = artifacts.require("./Token.sol");

contract('Token', function(accounts) {
  it("should put 100 Millions Token in the initial supply", function() {
    return Token.deployed().then(function(instance) {
      return instance.totalSupply();
    }).then(function(totalSupply) {
      assert.equal(totalSupply, 100000000, "100000000 wasn't in the first account");
    });
  });
});
