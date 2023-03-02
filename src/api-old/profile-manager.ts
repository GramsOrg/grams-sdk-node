import WalletAdapter from '../lib/adapter/wallet-adapter';

import { ProfileOptions } from '../types/ProfileOptions';
import Profile from './profile';

/**
 * Profile is used to create and manage a user's Grams profiles.
 *
 * Usage:
 * ```
 * import { ProfileManager } from 'grams-sdk';
 *
 * const manager = new ProfileManager();
 * ```
 */
class ProfileManager {

    private profiles: Map<string, Profile>;

    /**
     * Initializes the profile manager with empty state.
     */
    constructor() {
        this.profiles = new Map();
    }

    /**
     * Create a new Grams profile using IOTA's Stronghold.
     * @param options ProfileOptions to create the profile including the name, password, other configurations.
     */
    createProfile(options: ProfileOptions): void {
    }

    /**
     * 
     * @param name 
     * @returns 
     */
    getProfile(name: string): Profile | undefined {
        this.profiles.forEach((val, key) => {
            if (key === name) {
                return val;
            }
        });
        return undefined;
    }

    removeProfile(name: string): void {
    }
}

export default ProfileManager;
