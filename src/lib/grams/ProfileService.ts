// Copyright 2023 Grams
// SPDX-License-Identifier: Apache-2.0

import {
    AccountManager,
    AccountManagerOptions,
    CoinType,
    StrongholdSecretManager
} from "@iota/wallet";

import {
    IIdentity,
    IProfile,
    IWallet,
    ProfileMeta,
    ProfileOptions
} from "../../types";
import WalletService from "./WalletService";

const DEFAULT_URL: string = 'https://api.testnet.shimmer.network';
const DEFAULT_COIN: CoinType = CoinType.Shimmer;

class ProfileService implements IProfile {
    
    meta: ProfileMeta;

    private accountManager?: AccountManager;
    private identity?: IIdentity;
    private wallet?: IWallet;

    constructor(meta: ProfileMeta, walletService?: IWallet) {
        this.meta = meta;
    }

    async createProfile(options: ProfileOptions): Promise<string> {
        this.accountManager = new AccountManager(this.managerOptions(options));

        let mnemonic = options.mnemonic;

        if (!mnemonic) {
            mnemonic = await this.accountManager.generateMnemonic();
        }
        await this.accountManager.storeMnemonic(mnemonic);

        return mnemonic;
    }

    unlock(options: ProfileOptions): Promise<void> {
        this.accountManager = new AccountManager(this.managerOptions(options));
        return Promise.resolve();
    }

    createWallet(name: string): Promise<IWallet> {
        this.wallet = new WalletService({
            name,
        });
        return this.wallet.create({});
    }

    createIdentity(name: string): Promise<IIdentity> {
        throw new Error("Method not implemented.");
    }

    changePassword(oldPassword: string, newPassword: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    backup(path: string, password: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    restore(path: string, password: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    private managerOptions(options: ProfileOptions): AccountManagerOptions {
        return {
            storagePath: `./${this.meta.name}-database`,
            clientOptions: {
              nodes: [options.advanced?.nodeUrl || DEFAULT_URL],
              localPow: options.advanced?.localPow || true,
            },
            coinType: options.advanced?.coinType || DEFAULT_COIN,
            secretManager: this.secretManager(options.password),
        };
    }

    private secretManager(password: string): StrongholdSecretManager {
        return {
            stronghold: {
              snapshotPath: `./${this.meta.name}.stronghold`,
              password,
            },
        };
    }
}

export default ProfileService;