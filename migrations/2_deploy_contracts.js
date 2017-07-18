const HelloWorld = artifacts.require("./HelloWorld.sol");
const DAO = artifacts.require("./DAO.sol");
const Token = artifacts.require("./Token.sol");
const TokenCreation = artifacts.require("./TokenCreation.sol");


module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  //deployer.deploy(DAO);
  //deployer.deploy(Token);
  //deployer.deploy(TokenCreation);
};


