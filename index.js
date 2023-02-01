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
} from './src/api/wallet';

export {
    createDid,
    updateDid,
    resolveDid,
    deactivateDid,
    deleteDid,
    createVC,
    verifyVC,
    revokeVC,
    createVP,
    verifyVP,
} from './src/api/did';
