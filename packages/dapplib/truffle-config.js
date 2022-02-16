require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remember social hockey arctic off gift'; 
let testAccounts = [
"0x4876645ac4e5c5ba80c7190e789bde1aac0de0a17623a907846f965c613b1bc1",
"0x8adc9e9d279ccdc0ad5e68e71abcebde8dbff16dcc451b634533a691b454b1bd",
"0x08b68f14ab3dc3f47136e8381d61d05d41dab3009d70fa3614518d7781771cf3",
"0xa2e8c2449114da08a472f07dd40ab2483769d6f018566c8ab5081d883c420bb5",
"0x6d94fcdeb0f4e51a0d9b1162e4bb11073156365ed9bb5782f77e2e612b8693cb",
"0x42190307089597e434cb50164420aa2030d17920cc4911b4a9fd27e28aa8c88d",
"0x2021c3e31cc694ff6a7d901047a6fb278326f308e2aaed77bc397ccfc7b85785",
"0x63c4d0f504065396f50d52b2fb006bc699f0e0e841cbe98b6e231b481c6382de",
"0xfa3ec7a9b5b692e771b720f8ae3fcb339cf279b3df628b0d0bf07011ee9a6fcf",
"0xe653e9dc7d11784aae7291160e4e153289cdca0a8d82be1488b5815d4a82f918"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


