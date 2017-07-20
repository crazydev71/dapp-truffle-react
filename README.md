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

4. Jest is included for testing React components and Truffle's own suite is included for smart contracts. Be sure you've compile your contracts before running jest, or you'll receive some file not found errors. Mocha & chai for testing reducers.
    ```javascript
    // Runs Jest for component tests.
    npm run test

    // Runs Truffle's test suite for smart contract tests.
    truffle test

    // Runs Mocha & Chai test suite for reducers contract tests (and backend tests in the future).
    npm run test-mocha
    ```

    While adding code to the project we will add unit tests for:
    - All sensible backend routes & models
    - All reducers
    - All the DAO contracts related functions in use

5. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```javascript
    npm run build
    ```
