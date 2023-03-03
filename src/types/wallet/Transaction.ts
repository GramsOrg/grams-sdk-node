import { Address } from '../';

/**
 * An object containing options to filter and sort transactions.
 */
export interface TransactionOptions {
  /** The maximum number of transactions to return. */
  limit?: number;

  /** A string representing the sorting order (e.g. 'asc' or 'desc'). */
  sort?: string;
}

/**
 * Represents a Grams transaction.
 */
export interface Transaction {
  /** The ID of the transaction. */
  id: string;

  /** The sender of the transaction. */
  from: Address;

  /** The recipient of the transaction. */
  to: Address;

  /** The amount of the transaction. */
  amount: string;

  /** The fee for the transaction. */
  fee: string;

  /** The timestamp of the transaction. */
  timestamp: number;

  /** The status of the transaction. */
  status: string;

  /** The hash of the transaction. */
  hash: string;
}
