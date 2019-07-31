// @flow

// import('@solana/wasm').then((wasm) => {
//   console.log("HIIIIIII");
//   wasm.set_panic_hook();
//   import('./index.js').catch(e => console.error('Error importing `index.js`:', e));
// });

// const wasm = import('@solana/wasm');

import systemProgram from './system-program';
// import {Account} from './account';
// import {BpfLoader} from './bpf-loader';
// import {BudgetProgram} from './budget-program';
// import {Connection} from './connection';
// import {Loader} from './loader';
// import {Token, TokenAmount} from './token-program';
// import {Transaction, TransactionInstruction} from './transaction';
// import {VALIDATOR_INFO_KEY, ValidatorInfo} from './validator-info';
// import {VOTE_ACCOUNT_KEY, VoteAccount} from './vote-account';
// import {sendAndConfirmTransaction} from './util/send-and-confirm-transaction';
// import {
//   sendAndConfirmRawTransaction,
// } from './util/send-and-confirm-raw-transaction';
// import {testnetChannelEndpoint} from './util/testnet';

module.exports = (async () => {
  const {PublicKey, set_panic_hook} = await import('@solana/wasm');
  set_panic_hook();

  // const {Account} = require('./account');
  // const {BpfLoader} = require('./bpf-loader');
  // const {BudgetProgram} = require('./budget-program');
  // const {Connection} = require('./connection');
  // const {Loader} = require('./loader');
  // const {SystemProgram} = require('./system-program');
  // const {Token, TokenAmount} = require('./token-program');
  // const {Transaction, TransactionInstruction} = require('./transaction');
  // const {VALIDATOR_INFO_KEY, ValidatorInfo} = require('./validator-info');
  // const {VOTE_ACCOUNT_KEY, VoteAccount} = require('./vote-account');
  // const {sendAndConfirmTransaction} = require('./util/send-and-confirm-transaction');
  // const {sendAndConfirmRawTransaction} = require('./util/send-and-confirm-raw-transaction');
  // const {testnetChannelEndpoint} = require('./util/testnet');
  const SystemProgram = await systemProgram();
  return { PublicKey, SystemProgram };

  // return {
  //   Account, Connection, SystemProgram, Transaction, TransactionInstruction, VALIDATOR_INFO_KEY,
  //   ValidatorInfo, VOTE_ACCOUNT_KEY, VoteAccount, sendAndConfirmTransaction,
  //   sendAndConfirmRawTransaction, testnetChannelEndpoint,
  // };
})();

// export {PublicKey} from '@solana/wasm';
//
// export {Account} from './account';
// export {BpfLoader} from './bpf-loader';
// export {BudgetProgram} from './budget-program';
// export {Connection} from './connection';
// export {Loader} from './loader';
// export {SystemProgram} from './system-program';
// export {Token, TokenAmount} from './token-program';
// export {Transaction, TransactionInstruction} from './transaction';
// export {VALIDATOR_INFO_KEY, ValidatorInfo} from './validator-info';
// export {VOTE_ACCOUNT_KEY, VoteAccount} from './vote-account';
// export {sendAndConfirmTransaction} from './util/send-and-confirm-transaction';
// export {sendAndConfirmRawTransaction} from './util/send-and-confirm-raw-transaction';
// export {testnetChannelEndpoint} from './util/testnet';
