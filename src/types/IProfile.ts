// Copyright 2023 Grams
// SPDX-License-Identifier: Apache-2.0

import {
    IIdentity,
    IWallet,
    ProfileOptions
} from '../types/';

export interface ProfileMeta {

    /**
     * The name of the profile.
     */
    name: string;
}

/**
 * This interface represents a profile, which holds the user's identity, wallets, and other information.
 * It is intended to be extended by other classes or interfaces.
 */
export interface IProfile {

    /**
     * The profile's metadata.
     */
    meta: ProfileMeta;

    /**
     * Creates a new profile with the given options.
     *
     * @param options - The options to use when creating the profile.
     */
    createProfile(options: ProfileOptions): Promise<void>;

    /**
     * Unlocks the profile with the given password.
     *
     * @param password - The password to use to unlock the profile.
     */
    unlock(password: string): Promise<void>;

    /**
     * Creates a new wallet with the given name and stores it in this profile.
     *
     * @param name - The name to use for the new wallet.
     */
    createWallet(name: string): Promise<IWallet>;

    /**
     * Creates a new identity with the given name and stores it in this profile.
     *
     * @param name - The name to use for the new wallet.
     */
    createIdentity(name: string): Promise<IIdentity>;

    /**
     * Changes the password for this profile.
     *
     * @param oldPassword - The old password of the profile.
     * @param newPassword - The new password to use.
     */
    changePassword(oldPassword: string, newPassword: string): Promise<void>;

    /**
     * Backs up this profile to the given file path and password.
     *
     * @param path - The file path to use for the backup.
     * @param password - The password to use to encrypt the backup.
     */
    backup(path: string, password: string): Promise<void>;

    /**
     * Restores this profile from the given file path and password.
     *
     * @param path - The file path to use for the backup.
     * @param password - The password to use to decrypt the backup.
     */
    restore(path: string, password: string): Promise<void>;
}