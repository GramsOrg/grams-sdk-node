import { Address } from "./Address";
import { Balance } from "./Balance";
import { Transaction, TransactionOptions } from "./Transaction";

/**
 * The metadata of a wallet.
 */
export interface WalletMeta {
    
    /**
     * The name of the wallet.
     */
    name: string;
}

/**
 * Represents a Grams wallet.
 */
export interface IWallet {

    /**
     * The metadata of a wallet.
     */
    meta: WalletMeta;

    /**
     * Gets the balance of the wallet.
     *
     * @returns A promise that resolves to a Balance object representing the balance of the wallet.
     */
    getBalance(): Promise<Balance>;

    /**
     * Gets the address of the wallet.
     *
     * @returns A promise that resolves to an `Address` object representing the address of the wallet.
     */
    getAddress(): Promise<Address>;

    /**
     * Sends a transaction from the wallet.
     *
     * @param transaction - The `Transaction` object representing the transaction to send.
     * @returns A promise that resolves once the transaction has been sent.
     */
    sendTransaction(transaction: Transaction): Promise<void>;

    /**
     * Gets a transaction by its ID.
     *
     * @param id - The ID of the transaction to retrieve.
     * @returns A promise that resolves to a `Transaction` object representing the transaction with the given ID.
     */
    getTransaction(id: string): Promise<Transaction>;

    /**
     * Gets an array of transactions that match the given criteria.
     *
     * @param options - An object containing options to filter and sort the transactions.
     * @returns A promise that resolves to an array of `Transaction` objects.
     */
    getTransactions(options: TransactionOptions): Promise<Transaction>;

    /**
     * Registers a listener function to be called whenever a transaction is received by the wallet.
     *
     * @param listener - The listener function to register.
     */
    onTransaction(listener: (transaction: Transaction) => void): void;

    /**
     * Unregisters a previously registered listener function for transaction events.
     *
     * @param listener - The listener function to unregister.
     */
    offTransaction(listener: (transaction: Transaction) => void): void;
}
