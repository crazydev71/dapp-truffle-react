// import express from 'express';
import Router from 'express';
import Web3 from 'web3';
import contract from 'truffle-contract'; //TODO Change to ES6 Syntax
import DaoContract from '../build/contracts/Association.json';

const router = new Router();
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

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

router.route('/create-dao').post( (req, res) => {

  // Data post example:
  // {
  //   "sharesAddress": "0x3683da91c8e7d1e022c8f18a3813db550eece8e0",
  //   "minimumSharesToPassAVote": "5",
  //   "minutesForDebate": "10",
  //   "account" : "0x7ecf34ed29ede66ecc1068b398102aa57ccbd317"
  // }

  const data = req.body;

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

router.route('/create-proposal').post( (req, res) => {

  // Data post example:
  // {
  // "daoAddress": "0x13ead7c43d734e99df5a30ad05ff10f202e3a251",
  // "account" : "0x7ecf34ed29ede66ecc1068b398102aa57ccbd317",
  // "beneficiary": "0xead02d42efe27ff850e242892577336de3d20cf9",
  // "weiAmount": "1000000000000000000",
  // "jobDescription": "Complete Tasks",
  // "transactionBytecode": ""
  // }

  const data = req.body;

  dao.at(data.daoAddress).newProposal(
    data.beneficiary,
    data.weiAmount,
    data.jobDescription,
    data.transactionBytecode,
    {
      from: data.account,
      gas: 4388712,
      gasPrice: 100000000000
    }).then( (result) => {
      return res.json( {
        transactionHash: result.logs[0].transactionHash,
        event: result.logs[0].event,
        proposalID: result.logs[0].args.proposalID.toString()
      } );
    } );

});

export default router;
