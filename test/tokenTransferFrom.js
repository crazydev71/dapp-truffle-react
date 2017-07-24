var Token = artifacts.require("./Token.sol");

contract('Token', function(accounts) {
  it("should approve Token Transfer from secondory account", function() {
    return Token.deployed().then(function(instance) {
      return instance.approve.call(accounts[1], 100);
    }).then(function(result) {
      assert.equal(result, true, "transfer aprrove not passed!");
    });
  });
  it("should add record to allowance mapping table", function() {
    return Token.deployed().then(function(instance) {
      meta = instance;
      return instance.approve(accounts[1], 100, {from: accounts[0]});
    }).then(function() {
      return meta.allowance.call(accounts[0], accounts[1]);
    }).then(function(remaining){
      assert.equal(remaining, 100, "Secondary Account allowance is not recorded");
    });
  });
  it("should transferfrom available for aproved accounts", function() {
    return Token.deployed().then(function(instance) {
      meta = instance;
      return meta.transfer(accounts[1], 100, {from: accounts[0]});
    }).then(function() {
      return meta.approve(accounts[2], 100, {from: accounts[1]});
    }).then(function(){
      return meta.transferFrom.call(accounts[1], accounts[2], 20, {from: accounts[2]});
    }).then(function(remaining){
      assert.equal(remaining, true, "transferFrom function is not called successfully");
    });
  });
  it("should transferfrom available for aproved accounts", function() {
    return Token.deployed().then(function(instance) {
      meta = instance;
      return meta.transfer(accounts[1], 100, {from: accounts[0]});
    }).then(function() {
      return meta.approve(accounts[2], 100, {from: accounts[1]});
    }).then(function(){
      return meta.transferFrom(accounts[1], accounts[2], 20, {from: accounts[2]});
    }).then(function(){
      return meta.balanceOf.call(accounts[2]);
    }).then(function(balance){
      assert.equal(balance, 20, "Token Trnasfered successfully to the third account");
    });
  });
});
