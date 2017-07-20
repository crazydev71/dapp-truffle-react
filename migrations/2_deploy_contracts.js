var Token = artifacts.require("./Token.sol");
var DAO = artifacts.require("./DAO.sol");

var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(Token).then(function(){
    return deployer.deploy(DAO, Token.address, 5000001, 60);
  });
  deployer.deploy(SimpleStorage);
}