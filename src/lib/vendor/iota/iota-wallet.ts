import {
    AccountManager,
    AccountManagerOptions,
    CoinType,
    StrongholdSecretManager
} from '@iota/wallet';

interface AccountManagerProps {
    manager?: AccountManager,
    options?: AccountManagerOptions
}

const DEFAULT_URL: string = 'https://api.testnet.shimmer.network';
const DEFAULT_COIN: CoinType = CoinType.Shimmer;

/**
 * A wrapper class over IOTA's wallet features.
 * 
 * Usage:
 * ```
 * import { IOTAWallet } from 'grams-sdk';
 * 
 * const iotaWallet = new IOTAWallet();
 * ```
 */
class IOTAWallet {

    private managers: Map<string, AccountManagerProps>;

    constructor() {
        this.managers = new Map();
    }

    /**
     * Creates a new profile and returns the mnemonic string of the profile.
     * 
     * Usage:
     * ```
     * const iotaWallet = new IOTAWallet();
     * const mnemonic = iotaWallet.createAccountManager('anyName', 'anyPassword');
     * 
     * console.log(mnemonic)
     * // returns: `apple banana couch tree...'
     * ```
     * 
     * @param name the profile name, will be used to retrieve the account manager later.
     * @param password the profile password, will be used to unlock the account and approve transactions.
     * @param options Account manager options from `@iota/wallet`, defaulting to Grams
     * @returns A promise containing the mnemonic string generated during profile creation.
     */
    async createAccountManager(
        name: string,
        password: string,
        options?: AccountManagerOptions
    ): Promise<string> {

        const manager = this.getAccountManager(name, password, options);

        const mnemonic = await manager.generateMnemonic();
        await manager.storeMnemonic(mnemonic);

        return mnemonic;
    }

    getAccountManager(
        name: string,
        password: string,
        options?: AccountManagerOptions
    ): AccountManager {

        let manager = this.managers.get(name)?.manager;

        if (manager) {
            return manager;
        }

        const secretManager: StrongholdSecretManager = {
            stronghold: {
                snapshotPath: `./${name}.stronghold`,
                password
            }
        }

        const managerOptions: AccountManagerOptions = options || {
            storagePath: `./${name}-database`,
            clientOptions: {
                nodes: [DEFAULT_URL],
                localPow: true,
            },
            coinType: DEFAULT_COIN,
            secretManager
        }

        manager = new AccountManager(managerOptions);

        this.managers.set(name, {
            manager,
            options: managerOptions
        })

        return manager;
    }
}

export default IOTAWallet;
