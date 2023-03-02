import { Address, Balance, IWallet, Transaction, TransactionOptions, WalletMeta } from "../../types";

class WalletService implements IWallet {
    meta: WalletMeta;

    /**
     * Creates an empty profile with a given name.
     *
     * @param name - The profile name.
     */
    constructor(meta: WalletMeta) {
        this.meta = meta;
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

export default WalletService;