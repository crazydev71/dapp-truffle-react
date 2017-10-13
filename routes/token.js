// import express from 'express';
import Router from 'express';
import Web3 from 'web3';
import contract from 'truffle-contract'; //TODO Change to ES6 Syntax
import TokenContract from '../build/contracts/Token.json';

const router = new Router();
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const token = contract(TokenContract);
token.setProvider(web3.currentProvider);

//Bug Fix web3 and Truffle contract
if (typeof token.currentProvider.sendAsync !== "function") {
  token.currentProvider.sendAsync = function() {
    return token.currentProvider.send.apply(
      token.currentProvider, arguments
    );
  };
}

router.route('/create-token').post( (req, res) => {

  // Data post example:
  // {
  //   "totalSupply" : "100",
  //   "decimals" : "0",
  //   "symbol" : "TRV",
  //   "name" : "Trive",
  //   "account" : "0x7ecf34ed29ede66ecc1068b398102aa57ccbd317"
  // }

  const data = req.body;

  token.new(
    data.totalSupply,
    data.name,
    data.symbol,
    data.decimals,
    {
      from: data.account,
      gas: 4388712,
      gasPrice: 100000000000
    }).then( instance => {
    console.log('Token contract deployed....');
    return res.json( { address: instance.address } );
  }).catch( error => {
    console.log('Error in contract deployment....', error);
  });
});


router.route('/transfer-token').post( (req, res) => {

  // Data post example:
  // {
  //   "sharesAddress": "0x27074fbb5f2740b029d88b8b3188b8c5e3d696fb",
  //   "_to" : "0xead02d42efe27ff850e242892577336de3d20cf9",
  //   "_amount" : "1",
  //   "account" : "0x7ecf34ed29ede66ecc1068b398102aa57ccbd317"
  // }

  const data = req.body;


  token.at(data.sharesAddress).transfer(
    data._to,
    data._amount,
    {
      from: data.account,
      gas: 4388712,
      gasPrice: 100000000000
    }).then( (result) => { return res.json( { event: result.logs[0].event } ); } );

});

router.route('/approve').post( (req, res) => {

  // Data post example:
  // {
  //   "sharesAddress": "0x27074fbb5f2740b029d88b8b3188b8c5e3d696fb",
  //   "_spender" : "0xcfd980c4115825d6270d840cab900e15a65e3436",
  //   "_amount" : "1",
  //   "account" : "0x7ecf34ed29ede66ecc1068b398102aa57ccbd317"
  // }

  const data = req.body;

  token.at(data.sharesAddress).approve(
    data._spender,
    data._amount,
    {
      from: data.account,
      gas: 4388712,
      gasPrice: 100000000000
    }).then( (result) => {
      // console.log("event", result);
      return res.json( { event: result.logs[0].event } ); } );

});



export default router;
