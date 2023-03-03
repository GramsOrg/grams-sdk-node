import { Address, Balance, Transaction, TransactionOptions, WalletOptions } from '../';

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
 *
 * Can be used by importing the wallet from grams-sdk
 *
 * ```
 * import { Wallet } from "grams-sdk";
 * ```
 */
export interface IWallet {
  /**
   * The metadata of a wallet.
   */
  meta: WalletMeta;

  /**
   * Creates a new Grams wallet.
   *
   * @param options - An object containing options for creating the wallet.
   * @returns A promise that resolves to a `Wallet` object representing the newly created wallet.
   */
  create(options: WalletOptions): Promise<IWallet>;

  /**
   * Gets the balance of the wallet.
   *
   * @returns A promise that resolves to a Balance object representing the balance of the wallet.
   */
  balance(): Promise<Balance>;

  /**
   * Gets the address of the wallet.
   *
   * @returns A promise that resolves to an `Address` object representing the address of the wallet.
   */
  address(): Promise<Address>;

  /**
   * Sends a transaction from the wallet.
   *
   * @param transaction - The `Transaction` object representing the transaction to send.
   * @returns A promise that resolves once the transaction has been sent.
   */
  send(transaction: Transaction): Promise<void>;

  /**
   * Gets a transaction by its ID.
   *
   * @param id - The ID of the transaction to retrieve.
   * @returns A promise that resolves to a `Transaction` object representing the transaction with the given ID.
   */
  transaction(id: string): Promise<Transaction>;

  /**
   * Gets an array of transactions that match the given criteria.
   *
   * @param options - An object containing options to filter and sort the transactions.
   * @returns A promise that resolves to an array of `Transaction` objects.
   */
  transactions(options: TransactionOptions): Promise<Transaction[]>;

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
