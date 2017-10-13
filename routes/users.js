// import express from 'express';
import Router from 'express';
import Web3 from 'web3';

const router = new Router();
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//api test

router.route('/get-test').get( (req, res) => { return res.json( { username: "tim" } ); } );
router.route('/post-test').post( (req, res) => { return res.json( { username: "tim" } ); } );


router.route('/list').get( (req, res) => {
  return web3.eth.getAccounts( (error, result) => {
        return res.json( { accounts: result } )
    });
});


export default router;
