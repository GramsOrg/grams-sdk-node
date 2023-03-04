import { IGrams, TransactionParams, SignedTransactionParams } from '..'; // Replace with actual path to types

declare global {
  interface Window {
    grams?: IGrams;
  }
}

export class Grams implements IGrams {
  private grams: any;

  constructor() {
    this.grams = window.grams;
  }

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.grams) {
        reject(new Error('Grams extension not found'));
      }
      this.grams.connect(() => resolve());
    });
  }

  identities(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      if (!this.grams) {
        reject(new Error('Grams extension not found'));
      }
      this.grams.getIdentities((identities: string[]) => resolve(identities));
    });
  }

  wallets(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      if (!this.grams) {
        reject(new Error('Grams extension not found'));
      }
      this.grams.getWallets((wallets: string[]) => resolve(wallets));
    });
  }

  balance(wallet: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.grams) {
        reject(new Error('Grams extension not found'));
      }
      this.grams.getBalance(wallet, (balance: string) => resolve(balance));
    });
  }

  send(transaction: TransactionParams): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.grams) {
        reject(new Error('Grams extension not found'));
      }
      this.grams.sendTransaction(transaction, (txid: string) => resolve(txid));
    });
  }

  sign(transaction: SignedTransactionParams): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.grams) {
        reject(new Error('Grams extension not found'));
      }
      this.grams.signTransaction(transaction, (signedTx: string) => resolve(signedTx));
    });
  }
}

export default Grams;
