var FixedSupplyToken = artifacts.require("./FixedSupplyToken.sol");
var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(FixedSupplyToken);
  deployer.deploy(SimpleStorage);
};
