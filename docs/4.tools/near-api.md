---
id: near-api
title: NEAR API
sidebar_label: NEAR API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The NEAR API is a set of libraries that allow you to interact with the NEAR blockchain. You can use it to create accounts, send tokens, deploy contracts, and more. 

The API is available in multiple languages, including:
- JavaScript: [`near-api-js`](https://github.com/near/near-api-js)
- Rust: [`near-api-rs`](https://github.com/near/near-api-rs)
- Python: [`py-near`](https://github.com/pvolnov/py-near)

For example, you could use [`near-api-js`](https://github.com/near/near-api-js) to create web applications or backend services written in node.js servers.

:::tip Wallet Integration
To allow users to login into your web application using a wallet you will need the `wallet-selector`. Read more in our [Web Frontend integration](/build/web3-apps/integrate-contracts) article
:::

---

## Install

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">
  Include `near-api-js` as a dependency in your package.

  ```bash
  npm i --save near-api-js
  ```

  :::tip Static HTML
  If you are building a site without using `npm`, you can include the library directly in your HTML file through a CDN.

  ```html
  <script src="https://cdn.jsdelivr.net/npm/near-api-js/dist/near-api-js.min.js"></script>
  ```
  :::

  </TabItem>
  <TabItem value="rust" label="🦀 Rust">

  ```bash
  cargo add near-api
  ```
  </TabItem>
</Tabs>

<hr class="subsection" />

### Import {#import}

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">
  You can use the API library in the browser, or in Node.js runtime. Some features are available only in one of the environments. For example, the `WalletConnection` is only for the browser, and there are different `KeyStore` providers for each environment.

  ```js
  import * as nearAPI from "near-api-js";
  ```
  </TabItem>
  <TabItem value="rust" label="🦀 Rust">

  The methods to interact with the NEAR API are available through the `prelude` module.
  ```rust
  use near_api::prelude::*;
  ```
  </TabItem>
</Tabs>

<hr class="subsection" />

### Connecting to NEAR {#connect}

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  The object returned from `connect` is your entry-point for all commands in the API.
  To sign a transaction you'll need a [`KeyStore`](#key-store) to create a connection.

  ```js
  const { connect } = nearAPI;

  const connectionConfig = {
    networkId: "testnet",
    keyStore: myKeyStore, // first create a key store
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://testnet.mynearwallet.com/",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://testnet.nearblocks.io",
  };
  const nearConnection = await connect(connectionConfig);
  ```

  <details>
    <summary>Mainnet/Localnet connection</summary>

    ```js
    // Mainnet config example
    const connectionConfig = {
      networkId: "mainnet",
      keyStore: myKeyStore, // first create a key store
      nodeUrl: "https://rpc.mainnet.near.org",
      walletUrl: "https://wallet.mainnet.near.org",
      helperUrl: "https://helper.mainnet.near.org",
      explorerUrl: "https://nearblocks.io",
    };

    // Localnet config example
    const connectionConfig = {
      networkId: "local",
      nodeUrl: "http://localhost:3030",
      walletUrl: "http://localhost:4000/wallet",
    };
    ```
  </details>

  <hr class="subsection" />

  #### Key Store

  If you sign transactions, you need to create a _Key Store_. In the browser, the LocalStorage KeyStore will be used once you ask your user to Sign In with the Wallet.

  <Tabs>
  <TabItem value="browser" label="Using Browser" default>

  ```js
  // creates keyStore using private key in local storage

  const { keyStores } = nearAPI;
  const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();
  ```

  </TabItem>
  <TabItem value="dir" label="Using Credentials Directory">

  ```js
  // creates a keyStore that searches for keys in .near-credentials
  // requires credentials stored locally by using a NEAR-CLI command: `near login`
  // https://docs.near.org/tools/cli#near-login

  const { keyStores } = nearAPI;
  const homedir = require("os").homedir();
  const CREDENTIALS_DIR = ".near-credentials";
  const credentialsPath = require("path").join(homedir, CREDENTIALS_DIR);
  const myKeyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath);
  ```

  </TabItem>
  <TabItem value="file" label="Using a File">

  ```js
  // creates keyStore from a provided file
  // you will need to pass the location of the .json key pair

  const { KeyPair, keyStores } = require("near-api-js");
  const fs = require("fs");
  const homedir = require("os").homedir();

  const ACCOUNT_ID = "near-example.testnet"; // NEAR account tied to the keyPair
  const NETWORK_ID = "testnet";
  // path to your custom keyPair location (ex. function access key for example account)
  const KEY_PATH = "/.near-credentials/near-example-testnet/get_token_price.json";

  const credentials = JSON.parse(fs.readFileSync(homedir + KEY_PATH));
  const myKeyStore = new keyStores.InMemoryKeyStore();
  myKeyStore.setKey(
    NETWORK_ID,
    ACCOUNT_ID,
    KeyPair.fromString(credentials.private_key)
  );
  ```

  </TabItem>
  <TabItem value="key" label="Using a private key string">

  ```js
  // creates keyStore from a private key string
  // you can define your key here or use an environment variable

  const { keyStores, KeyPair } = nearAPI;
  const myKeyStore = new keyStores.InMemoryKeyStore();
  const PRIVATE_KEY =
    "by8kdJoJHu7uUkKfoaLd2J2Dp1q1TigeWMG123pHdu9UREqPcshCM223kWadm";
  // creates a public / private key pair using the provided private key
  const keyPair = KeyPair.fromString(PRIVATE_KEY);
  // adds the keyPair you created to keyStore
  await myKeyStore.setKey("testnet", "example-account.testnet", keyPair);
  ```

  </TabItem>
  </Tabs>

  <details>
    <summary>Window error using `Node.js`</summary>
    
    You're maybe using a KeyStore that's for the browser. Instead, use a [filesystem key](/tools/near-api-js/quick-reference#key-store) or private key string.

    **Browser KeyStore:**

    ```js
    const { keyStores } = require("near-api-js");
    const keyStore = new keyStores.BrowserLocalStorageKeyStore();
    ```

    **FileSystem KeyStore:**

    ```js
    const { keyStores } = require("near-api-js");
    const KEY_PATH = "~./near-credentials/testnet/example-account.json";
    const keyStore = new keyStores.UnencryptedFileSystemKeyStore(KEY_PATH);
    ```
  </details>

  </TabItem>
  <TabItem value="rust" label="🦀 Rust">

  Standard connections `mainnet` and `testnet` are available that come with standard configurations for each network.

  ```rust
  let network = NetworkConfig::testnet();
  ```
  
  You can make the connection mutable to change some details of the connection.

  ```rust
  let mut network = NetworkConfig::testnet();
  network.rpc_url = "https://rpc.testnet.near.org".parse().unwrap();
  ```

  You can also create your own custom connection.

  ```rust
  let network = NetworkConfig {
    network_name: "testnet".to_string(),
    rpc_url: "https://rpc.testnet.near.org".parse().unwrap(),
    rpc_api_key: None,
    linkdrop_account_id: Some("testnet".parse().unwrap()),
    near_social_db_contract_account_id: Some("v1.social08.testnet".parse().unwrap()),
    faucet_url: Some("https://helper.nearprotocol.com/account".parse().unwrap()),
    meta_transaction_relayer_url: Some("http://localhost:3030/relay".parse().unwrap()),
    fastnear_url: None,
    staking_pools_factory_account_id: Some("pool.f863973.m0".parse().unwrap()),
  };
  ```

<hr class="subsection" />

  #### Signer

  If you're going to sign transactions, you need to create a `signer` object.

  <Tabs>
  <TabItem value="browser" label="Using Keystore" default>

  This example uses the Keystore that is also used as the standard for saving keys with the NEAR CLI.

  ```rust
  use near_api::signer::keystore::KeystoreSigner;

  let search_keystore_signer = KeystoreSigner::search_for_keys(my_account_id.clone(), &network)
    .await
    .unwrap();
  let keystore_signer_search = Signer::new(search_keystore_signer).unwrap();
  ```

  </TabItem>
  <TabItem value="file" label="Using a File">

  Keys can be loaded from a file that contains a public and private key. This is an example of loading a key from a file that was saved using the legacy option using the NEAR CLI.

  ```rust
  use std::env;
  use std::path::Path;

  let my_account_id = "example-account.testnet";
  let home_dir = env::var("HOME").unwrap();
  let credentials_dir = Path::new(&home_dir).join(".near-credentials");
  let file_path = credentials_dir.join(format!("testnet/{}.json", my_account_id));

  let file_signer = Signer::new(Signer::access_keyfile(file_path).unwrap()).unwrap();
  ```

  </TabItem>
  <TabItem value="dir" label="Using Seed Phrase">

  ```rust
  let seed_phrase =
    "shoe three gate jelly whole tissue parrot robust census lens staff ship".to_string();
  let seed_phrase_signer = Signer::new(Signer::seed_phrase(seed_phrase, None).unwrap()).unwrap();
  ```

  </TabItem>

  <TabItem value="key" label="Using a Private Key String">

  ```rust
  use near_crypto::SecretKey;
  use std::str::FromStr;

  let private_key = SecretKey::from_str("ed25519:3bUTUXCPHPbAD5JDukzsWT6AaJ9iZA3FF9wLgYgRvzC7CDYMgmEExtxyGjnGATvmM3oggqUErvRkN9sjzNTD8yd7").unwrap();
  let priv_key_signer = Signer::new(Signer::secret_key(private_key)).unwrap();
  ```

  </TabItem>
  </Tabs>

  </TabItem>
</Tabs>

<hr class="subsection" />

### RPC Failover

RPC providers can experience intermittent downtime, connectivity issues, or rate limits that cause client transactions to fail. This can be prevented by using the `FailoverRpcProvider` that supports multiple RPC providers.

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  const jsonProviders = [
    new JsonRpcProvider({
      url: 'https://rpc.mainnet.near.org',
    }),
    new JsonRpcProvider(
      {
        url: 'https://another-rpc.cloud.com',
        headers: { 'X-Api-Key': 'some string' },
      },
      { retries: 3, backoff: 2, wait: 500 }
    ),
  ];
  const provider = new FailoverRpcProvider(jsonProviders);

  await connect({
    networkId: 'mainnet',
    provider: provider,
    // this isn't used if `provider` is specified, but is still required for backward compatibility
    nodeUrl: 'https://rpc.mainnet.near.org',
  });
  ```

  </TabItem>
</Tabs>

---

## Account

### Instantiate Account {#instantiate-account}

This will return an Account object for you to interact with.

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  const account = await nearConnection.account("example-account.testnet");
  ```

  :::warning
  In order to be able to use the account, its credentials must be stored in the [key store](#key-store)
  :::

  </TabItem>
  <TabItem value="rust" label="🦀 Rust">

  ```rust
  let account_id: AccountId = "example-account.testnet".parse().unwrap();
  let account = Account::new(account_id.clone(), network);
  ```

  </TabItem>
</Tabs>

<hr class="subsection" />

### Get Balance {#get-balance}

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  // gets account balance
  const account = await nearConnection.account("example-account.testnet");
  const accountBalance = await account.getAccountBalance();
  ```

  </TabItem>
  <TabItem value="rust" label="🦀 Rust">

  ```rust
  let account_id: AccountId = "example-account.testnet".parse().unwrap();
  let account_balance = Tokens::of(account_id.clone())
    .near_balance()
    .fetch_from(&network)
    .await
    .unwrap();
  ```

  </TabItem>
</Tabs>

<hr class="subsection" />

### Get Details {#get-details}

Returns information about an account, such as authorized apps.

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  // gets account details in terms of authorized apps and transactions
  const account = await nearConnection.account("example-account.testnet");
  const accountDetails = await account.getAccountDetails();
  ```

  </TabItem>
</Tabs>

<hr class="subsection" />

### Get State {#get-state}

Get basic account information, such as amount of tokens the account has or the amount of storage it uses.

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  const account = await nearConnection.account("example-account.testnet");
  const accountState = await account.state();
  ```
  </TabItem>
  <TabItem value="rust" label="🦀 Rust">
  
  ```rust
  let account_id: AccountId = "example-account.testnet".parse().unwrap();
  let account = Account::new(my_account_id.clone(), network);

  let account_state = account.view().fetch_from(&network).await.unwrap();
  ```
  </TabItem>
</Tabs>

<hr class="subsection" />

### Create Sub-Account {#create-account}

Create a sub-account.

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  // creates a sub-account using funds from the account used to create it.
  const account = await nearConnection.account("example-account.testnet");
  await account.createAccount(
    "sub.example-account.testnet", // sub-account name
    "8hSHprDq2StXwMtNd43wDTXQYsjXcD4MJTXQYsjXcc", // public key for sub account
    "10000000000000000000" // initial balance for new account in yoctoNEAR
  );
  ```

  <details>
    <summary> Creating .near or .testnet accounts </summary>

    In order to create .near or .testnet accounts, you need to make a function call to the top-level-domain (i.e. `near` or `testnet`),  calling `create_account`:

    ```js
    return await creatorAccount.functionCall({
        contractId: "testnet",
        methodName: "create_account",
        args: {
            new_account_id: "new-account.testnet",
            new_public_key: "ed25519:2ASWccunZMBSygADWG2pXuHM6jWdnzLzWFU6r7wtaHYt",
        },
        gas: "300000000000000",
        attachedDeposit: utils.format.parseNearAmount(amount),
    });
    ```

  </details>

  </TabItem>
  <TabItem value="rust" label="🦀 Rust">
  You will need to create a signer object first.

  This example creates the sub-account and saves the seed phrase of a generated key pair to a file.

  ```rust
  let account_id: AccountId = "example-account.testnet".parse().unwrap();
  let new_account_id: AccountId = "sub.example-account.testnet".parse().unwrap();
  let res = Account::create_account()
      .fund_myself(
          new_account_id.clone(), // new account id
          account_id.clone(), // account id funding the new account
          NearToken::from_near(1), // Initial balance for the new account
      )
      .new_keypair() // Generates a new random key pair 
      .save_generated_seed_to_file("./new_account_seed".into())
      .unwrap() 
      .with_signer(signer.clone())
      .send_to(&network)
      .await
      .unwrap();
  ```

  Creating a `.near` or `.testnet` account is the exact same process as creating a sub-account.

  ```rust
  let account_id: AccountId = "example-account.testnet".parse().unwrap();
  let new_account_id: AccountId = "new_example-account.testnet".parse().unwrap();
  let res = Account::create_account()
      .fund_myself(
          new_account_id.clone(), // new account id
          account_id.clone(), // account id funding the new account
          NearToken::from_near(1), // Initial balance for the new account
      )
      .new_keypair() // Generates a new random key pair 
      .save_generated_seed_to_file("./new_account_seed".into())
      .unwrap() 
      .with_signer(signer.clone())
      .send_to(&network)
      .await
      .unwrap();
  ```

  </TabItem>
</Tabs>

<hr class="subsection" />

### Delete Account {#delete-account}

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  // deletes account found in the `account` object
  // transfers remaining account balance to the accountId passed as an argument
  const account = await nearConnection.account("example-account.testnet");
  await account.deleteAccount("beneficiary-account.testnet");
  ```

  </TabItem>
  <TabItem value="rust" label="🦀 Rust">

  ```rust
  account
    .delete_account_with_beneficiary(beneficiary_account_id.clone())
    .with_signer(signer.clone())
    .send_to(&network)
    .await
    .unwrap();
  ```

  </TabItem>
</Tabs>

---

## Transactions

### Send Tokens {#send-tokens}

Transfer NEAR tokens between accounts. This returns an object with transaction and receipts outcomes and status.

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  const account = await nearConnection.account("sender-account.testnet");
  await account.sendMoney(
    "receiver-account.testnet", // receiver account
    "1000000000000000000000000" // amount in yoctoNEAR
  );
  ```
  </TabItem>
  <TabItem value="rust" label="🦀 Rust">

  ```rust
  Tokens::of(sender_account_id.clone())
    .send_to(receiver_account_id.clone())
    .near(NearToken::from_near(1))
    .with_signer(signer.clone())
    .send_to(&network)
    .await
    .unwrap()
    .assert_success();
  ```

  </TabItem>
</Tabs>

<hr class="subsection" />

### View Function

<Tabs groupId="api">

  <TabItem value="js" label="🌐 JavaScript">
    View functions are read-only functions that don't change the state of the contract. We can call these functions without instantiating an account or a key store.

  ```js
  import { providers } from 'near-api-js';

  const url = `https://rpc.${this.networkId}.near.org`;
  const provider = new providers.JsonRpcProvider({ url });
  const args = { greeting: 'hello' };

  const response = await provider.query({
    request_type: 'call_function',
    account_id: 'hello.near-examples.testnet',
    method_name: 'get_greeting',
    args_base64: Buffer.from(JSON.stringify(args)).toString('base64'),
    finality: 'optimistic',
  });

  const result = JSON.parse(Buffer.from(res.result).toString());
  ```
  </TabItem>
  <TabItem value="rust" label="🦀 Rust">
  View functions are read-only functions that don't change the state of the contract. We can call these functions without a signer.

  You need to specify what type the view function returns.

  ```rust
  let res: Data<u32> = contract
    .call_function("total_messages", ())
    .unwrap()
    .read_only()
    .fetch_from(&network)
    .await
    .unwrap();

  println!("{:?}", res.data);
  ```
  </TabItem>
</Tabs>

<hr class="subsection" />

### Call Function

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  A call function changes the contract's state and does require an account.

  ```js
  import { connect, transactions, keyStores } from "near-api-js";

  const account = await nearConnection.account("example-account.testnet");
  const result = await account.signAndSendTransaction({
      receiverId: "example-contract.testnet",
      actions: [
          transactions.functionCall(
              "new",
              Buffer.from(JSON.stringify(newArgs)),
              10000000000000,
              "0"
          ),
      ],
  });
  ```
  </TabItem>
  <TabItem value="rust" label="🦀 Rust">

  A call function changes the contract's state and does require a signer.
  ```rust
  let args = json!({
    "text": "Hello, world!"
  });

  contract
    .call_function("add_message", args)
    .unwrap()
    .transaction()
    .deposit(NearToken::from_near(1))
    .with_signer(my_account_id.clone(), signer.clone())
    .send_to(&network)
    .await
    .unwrap()
    .assert_success();
  ```
  </TabItem>
</Tabs>

<hr class="subsection" />

### Batch Transactions

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">
  
  You may batch send transactions by using the `signAndSendTransaction({})` method from `account`. This method takes an array of transaction actions, and if one fails, the entire operation will fail. Here's a simple example:

  ```js
  const { connect, transactions, keyStores } = require("near-api-js");
  const fs = require("fs");
  const path = require("path");
  const homedir = require("os").homedir();

  const CREDENTIALS_DIR = ".near-credentials";
  const CONTRACT_NAME = "spf.idea404.testnet";
  const WASM_PATH = path.join(__dirname, "../build/uninitialized_nft.wasm");

  const credentialsPath = path.join(homedir, CREDENTIALS_DIR);
  const keyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath);

  const config = {
    keyStore,
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
  };

  sendTransactions();

  async function sendTransactions() {
    const near = await connect({ ...config, keyStore });
    const account = await near.account(CONTRACT_NAME);
    const args = { some_field: 1, another_field: "hello" };

    const balanceBefore = await account.getAccountBalance();
    console.log("Balance before:", balanceBefore);

    try {
      const result = await account.signAndSendTransaction({
        receiverId: CONTRACT_NAME,
        actions: [
          transactions.deployContract(fs.readFileSync(WASM_PATH)),  // Contract does not get deployed
          transactions.functionCall("new", Buffer.from(JSON.stringify(args)), 10000000000000, "0"),  // this call fails
          transactions.transfer("1" + "0".repeat(24)), // 1 NEAR is not transferred either
        ],
      });
      console.log(result);
    } catch (e) {
      console.log("Error:", e);
    }

    const balanceAfter = await account.getAccountBalance();
    console.log("Balance after:", balanceAfter);
  }
  ```

  <details>
    <summary>Response Example</summary>
    ```bash
    Balance before: {
      total: '49987878054959838200000000',
      stateStaked: '4555390000000000000000000',
      staked: '0',
      available: '45432488054959838200000000'
    }
    Receipts: 2PPueY6gnA4YmmQUzc8DytNBp4PUpgTDhmEjRSHHVHBd, 3isLCW9SBH1MrPjeEPAmG9saHLj9Z2g7HxzfBdHmaSaG
      Failure [spf.idea404.testnet]: Error: {"index":1,"kind":{"ExecutionError":"Smart contract panicked: panicked at 'Failed to deserialize input from JSON.: Error(\"missing field `owner_id`\", line: 1, column: 40)', nft/src/lib.rs:47:1"}}
    Error: ServerTransactionError: {"index":1,"kind":{"ExecutionError":"Smart contract panicked: panicked at 'Failed to deserialize input from JSON.: Error(\"missing field `owner_id`\", line: 1, column: 40)', nft/src/lib.rs:47:1"}}
        at parseResultError (/Users/dennis/Code/naj-test/node_modules/near-api-js/lib/utils/rpc_errors.js:31:29)
        at Account.<anonymous> (/Users/dennis/Code/naj-test/node_modules/near-api-js/lib/account.js:156:61)
        at Generator.next (<anonymous>)
        at fulfilled (/Users/dennis/Code/naj-test/node_modules/near-api-js/lib/account.js:5:58)
        at processTicksAndRejections (node:internal/process/task_queues:96:5) {
      type: 'FunctionCallError',
      context: undefined,
      index: 1,
      kind: {
        ExecutionError: "Smart contract panicked: panicked at \'Failed to deserialize input from JSON.: Error("missing field `owner_id`", line: 1, column: 40)\', nft/src/lib.rs:47:1"
      },
      transaction_outcome: {
        block_hash: '5SUhYcXjXR1svCxL5BhCuw88XNdEjKXqWgA9X4XZW1dW',
        id: 'SKQqAgnSN27fyHpncaX3fCUxWknBrMtxxytWLRDQfT3',
        outcome: {
          executor_id: 'spf.idea404.testnet',
          gas_burnt: 4839199843770,
          logs: [],
          metadata: [Object],
          receipt_ids: [Array],
          status: [Object],
          tokens_burnt: '483919984377000000000'
        },
        proof: [ [Object], [Object], [Object], [Object], [Object] ]
      }
    }
    Balance after: {
      total: '49985119959346682700000000',
      stateStaked: '4555390000000000000000000',
      staked: '0',
      available: '45429729959346682700000000'
    }
    ```
  </details>

  You may also find an example of batch transactions in the [Cookbook](/tools/near-api-js/cookbook).
  </TabItem>
</Tabs>

<hr class="subsection" />

### Deploy a Contract {#deploy-a-contract}

You can deploy a contract from a compiled WASM file. This returns an object with transaction and receipts outcomes and status.

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  const account = await nearConnection.account("example-account.testnet");
  const transactionOutcome = await account.deployContract(
    fs.readFileSync("example-file.wasm")
  );
  ```
  </TabItem>
</Tabs>

<hr class="subsection" />

### Signing Messages 



---

## Keys

You can get and manage keys for an account.

### Add Function Access Key {#add-function-access-key}

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  const account = await nearConnection.account("example-account.testnet");
  await account.addKey(
    "8hSHprDq2StXwMtNd43wDTXQYsjXcD4MJTXQYsjXcc", // public key for new account
    "example-account.testnet", // contract this key is allowed to call (optional)
    "example_method", // methods this key is allowed to call (optional)
    "2500000000000" // allowance key can use to call methods (optional)
  );
  ```

  </TabItem>
  <TabItem value="rust" label="🦀 Rust">

  ```rust
  use near_primitives::account::FunctionCallPermission;

  let new_function_call_key = AccessKeyPermission::FunctionCall(FunctionCallPermission {
    allowance: Some(250_000_000_000_000_000_000_000), // Allowance this key is allowed to call (optional)
    receiver_id: "example-account.testnet".to_string(), // Contract this key is allowed to call 
    method_names: vec!["example_method".to_string()], // Methods this key is allowed to call 
  });

  let (new_private_key, txn) = Account(account_id.clone())
    .add_key(new_function_call_key)
    .new_keypair()
    .generate_secret_key() // Generates a new keypair via private key 
    .unwrap();

  println!("New private key: {:?}", new_private_key.to_string());
  println!("New public key: {:?}", new_private_key.public_key().to_string());

  txn.with_signer(signer.clone()).send_to(&network).await.unwrap(); // Sends the transaction to the network
  ```

  </TabItem>
</Tabs>

<hr class="subsection" />

### Add Full Access Key {#add-full-access-key}

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  // takes public key as string for argument
  const account = await nearConnection.account("example-account.testnet");
  await account.addKey("8hSHprDq2StXwMtNd43wDTXQYsjXcD4MJTXQYsjXcc");
  ```

  </TabItem>
  <TabItem value="rust" label="🦀 Rust">

  ```rust
  use near_primitives::account::AccessKeyPermission;

  let (new_private_key, txn) = Account(account_id.clone())
    .add_key(AccessKeyPermission::FullAccess)
    .new_keypair()
    .generate_secret_key() // Generates a new keypair via private key 
    .unwrap();

  println!("New private key: {:?}", new_private_key.to_string());
  println!("New public key: {:?}", new_private_key.public_key().to_string());

  txn.with_signer(signer.clone()).send_to(&network).await.unwrap();
  ```

  </TabItem>
</Tabs>

<hr class="subsection" />

### Get All Access Keys {#get-all-access-keys}

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  const account = await nearConnection.account("example-account.testnet");
  await account.getAccessKeys();
  ```

  </TabItem>
  <TabItem value="rust" label="🦀 Rust">
  
  ```rust
  let account = Account(account_id.clone());
  let keys = account.list_keys().fetch_from(&network).await.unwrap();
  ```
  </TabItem>
</Tabs>

<hr class="subsection" />

### Delete Access Key {#delete-access-key}

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  const account = await nearConnection.account("example-account.testnet");
  await account.deleteKey("8hSHprDq2StXwMtNd43wDTXQYsjXcD4MJTXQYsjXcc");
  ```

  </TabItem>
  <TabItem value="rust" label="🦀 Rust">

  ```rust
  let my_account = Account(account_id.clone());
  my_account.delete_key(new_private_key.public_key()).with_signer(signer.clone()).send_to(&network).await.unwrap();
  ```

  </TabItem>
</Tabs>

---

## Utilities

### NEAR => yoctoNEAR {#near--yoctonear}

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  // converts NEAR amount into yoctoNEAR (10^-24)

  const { utils } = nearAPI;
  const amountInYocto = utils.format.parseNearAmount("1");
  ```

  </TabItem>
</Tabs>

<hr class="subsection" />

### YoctoNEAR => NEAR {#yoctonear--near}

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  ```js
  // converts yoctoNEAR (10^-24) amount into NEAR

  const { utils } = nearAPI;
  const amountInNEAR = utils.format.formatNearAmount("1000000000000000000000000");
  ```

  </TabItem>
</Tabs>

---

## Additional resources

<Tabs groupId="api">
  <TabItem value="js" label="🌐 JavaScript">

  - [Handling Passphrases](https://github.com/near/near-seed-phrase)
  - [Type Docs](https://near.github.io/near-api-js)

  </TabItem>
</Tabs>