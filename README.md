# React, Redux, Truffle, and Material-UI for bootstrapping a Dapp

In addition to Webpack and React, this box adds: React-Router, Redux and Material-UI for easy skinning of a Dapp.

## Installation

1. Install truffle and an ethereum client. For local development, try EthereumJS TestRPC.
    ```javascript
    npm install -g truffle // Version 3.0.5+ required.
    npm install -g ethereumjs-testrpc
    ```

2. Compile and migrate the contracts.
    ```javascript
    truffle compile
    truffle migrate
    ```

3. Run the webpack server for front-end hot reloading. For now, smart contract changes must be manually recompiled and migrated.
    ```javascript
    npm run start
    ```

4. Jest is included for testing React components and Truffle's own suite is incldued for smart contracts. Be sure you've compile your contracts before running jest, or you'll receive some file not found errors.
    ```javascript
    // Runs Jest for component tests.
    npm run test

    // Runs Truffle's test suite for smart contract tests.
    truffle test
    ```

5. To build the application for production, use the build command. A production build will be in the /dist folder.
    ```javascript
    npm run build
    ```
## testrpc start:

Launch a testrpc client with these arguments:
    ```javascript
    testrpc --account="0xfa6a83f0e0c943f4d4654ae1d71d85f87f758a8f2846534b82c10e1070cf2e7a,1000000000000000000000000000000000000000000000"testrpc --account="0x19bc61f018488e683e5dd211bb1ad806a127cf4595b8cffb0821d017d4dee2bb,1000000000000000000000000000000000000000000000"testrpc --account="0x54bc25ebb3bab281ceff1bd7c93534726421e9669c353aaac8f1bbeb21be05c9,1000000000000000000000000000000000000000000000"testrpc --account="0xc3126ccdacb2f9f7956394f10c300a074a5fd59ee5f23df2d91dbd3e2510820e,1000000000000000000000000000000000000000000000"testrpc --account="0xcbefbe1454406dcf7a3849ee7808678a4abc039b8ba91f9eeb9f61c6ede803b4,1000000000000000000000000000000000000000000000"testrpc --account="0x07390a780157acacd91bd312cbfbeadb534c9aa47c426ae7b124334e5bbf3001,1000000000000000000000000000000000000000000000"testrpc --account="0xab073664853150f19468677d1be0165b7a6d781b4d285e99a48d24798b6001b0,1000000000000000000000000000000000000000000000"testrpc --account="0x7a3cb8ec310fc5f2a20c5706005df7f7f89b46dfbf879d41a040c21c61c21863,1000000000000000000000000000000000000000000000"testrpc --account="0xad7e6bd5ceddaaad396e81e6a69988c2bb52a35617272e5eef664836a7cf87d7,1000000000000000000000000000000000000000000000"
    ```

## FAQ

* __Why is there both a truffle.js file and a truffle-config.js file?__

    Truffle requires the truffle.js file be named truffle-config on Windows machines. Feel free to delete the file that doesn't correspond to your platform.

* __Where is my production build?__

    The production build will be in the /dist folder. This is because Truffle outputs contract compilations to the build folder.
