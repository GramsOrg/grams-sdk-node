import WalletAdapter from '../lib/adapter/wallet-adapter';

/**
 * Wallet class is used to create and manage a user's Grams wallet.
 *
 * Usage:
 * ```
 * import { Wallet } from 'grams-sdk';
 *
 * const wallet = new Wallet();
 * ```
 */
class Wallet {

    address: string;

    constructor() {
        this.address = '';
    }

    getBalance(): Promise<number> {
        return new Promise(() => { return 1; });
    }

    getTransaction(id: string): Promise<void> {
        return new Promise(() => {});
    }

}

export default Wallet;
