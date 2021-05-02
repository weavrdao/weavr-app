import * as Web3 from './web3';

var account

export const getAccount = () => new Promise((resolve) => {
  Web3.getWeb3().then((web3) => {
    web3.eth.getAccounts().then((accounts) => {
      [account] = accounts;
      resolve(account)
    }).catch((err) => {
      console.log(err);
    });
  });
});

export const connectToAccount = () => new Promise((resolve) => {
  Web3.connect().then((web3) => {
    web3.eth.getAccounts().then((accounts) => {
      [account] = accounts;
      resolve(account)
    }).catch((err) => {
      console.log(err);
    });
  });
});