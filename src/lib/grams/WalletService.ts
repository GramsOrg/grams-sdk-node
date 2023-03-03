import { Account, AccountManager, Address as IOTAAddress } from '@iota/wallet';
import {
  Address,
  Balance,
  GramsError,
  IWallet,
  Transaction,
  TransactionOptions,
  WalletMeta,
  WalletOptions,
} from '../../types';

export interface GramsWalletOptions extends WalletOptions {
  accountManager: AccountManager;
}

class WalletService implements IWallet {
  meta: WalletMeta;

  account?: Account;

  address?: Address;

  constructor(meta: WalletMeta) {
    this.meta = meta;
  }

  create(options: GramsWalletOptions): Promise<IWallet> {
    return options.accountManager
      .createAccount({ alias: this.meta.name })
      .then((account) => {
        this.account = account;
        return account;
      })
      .then((account) => account.generateAddress())
      .then((address) => {
        this.address = address;
        return this;
      });
  }

  getBalance(): Promise<Balance> {
    if (!this.account) {
      throw new GramsError('Wallet not initialized, create the wallet to be able to get the balance');
    }

    return this.account.sync().then((balance) => {
      return {
        available: balance.baseCoin.available,
        total: balance.baseCoin.total,
      };
    });
  }

  getAddress(): Promise<Address> {
    if (!this.address) {
      throw new GramsError('Wallet not initialized, create the wallet to be able to get the balance');
    }

    return Promise.resolve(this.address);
  }
  sendTransaction(transaction: Transaction): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getTransaction(id: string): Promise<Transaction> {
    throw new Error('Method not implemented.');
  }
  getTransactions(options: TransactionOptions): Promise<Transaction[]> {
    throw new Error('Method not implemented.');
  }
  onTransaction(listener: (transaction: Transaction) => void): void {
    throw new Error('Method not implemented.');
  }
  offTransaction(listener: (transaction: Transaction) => void): void {
    throw new Error('Method not implemented.');
  }
}

export default WalletService;
