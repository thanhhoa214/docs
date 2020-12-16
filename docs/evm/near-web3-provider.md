---
id: near-web3-provider
title: NEAR web3 provider
sidebar_label: Web3 provider
---

The [near-web3-provider](https://github.com/near/near-web3-provider) is a custom provider that can be set when working in a web3 environment. There are two typical use cases for a web3 provider:

1. [Frontend](#frontend) — interacting with smart contracts via a user interface on the web
2. [Backend](#backend) — testing and deploying EVM-based contracts

## Frontend

The [NPM package](https://npmjs.com/package/near-web3-provider) and can be added to a NodeJS project with:

    npm install near-web3-provider --save
    
Or, to follow the snippets below, you may want to use:

    npm install near-web3-provider web3-eth-contract --save

In the frontend JavaScript the provider can be instantiated with its constructor. There are two modes of a `NearProvider` class:

1. Read-only — can only access `view` calls to the NEAR EVM.
2. Signed — has access to a NEAR account and can interact with `view` and `call` methods.

**Note**: in Ethereum, executing a read-only method is referred to as `call`, while a state-changing method is referred to as `send`. In NEAR, it's `view` and `call` and this terminology will be used widely in the documentation.

### Instantiating read-only

```js
const { NearProvider } = require('near-web3-provider');
// …
const nearProvider = new NearProvider({
  networkId: this.nearNetwork,
  keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
  isReadOnly: true
});
```

###  Instantiating signed

For the signed instance, this assumes that the browser has local storage containing a key to the account specified.

For folks unfamiliar with NEAR Wallet, a brief recap as the workflow in NEAR is different than that of a browser extension or by scanning QR codes. Let's imagine a user wants to use a NEAR betanet account to interact with the EVM. The first step is to create an account with Wallet. (Non-mainnet networks allow for free account creation with an initial balancer of Ⓝ.)

NEAR Betanet Wallet:

https://wallet.betanet.near.org

At this point, the NEAR Wallet website's local storage contains a key for this account. When you want to interact with a frontend using your account, you'll typically have the frontend redirect to Wallet, requesting the creation a special function-call access key. After allowing the creation, the browser redirects back to the dApp frontend where local storage contains this new key.

```js
const { NearProvider } = require('near-web3-provider');
// …
const nearProvider = new NearProvider({
  networkId: this.nearNetwork,
  masterAccountId: 'yourname.betanet', // NEAR account with key that exists in local storage
  keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
});
```

### Contract abstraction, set the provider

Web3 developers are able to use familiar libraries for contract abstraction. For instance, in the case of the Pet Shop example, a `Contract` object is instantiated using the NPM package [`web3-eth-contract`](https://www.npmjs.com/package/web3-eth-contract).

Then a `Contract` object can use methods like [`send`](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#methods-mymethod-send) and [`call`](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#methods-mymethod-call). 

```js
const Contract = require('web3-eth-contract');
const { NearProvider, utils } = require('near-web3-provider');
const path = require('path');
const credentialsPath = path.join(os.homedir(), '.near-credentials');

const yourBetanetAccount = 'yourname.betanet'; // NEAR account with key that exists in local storage
const nearProvider = new NearProvider({
  networkId: this.nearNetwork,
  masterAccountId: yourBetanetAccount, 
  keyStore: new nearAPI.keyStores.UnencryptedFileSystemKeyStore(credentialsPath),
});

const myContractArtifact = require('path/to/build/contracts/MyContract.json');
const networkId = nearProvider.version;
const myContractAddress = myContractArtifact.networks[networkId].address;
const myContract = new Contract(myContractArtifact.abi, myContractAddress, {
  from: myContractAddress
});
myContract.setProvider(nearProvider);
// view-only
const viewResult = myContract.methods.myViewMethod().call();
// signed
const yourBetanetAccountAsEthAddress = utils.nearAccountToEvmAddress(yourBetanetAccount);
const signedResult = myContract.methods.mutateStateMethod().send({from: yourBetanetAccountAsEthAddress});
```

This covers the basic usage of `near-web3-provider` on the frontend, allowing your Ethereum smart contracts to interact with a website.

## Backend

The [NEAR Pet Shop example](https://github.com/near-examples/near-pet-shop) demonstrates both of these. Please see the [Truffle page](/evm/truffle) for details on the backend approach.

### NEAR CLI

You can interact with an EVM smart contract with NEAR CLI, the command-line interface tool. With NodeJS version 12+, you may install this globally with:

    npm install -g near-cli
    
For more information see the [NEAR CLI documentation](/docs/development/near-cli).

Be sure to have followed the instructions earlier on creating a betanet NEAR account with Wallet. Issue this command to create a full-access key file locally: 

    env NEAR_ENV=betanet near login
    
The key file will be located at `~/.near-credentials/betanet/yourname.betanet.json`.

Now we're ready to use NEAR CLI to interact with a smart contract on the NEAR EVM. Let's say we've used Truffle to build and deploy a smart contract as [detailed in this guide](/evm/truffle#build-and-deploy), and the **contract address** is output as `0xAdf11a39283CEB00DEB90a5cE9220F89c6C27E67`. In this case the contract is NEAR Pet Shop example mentioned earlier. There is a read-only method `getAdopters` and a method that changes state called `adopt`.

View with `evm-view`:
    
    NEAR_ENV=betanet near evm-view evm 0xAdf11a39283CEB00DEB90a5cE9220F89c6C27E67 getAdopters '[]' --abi ~/path/to/near-pet-shop/build/contracts/Adoption.json --accountId mike.betanet
    
The `evm-view` command returns an array of addresses, each corresponding to the index of a dog. Dogs open for adoption have the value of the zero address (`0x0000000000000000000000000000000000000000`) and dogs already adopted contain the address of the account that's adopted them.

At the time of this writing, the previous CLI command returns:

```shell script
[
  '0x0000000000000000000000000000000000000000', ⟵ we will be adopting this dog
  '0x0000000000000000000000000000000000000000',
  '0x0000000000000000000000000000000000000000',
  '0xb948c53cBA274D77e54109061068512e92d1249d', ⟵ mike.betanet
  '0x0000000000000000000000000000000000000000',
  '0x0000000000000000000000000000000000000000',
  '0xb948c53cBA274D77e54109061068512e92d1249d', ⟵ mike.betanet
  '0x0000000000000000000000000000000000000000',
  '0x5d60a489B2f457cB351b0faaBf5f9746d6bd4A8C', ⟵ josh.betanet
  '0xb948c53cBA274D77e54109061068512e92d1249d', ⟵ mike.betanet
  '0x0000000000000000000000000000000000000000',
  '0x0000000000000000000000000000000000000000',
  '0xb948c53cBA274D77e54109061068512e92d1249d', ⟵ mike.betanet
  '0x5d60a489B2f457cB351b0faaBf5f9746d6bd4A8C', ⟵ josh.betanet
  '0x5d60a489B2f457cB351b0faaBf5f9746d6bd4A8C', ⟵ josh.betanet
  '0x5d60a489B2f457cB351b0faaBf5f9746d6bd4A8C'  ⟵ josh.betanet
]
```

As shown above, the "dog" at index 0 (the first in the array) has the zero address and is therefore open for adoption.

Call and mutate state with `evm-call`:
    
    NEAR_ENV=betanet near evm-call evm 0xAdf11a39283CEB00DEB90a5cE9220F89c6C27E67 adopt '["0"]' --abi ~/path/to/near-pet-shop/build/contracts/Adoption.json --accountId mike.betanet    

The CLI will output:

```shell script
Scheduling a call inside evm EVM:
0xAdf11a39283CEB00DEB90a5cE9220F89c6C27E67.adopt()
  with args [ '0' ]
```

Then we can use the `evm-view` command again and see the new results:

```shell script
[
  '0xb948c53cBA274D77e54109061068512e92d1249d', ⟵ newly adopted dog
  '0x0000000000000000000000000000000000000000',
  '0x0000000000000000000000000000000000000000',
  '0xb948c53cBA274D77e54109061068512e92d1249d', ⟵ mike.betanet
  '0x0000000000000000000000000000000000000000',
  '0x0000000000000000000000000000000000000000',
  '0xb948c53cBA274D77e54109061068512e92d1249d', ⟵ mike.betanet
  '0x0000000000000000000000000000000000000000',
  '0x5d60a489B2f457cB351b0faaBf5f9746d6bd4A8C', ⟵ josh.betanet
  '0xb948c53cBA274D77e54109061068512e92d1249d', ⟵ mike.betanet
  '0x0000000000000000000000000000000000000000',
  '0x0000000000000000000000000000000000000000',
  '0xb948c53cBA274D77e54109061068512e92d1249d', ⟵ mike.betanet
  '0x5d60a489B2f457cB351b0faaBf5f9746d6bd4A8C', ⟵ josh.betanet
  '0x5d60a489B2f457cB351b0faaBf5f9746d6bd4A8C', ⟵ josh.betanet
  '0x5d60a489B2f457cB351b0faaBf5f9746d6bd4A8C'  ⟵ josh.betanet
]
```