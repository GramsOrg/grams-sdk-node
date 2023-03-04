import { SignedTransactionParams, TransactionParams } from '..';

/**
 * Represents the Grams interface for interacting the user's profile using the browser extension.
 */
export interface IGrams {
  /**
   * Connects to the user's Grams profile
   *
   * @returns A promise that resolves once the connection has been established.
   */
  connect(): Promise<void>;

  /**
   * Returns an array of approved identity addresses on the user's profile.
   *
   * @returns A promise that resolves with an array of DIDs (decentralized identifiers).
   */
  identities(): Promise<string[]>;

  /**
   * Returns an array of approved wallet addresses.
   *
   * @returns A promise that resolves with an array of wallet addresses.
   */
  wallets(): Promise<string[]>;

  /**
   * Returns the current balance of a specified wallet.
   *
   * @param wallet - The address of the wallet to check the balance of.
   * @returns A promise that resolves with the wallet balance as a string.
   */
  balance(wallet: string): Promise<string>;

  /**
   * Sends a transaction using the given `TransactionParams`.
   *
   * @param transaction - An object representing the details of the transaction to send.
   * @returns A promise that resolves with the transaction ID as a string.
   */
  send(transaction: TransactionParams): Promise<string>;

  /**
   * Signs a transaction using the given `SignedTransactionParams`.
   *
   * @param transaction - An object representing the details of the transaction to sign.
   * @returns A promise that resolves with the signed transaction as a string.
   */
  sign(transaction: SignedTransactionParams): Promise<string>;
}
