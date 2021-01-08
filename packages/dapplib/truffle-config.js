require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski stool dash oven evil grid argue metal gift'; 
let testAccounts = [
"0xe89a0de567d019355a3010dd0896f2eba72598e90f1432eb75f4784b2ee9e2f4",
"0x23ba77bbcc6d6308c72961b361d45d62f9e6ad56361ea1e3d97b88752d7b4666",
"0x73e19a5eadd128c3998c02a597f7debca3fa55dd30411412fc36822bad9a2187",
"0x77a1984f6bf8a5e292adb2cc9b9fc3a10a019be9f68c7a450a6c62d231586bb3",
"0xac16b53f696c3a3f299c29f50ff7ba5a5206bf758d90b65073e5572939ebf777",
"0x6ec149660217b7b5308a47d004ebdc6f7ce4855737dc07d1e7481fee917647c4",
"0x4105816257668a348bdd1923d29297cfc96b7b2b6b47de39f0bc40d86eef57a2",
"0x24eae8182d355751fd1137d0d3ea77273d7fea75f52936ad25fb2372bf81bc2f",
"0xf0186315519412aac8dc75c74c9a2dc017e2f13307bb37a6e135b0054c224afe",
"0xcf8948220ccba9cb296b80da1e8f63d8f613e0a47002d1b17726c581ec280185"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
