import WalletService from '../lib/grams/WalletService';
import { Address, Balance, IWallet, Transaction, TransactionOptions, WalletMeta, WalletOptions } from '../types';

/**
 * A Grams wallet, which holds the user's address and balance.
 *
 * Use it by importing it directly from grams-sdk
 *
 * ```
 * import { Wallet } from 'grams-sdk';
 *
 * // Create a new wallet with a given name
 * const wallet = new Wallet("myWallet");
 * ```
 */
class Wallet implements IWallet {
  private service: IWallet;

  /**
   * The wallet's metadata.
   */
  meta: WalletMeta;

  /**
   * Creates an empty wallet with a given name.
   *
   * @param name - The wallet name.
   * @param service - This provides developers the possibility of extending the Wallet class with their own implementation. Defaults to Grams
   */
  constructor(meta: WalletMeta, service?: IWallet) {
    this.meta = meta;
    this.service = service || new WalletService(meta);
  }

  /**
   * Creates a new Grams wallet.
   *
   * @param options - An object containing options for creating the wallet.
   * @returns A promise that resolves to a `Wallet` object representing the newly created wallet.
   */
  create(options: WalletOptions): Promise<IWallet> {
    return this.service.create(options);
  }

  /**
   * Returns the balance of this wallet.
   *
   * @example
   * wallet
   * .getBalance()
   * .then(balance => {
   *  console.log('Wallet balance:', balance.available);
   *  // Wallet balance: 1000
   * })
   * .catch(err => {
   *  console.error('Error getting balance:', err)
   *  // Do boring stuff :/
   * });
   *
   */
  getBalance(): Promise<Balance> {
    return this.service.getBalance();
  }

  /**
   * Gets the address associated with the wallet.
   * @returns A Promise that resolves to an Address object.
   * @example
   * wallet
   * .getAddress()
   * .then(address => {
   *  console.log(address.toString());
   *  // "0x1234567890ABCDEF"
   * })
   * .catch(err => {
   *  console.error('Error getting address:', err)
   *  // Do boring stuff :/
   * });
   */
  getAddress(): Promise<Address> {
    return this.service.getAddress();
  }

  /**
   * Sends a transaction from the wallet.
   * @param transaction - The transaction to send.
   * @returns A Promise that resolves when the transaction has been sent successfully.
   * @example
   * const tx = new Transaction("0x1234567890CDF...", "0x98765432EDCBA...", 1000);
   * wallet
   * .sendTransaction(tx)
   * then(() => {
   *  // Do awesome stuff!
   * })
   * .catch(err => {
   *  console.error('Error sending transaction:', err)
   *  // Do boring stuff :/
   * });
   */
  sendTransaction(transaction: Transaction): Promise<void> {
    return this.service.sendTransaction(transaction);
  }

  /**
   * Gets a transaction by ID.
   * @param id - The ID of the transaction to get.
   * @returns A Promise that resolves to a Transaction object.
   * @example
   * const txId = "0x1234567890ABCDEF";
   * wallet
   * .getTransaction(txId)
   * .then(tx => {
   *  console.log(tx.amount);
   *  // 1000
   * })
   * .catch(err => {
   *  console.error('Error getting transaction:', err)
   *  // Do boring stuff :/
   * });
   */
  getTransaction(id: string): Promise<Transaction> {
    return this.service.getTransaction(id);
  }

  /**
   * Gets a list of transactions from the wallet.
   * @param options - An optional object containing filtering options.
   * @returns A Promise that resolves to an array of Transaction objects.
   * @example
   * const options = {
   *  from: "0x1234567890ABCDEF",
   *  to: "0x9876543210FEDCBA",
   *  minAmount: 1000
   * };
   * wallet
   * .getTransactions(options)
   * then(txs => {
   *  console.log(txs.length);
   *  // 5
   * })
   * .catch(err => {
   *  console.error('Error getting transactions:', err)
   *  // Do boring stuff :/
   * });
   */
  getTransactions(options: TransactionOptions): Promise<Transaction[]> {
    return this.service.getTransactions(options);
  }

  /**
   * Subscribes to transaction events emitted by the wallet.
   * @param listener - A callback function to be called when a transaction event is emitted.
   * @example
   * function handleTransaction(tx) {
   *  console.log(tx.amount);
   * }
   * wallet.onTransaction(handleTransaction);
   */
  onTransaction(listener: (transaction: Transaction) => void): void {
    return this.service.onTransaction(listener);
  }

  /**
   * Unsubscribes from transaction events emitted by the wallet.
   * @param listener - The callback function to be removed from the list of transaction event listeners.
   * @example
   * function handleTransaction(tx) {
   *  console.log(tx.amount);
   * }
   * wallet.offTransaction(handleTransaction);
   */
  offTransaction(listener: (transaction: Transaction) => void): void {
    return this.service.offTransaction(listener);
  }
}

export default Wallet;
