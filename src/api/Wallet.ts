import WalletService from "../lib/grams/WalletService";
import { Address, Balance, IWallet, Transaction, TransactionOptions, WalletMeta } from "../types";

class Wallet implements IWallet {

    private service: IWallet;

    /**
     * The profile's metadata.
     */
    meta: WalletMeta;

    /**
     * Creates an empty profile with a given name.
     *
     * @param name - The profile name.
     * @param service - This provides developers the possibility of extending the Profile class with their own implementation. Defaults to Grams
     */
    constructor(meta: WalletMeta, service?: IWallet) {
        this.meta = meta;
        this.service = service || new WalletService(meta);
    }
    getBalance(): Promise<Balance> {
        throw new Error("Method not implemented.");
    }
    getAddress(): Promise<Address> {
        throw new Error("Method not implemented.");
    }
    sendTransaction(transaction: Transaction): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getTransaction(id: string): Promise<Transaction> {
        throw new Error("Method not implemented.");
    }
    getTransactions(options: TransactionOptions): Promise<Transaction> {
        throw new Error("Method not implemented.");
    }
    onTransaction(listener: (transaction: Transaction) => void): void {
        throw new Error("Method not implemented.");
    }
    offTransaction(listener: (transaction: Transaction) => void): void {
        throw new Error("Method not implemented.");
    }
}

export default Wallet;
