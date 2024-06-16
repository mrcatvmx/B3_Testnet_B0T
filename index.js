require('colors');
const fs = require('fs');
const readlineSync = require('readline-sync');
const startClaiming = require('./src/claim');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=     Welcome to B3 Incentivized Testnet B0T     ='.cyan);
  console.log('=     Follow us on Twitter:                     ='.cyan);
  console.log('=         https://twitter.com/cipher_airdrop    ='.cyan);
  console.log('=     Join us on Telegram:                      ='.cyan);
  console.log('=         https://t.me/+tFmYJSANTD81MzE1        ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

displayHeader();

const JWT_ACCOUNTS = JSON.parse(fs.readFileSync('accounts.json', 'utf-8'));

const numClicks = parseInt(
  readlineSync.question('How many clicks: '.cyan),
  10
);

startClaiming(JWT_ACCOUNTS, numClicks);
