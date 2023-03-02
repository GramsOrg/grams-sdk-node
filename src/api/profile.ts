// Copyright 2023 Grams
// SPDX-License-Identifier: Apache-2.0

import ProfileService from '../lib/grams/ProfileService';

import {
    IIdentity,
    IProfile,
    IWallet,
    ProfileOptions,
    ProfileMeta
} from '../types/';

/**
 * A Grams profile, which holds the user's identity, wallets, and other information.
 */
class Profile implements IProfile {

    private service: IProfile;

    /**
     * The profile's metadata.
     */
    meta: ProfileMeta;

    /**
     * Creates an empty profile with a given name.
     *
     * @param name - The profile name.
     * @param service - This provides developers the possibility of extending the Profile class with their own implementation. Defaults to Grams
     */
    constructor(meta: ProfileMeta, service?: IProfile) {
        this.meta = meta;
        this.service = service || new ProfileService(meta);
    }

    /**
     * Creates a new profile with the given options.
     *
     * @param options - The options to use when creating the profile.
     */
    createProfile(options: ProfileOptions): Promise<void> {
        return this.service.createProfile(options);
    }

    /**
     * Unlocks the profile with the given password.
     *
     * @param password - The password to use to unlock the profile.
     */
    unlock(password: string): Promise<void> {
        return this.service.unlock(password);
    }

    /**
     * Creates a new wallet with the given name and stores it in this profile.
     *
     * @param name - The name to use for the new wallet.
     */
    createWallet(name: string): Promise<IWallet> {
        return this.service.createWallet(name);
    }

    /**
     * Creates a new identity with the given name and stores it in this profile.
     *
     * @param name - The name to use for the new wallet.
     */
    createIdentity(name: string): Promise<IIdentity> {
        return this.service.createIdentity(name);
    }

    /**
     * Changes the password for this profile.
     *
     * @param oldPassword - The old password of the profile.
     * @param newPassword - The new password to use.
     */
    changePassword(oldPassword: string, newPassword: string): Promise<void> {
        return this.service.changePassword(oldPassword, newPassword);
    }

    /**
     * Backs up this profile to the given file path and password.
     *
     * @param path - The file path to use for the backup.
     * @param password - The password to use to encrypt the backup.
     */
    backup(path: string, password: string): Promise<void> {
        return this.service.backup(path, password);
    }

    /**
     * Restores this profile from the given file path and password.
     *
     * @param path - The file path to use for the backup.
     * @param password - The password to use to decrypt the backup.
     */
    restore(path: string, password: string): Promise<void> {
        return this.service.restore(path, password);
    }
}

export default Profile;
