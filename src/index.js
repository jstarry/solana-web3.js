// @flow
module.exports = (async () => {
  const {PublicKey, set_panic_hook} = await require('@solana/wasm');
  set_panic_hook();

  const {Account} = require('./account');
  const {BpfLoader} = require('./bpf-loader');
  const {BudgetProgram} = require('./budget-program');
  const {Connection} = require('./connection');
  const {Loader} = require('./loader');
  const {SystemProgram} = require('./system-program');
  const {Token, TokenAmount} = require('./token-program');
  const {Transaction, TransactionInstruction} = require('./transaction');
  const {VALIDATOR_INFO_KEY, ValidatorInfo} = require('./validator-info');
  const {VOTE_ACCOUNT_KEY, VoteAccount} = require('./vote-account');
  const {sendAndConfirmTransaction} = require('./util/send-and-confirm-transaction');
  const {sendAndConfirmRawTransaction} = require('./util/send-and-confirm-raw-transaction');
  const {testnetChannelEndpoint} = require('./util/testnet');

  return {
    Account, BpfLoader, BudgetProgram, Connection, Loader, SystemProgram, Token,
    TokenAmount, Transaction, TransactionInstruction, VALIDATOR_INFO_KEY,
    ValidatorInfo, VOTE_ACCOUNT_KEY, VoteAccount, sendAndConfirmTransaction,
    sendAndConfirmRawTransaction, testnetChannelEndpoint,
  };
})();

// export {Account} from './account';
// export {BpfLoader} from './bpf-loader';
// export {BudgetProgram} from './budget-program';
// export {Connection} from './connection';
// export {Loader} from './loader';
// export {PublicKey} from '@solana/wasm';
// export {SystemProgram} from './system-program';
// export {Token, TokenAmount} from './token-program';
// export {Transaction, TransactionInstruction} from './transaction';
// export {VALIDATOR_INFO_KEY, ValidatorInfo} from './validator-info';
// export {VOTE_ACCOUNT_KEY, VoteAccount} from './vote-account';
// export {sendAndConfirmTransaction} from './util/send-and-confirm-transaction';
// export {
//   sendAndConfirmRawTransaction,
// } from './util/send-and-confirm-raw-transaction';
// export {testnetChannelEndpoint} from './util/testnet';
//
// import {set_panic_hook} from '@solana/wasm';
// set_panic_hook();
