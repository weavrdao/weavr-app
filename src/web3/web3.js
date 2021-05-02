import Web3 from 'web3';

export const connect = () => new Promise((resolve) => {
  getWeb3().then((web3) => {
    try {
      // Request account access if needed
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(() => {
          // Acccounts now exposed
          resolve(web3);
        });
    } catch (error) {
      // User denied account access...
      alert('Please allow access for the app to work');
    }
  });
});

export const getWeb3 = () => new Promise((resolve) => {
  console.log("Communicating with web3..")

  let currentWeb3;

  if (window.ethereum) {
    currentWeb3 = new Web3(window.ethereum);
    resolve(currentWeb3);
  } else {
    console.log('Looks like your browser doesn\' support Web3. Consider using MetaMark or another Web3 wallet.');
  }
});