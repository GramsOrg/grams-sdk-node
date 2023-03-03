import { CoinType } from '@iota/wallet';
import { v4 as uuid } from 'uuid';
import { ProfileOptions } from '../types/profile/ProfileOptions';
import Wallet from './wallet';

class Profile {
/*
    id: string;
    name: string;
    did?: string;

    private nodeUrl: string = 'https://api.testnet.shimmer.network';
    private coinType: CoinType = CoinType.Shimmer;
    private localPow: boolean = true;

    constructor(options: ProfileOptions) {
        this.id = uuid();
        this.name = options.name;
        this.nodeUrl = options.nodeUrl || this.nodeUrl;
        this.coinType = options.coinType || this.coinType;
        this.localPow = options.localPow || this.localPow;
    }

    createProfile(password: string): Promise<void> {
        return new Promise(() => {});
    }

    createLedgerProfile(password: string): Promise<void> {
        return new Promise(() => {});
    }

    createIdentity(password: string): Promise<void> {
        return new Promise(() => {});
    }
    
    unlock(password: string): Promise<void> {
        return new Promise(() => {});
    }

    createWallet(name: string): Promise<Wallet> {
        return new Promise(() => { return new Wallet() });
    }

    changePassword(oldPassword: string, newPassword: string): Promise<void> {
        return new Promise(() => {});
    }

    backup(path: string, password: string): Promise<void> {
        return new Promise(() => {});
    }

    restore(path: string, password: string): Promise<void> {
        return new Promise(() => {});
    }
*/
}

export default Profile;
