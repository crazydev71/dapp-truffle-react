// import express from 'express';
import Router from 'express';
import Web3 from 'web3';
import contract from 'truffle-contract'; //TODO Change to ES6 Syntax
import DaoContract from '../build/contracts/Association.json';

const router = new Router();
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));



router.route('/create-dao').post( (req, res) => {

  // Data post example:
  // {
  //   "sharesAddress": "0x3683da91c8e7d1e022c8f18a3813db550eece8e0",
  //   "minimumSharesToPassAVote": "5",
  //   "minutesForDebate": "10",
  //   "account" : "0x7ecf34ed29ede66ecc1068b398102aa57ccbd317"
  // }

  const data = req.body;

  const dao = contract(DaoContract);
  dao.setProvider(web3.currentProvider);

  //Bug Fix web3 and Truffle contract
  if (typeof dao.currentProvider.sendAsync !== "function") {
    dao.currentProvider.sendAsync = function() {
      return dao.currentProvider.send.apply(
        dao.currentProvider, arguments
      );
    };
  }

  dao.new(
    data.sharesAddress,
    data.minimumSharesToPassAVote,
    data.minutesForDebate,
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


export default router;
