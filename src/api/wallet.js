import { DEFAULT_LOCAL_POW, DEFAULT_NODE_URL } from '../lib/config/network';

async function createAccount(name, password) {

    const { data, error } = await getSyncedAccount(name, password);

    if (error) {
        // Create account
        const manager = getAccountManager(name);
        manager.storeMnemonic(SignerType.Stronghold);
        data = manager.createAccount({
            clientOptions: {
                node: { url: DEFAULT_NODE_URL },
                localPow: DEFAULT_LOCAL_POW,
            },
            alias: name,
        });
    }

    try {
        const synced = await data.sync();
        return { data: synced, error: null };
    } catch (error) {
        return { data: null, error: error };
    }
}

async function getAccount(name, password) {
    return await getSyncedAccount(name, password);
}

async function generateAddress(name, password) {

    const { data, error } = await getSyncedAccount(name, password);
    if (error) {
        return { data: null, error: error };
    }
    const address = data.generateAddress();
    return { data: address, error: null }
}

async function getBalance() {
}

async function getDevFunds() {
}

async function sendAmount() {
}

async function getTransaction() {
}

async function getTransactions() {
}

async function getPendingTransactions() {
}

// private functions

async function getSyncedAccount(name, password) {
    const manager = getAccountManager(name);
    manager.setStrongholdPassword(password);
    let account;
    try {
        account = manager.getAccount(name);
        const synced = await account.sync();
        return { data: synced, error: null }
    } catch (e) {
        // console.log("Couldn't get account, creating a new one");
        return { data: null, error: e }
    }
}

function getAccountManager(name) {
    const { AccountManager, SignerType } = require('@iota/wallet');

    const manager = new AccountManager({
        storagePath: `./${name}-database`,
    });

    return manager;
}

export {
    createAccount,
    getAccount,
    generateAddress,
    getBalance,
    getDevFunds,
    sendAmount,
    getTransaction,
    getTransactions,
    getPendingTransactions,
}
