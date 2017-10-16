// import express from 'express';
import Router from 'express';
import Web3 from 'web3';
import contract from 'truffle-contract';
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
      gas: 4712388,
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
      gas: 4712388,
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
      gas: 4712388,
      gasPrice: 100000000000
    }).then( (result) => {
      // console.log("event", result);
      return res.json( { event: result.logs[0].event } ); } );

});


router.route('/transfer-from').post( (req, res) => {

  // Data post example:
  // {
  //   "sharesAddress": "0x27074fbb5f2740b029d88b8b3188b8c5e3d696fb",
  //   "_from" : "0x7ecf34ed29ede66ecc1068b398102aa57ccbd317",
  //   "_to" : "0x7f4a0b1a66c153664d541ce25f08d000182adfd8",
  //   "_amount" : "1",
  //   "account" : "0xcfd980c4115825d6270d840cab900e15a65e3436"
  // }

  const data = req.body;

  token.at(data.sharesAddress).transferFrom(
    data._from,
    data._to,
    data._amount,
    {
      from: data.account,
      gas: 4712388,
      gasPrice: 100000000000
    }).then( (result) => {
      // console.log("event", result);
      return res.json( { event: result.logs[0].event } ); } );

});

router.route('/events').post( (req, res) => {

  // Data post example:
  // {
  //   "sharesAddress": "0x27074fbb5f2740b029d88b8b3188b8c5e3d696fb",
  //   "fromBlock" : "0",
  // }

  const data = req.body;

  // token.at(data.sharesAddress).allEvents({
  //   fromBlock: data.fromBlock,
  //   toBlock: 'latest'
  // }, function(error, log){
  //   if (log.length > 0) {
  //     resolve(log);
  //     return res.json( { logs: log } );
  //   }
  // });

  // web3.eth.filter({
  //   address: data.sharesAddress,
  //   from: "1",
  //   to: 'latest'
  // }).get(function (err, result) {
  //   // callback code here
  //   console.log(err);
  //   // console.log(result);
  //   // return res.json( { logs: log } );
  // })

  // var filter = web3.eth.filter({
  //   address: data.sharesAddress,
  //   from: "1",
  //   to: 'latest'
  // });

  // filter.watch(function (error, log) {
  //   console.log(log); //  {"address":"0x0000000000000000000000000000000000000000", "data":"0x0000000000000000000000000000000000000000000000000000000000000000", ...}
  // });
  //
  // // get all past logs again.
  // var myResults = filter.get(function(error, logs){ console.log('LOGS', logs) });


  // stops and uninstalls the filter
  // filter.stopWatching();

  // var gntAddress="0xa74476443119A942dE498590Fe1f2454d7D4aC0d";
  // var filter=web3.eth.filter({}, {fromBlock: 1, toBlock: 6, address: data.sharesAddress, topics: []});
  // filter.get(function(error, log) {
  //   console.log(JSON.stringify(log));
  // });
  // filter.stopWatching();

  // var subscription = web3.eth.subscribe('logs', {
      // address: data.sharesAddress,
      // from: "0",
      // to: 'latest'
  // }, function(error, result){
  //     if (!error)
  //         console.log(log);
  // })
  // .on("data", function(log){
  // })
  // .on("changed", function(log){
  // });
  //
  // // unsubscribes the subscription
  // subscription.unsubscribe(function(error, success){
  //     if(success)
  //         console.log('Successfully unsubscribed!');
  // });

  web3.eth.getPastLogs({
    address: data.sharesAddress,
    from: "0",
    to: 'latest'
    // topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
  })
  .then(console.log);

});


export default router;
