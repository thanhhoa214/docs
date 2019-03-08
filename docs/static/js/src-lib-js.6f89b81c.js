(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/lib/js.mdx":function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return g});var t=n("./node_modules/react/index.js"),o=n.n(t),r=n("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function s(e,a){return!a||"object"!==m(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,a){return(i=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}var g=function(e){function a(e){var n;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),(n=s(this,l(a).call(this,e))).layout=null,n}var n,t,m;return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&i(e,a)}(a,o.a.Component),n=a,(t=[{key:"render",value:function(){var e=this.props,a=e.components;c(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:a},o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"javascript-library"}},"JavaScript library"),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"keypair"}},"KeyPair"),o.a.createElement(r.MDXTag,{name:"p",components:a},"This class provides key pair functionality (generating key pairs, encoding key pairs)."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"parameters"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"publicKey")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"secretKey")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string")))),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"getpublickey"}},"getPublicKey"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Get the public key."),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"getsecretkey"}},"getSecretKey"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Get the secret key."),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-1"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"fromrandomseed"}},"fromRandomSeed"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Generate a new keypair from a random seed"),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-2"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"encodebufferinbs58"}},"encodeBufferInBs58"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Encode a buffer as string using bs58"),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"parameters-1"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"buffer")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://nodejs.org/api/buffer.html"}},"Buffer")))),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-3"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"account"}},"Account"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Near account and account related operations."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"parameters-2"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"nearClient"))),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-4"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"createaccount"}},"createAccount"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Creates a new account with a given name and key,"),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"parameters-3"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"newAccountId")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," id of the new account."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"publicKey")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," public key to associate with the new account"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"amount")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number"}},"number"))," amount of tokens to transfer from originator account id to the new account as part of the creation."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"originator")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"originatorAccountId")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," existing account on the blockchain to use for transferring tokens into the new account")),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-5"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"createaccountwithrandomkey"}},"createAccountWithRandomKey"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Creates a new account with a new random key pair. Returns the key pair to the caller. It's the caller's responsibility to\nmanage this key pair."),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"parameters-4"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"newAccountId")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," id of the new account"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"amount")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number"}},"number"))," amount of tokens to transfer from originator account id to the new account as part of the creation."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"originatorAccountId")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," existing account on the blockchain to use for transferring tokens into the new account")),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-6"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"viewaccount"}},"viewAccount"),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"parameters-5"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"accountId")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," id of the account to look up")),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-7"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"walletaccount"}},"WalletAccount"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Wallet based account and signer that uses external wallet through the iframe to sign transactions."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"parameters-6"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"appKeyPrefix")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," an application prefix to use distinguish between multiple apps under the same origin."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"walletBaseUrl")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," base URL to the wallet (optional, default ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'https://wallet.nearprotocol.com'"),")")),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-8"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"issignedin"}},"isSignedIn"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Returns true, if this WalletAccount is authorized with the wallet."),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-9"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"getaccountid"}},"getAccountId"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Returns authorized Account ID."),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-10"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"requestsignin"}},"requestSignIn"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Redirects current page to the wallet authentication page."),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"parameters-7"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"contract_id")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," contract ID of the application"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"title")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," name of the application"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"success_url")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," url to redirect on success"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"failure_url")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," url to redirect on failure")),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-11"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"signout"}},"signOut"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Sign out from the current account."),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-12"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"signtransaction"}},"signTransaction"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Sign a transaction. If the key for senderAccountId is not present, this operation\nwill fail. Sends a sign request to the wallet through the iframe."),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"parameters-8"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"tx")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object"}},"object"))," transaction details object. Should contain body and hash"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"senderAccountId")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," account ID of the sender")),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-13"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"near"}},"Near"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Javascript library for interacting with near."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"parameters-9"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"nearClient")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"NearClient"))),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-14"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"callviewfunction"}},"callViewFunction"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Calls a view function. Returns the same value that the function returns."),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"parameters-10"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"sender")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," account id of the sender"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"contractAccountId")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," account id of the contract"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"methodName")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," method to call"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"args")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object"}},"object"))," arguments to pass to the method")),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-15"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"schedulefunctioncall"}},"scheduleFunctionCall"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Schedules an asynchronous function call. Returns a hash which can be used to\ncheck the status of the transaction later."),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"parameters-11"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"amount")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number"}},"number"))," amount of tokens to transfer as part of the operation"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"originator")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"contractId")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"methodName")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," method to call"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"args")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object"}},"object"))," arguments to pass to the method"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"sender")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," account id of the sender"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"contractAccountId")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," account id of the contract")),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-16"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"deploycontract"}},"deployContract"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Deploys a smart contract to the block chain"),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"parameters-12"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"originator")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"contractId")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"wasmByteArray")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"sender")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," account id of the sender"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"contractAccountId")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," account id of the contract"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"wasmArray")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array"}},"Uint8Array"))," wasm binary")),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-17"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"gettransactionstatus"}},"getTransactionStatus"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Get a status of a single transaction identified by the transaction hash."),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"parameters-13"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"transactionHash")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," unique identifier of the transaction")),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-18"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"loadcontract"}},"loadContract"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Load given contract and expose it's methods."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Every method is taking named arguments as JS object, e.g.:\n",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'{ paramName1: "val1", paramName2: 123 }')),o.a.createElement(r.MDXTag,{name:"p",components:a},"View method returns promise which is resolved to result when it's available.\nState change method returns promise which is resolved when state change is succesful and rejected otherwise."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Note that ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"options")," param is only needed temporary while contract introspection capabilities are missing."),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"parameters-14"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"contractAccountId")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," contract account name"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"options")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object"}},"object"))," object used to pass named parameters",o.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"options.sender")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," account name of user which is sending transactions"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"options.viewMethods")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array"}},"Array"),"<",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"),">")," list of view methods to load (which don't change state)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"options.changeMethods")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array"}},"Array"),"<",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"),">")," list of methods to load that change state")))),o.a.createElement(r.MDXTag,{name:"p",components:a},"Returns ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object"}},"object"))," object with methods corresponding to given contract methods."),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-19"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"createdefaultconfig"}},"createDefaultConfig"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Generate a default configuration for nearlib"),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"parameters-15"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"nodeUrl")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String"}},"string"))," url of the near node to connect to (optional, default ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'http://localhost:3030'"),")")),o.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"examples-20"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"TODO: Add code example(s)\n")))}}])&&p(n.prototype,t),m&&p(n,m),a}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-lib-js.3044a701c7adbbea6124.js.map