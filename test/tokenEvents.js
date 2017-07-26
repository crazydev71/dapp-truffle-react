var Token = artifacts.require("./Token.sol");

contract('Token', function(accounts) {
  it("should Trigger Transfer Event", function() {
    return Token.deployed().then(function(instance) {
      meta = instance;
      return instance.transfer(accounts[1], 100, {from: accounts[0]});
    }).then(function(result) {
       assert.equal(result.logs[0].event, "Transfer", "Expected Transfer event")
    });
  });
  it("should Trigger Approval Event", function() {
    return Token.deployed().then(function(instance) {
      return instance.approve(accounts[1], 100, {from: accounts[0]});
    }).then(function(result) {
      assert.equal(result.logs[0].event, "Approval", "Expected Approval event")
    });
  });
});
