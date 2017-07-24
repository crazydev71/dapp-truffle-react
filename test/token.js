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
  it("should call successfully transfer function", function() {
    return Token.deployed().then(function(instance) {
      meta = instance;
      return instance.transfer.call(accounts[1], 100);
    }).then(function(result) {
        assert.equal(result, true, "transfer function wasn't called with success");
    });
  });
  it("should transfer Token correctly", function() {
    var meta;

    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 10;

    return Token.deployed().then(function(instance) {
      meta = instance;
      return meta.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      return meta.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_starting_balance = balance.toNumber();
      return meta.transfer(account_two, amount, {from: account_one});
    }).then(function() {
      return meta.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      return meta.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    });
  });
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
    }).then(function(result) {
      // assert.equal(result, true, "transfer aprrove not passed!");
      return meta.allowance.call(accounts[0], accounts[1]);
    }).then(function(remaining){
      assert.equal(remaining, 100, "Secondary Account allowance is not recorded");
    });
  });
});
