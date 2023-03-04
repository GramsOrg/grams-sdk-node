import { Account, AccountManager, Address as IOTAAddress } from '@iota/wallet';
import {
  Address,
  Balance,
  Collectible,
  Foundry,
  GramsError,
  IWallet,
  Token,
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

  private account?: Account;

  private accountAddress?: Address;

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
        this.accountAddress = address;
        return this;
      });
  }

  balance(): Promise<Balance> {
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

  address(): Promise<Address> {
    if (!this.accountAddress) {
      throw new GramsError('Wallet not initialized, create the wallet to be able to get the balance');
    }

    return Promise.resolve(this.accountAddress);
  }
  send(transaction: Transaction): Promise<void> {
    throw new Error('Method not implemented.');
  }
  sign(transaction: Transaction): Promise<void> {
    throw new Error('Method not implemented.');
  }
  tokens(): Promise<Token[]> {
    throw new Error('Method not implemented.');
  }
  collectibles(): Promise<Collectible[]> {
    throw new Error('Method not implemented.');
  }
  foundries(): Promise<Foundry[]> {
    throw new Error('Method not implemented.');
  }
  transaction(id: string): Promise<Transaction> {
    throw new Error('Method not implemented.');
  }
  transactions(options: TransactionOptions): Promise<Transaction[]> {
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
