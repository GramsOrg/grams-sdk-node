// Copyright 2023 Grams
// SPDX-License-Identifier: Apache-2.0

import ProfileService from '../lib/grams/ProfileService';

import { IIdentity, IProfile, IWallet, ProfileOptions, ProfileMeta } from '../types/';

/**
 * @alpha
 *
 * A Grams profile, which holds the user's identity, wallets, and other information.
 *
 * Use it by importing it directly from grams-sdk
 *
 * @example
 * import { Profile } from 'grams-sdk';
 *
 * // Create a new profile with a given name
 * const profileMeta = { name: "myName" };
 * const profile = new Profile(profileMeta);
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
   *
   * @example
   * const profile = new Profile({ name: "myName" });
   * profile
   * .createProfile({ password: "myPassword" })
   * then(() => {
   *  // Do awesome stuff!
   * })
   * .catch(err => {
   *  console.error('Error creating profile:', err)
   *  // Do boring stuff :/
   * });
   */
  createProfile(options: ProfileOptions): Promise<string> {
    return this.service.createProfile(options);
  }

  /**
   * Unlocks the profile with the given password.
   *
   * @param password - The password to use to unlock the profile.
   *
   * @example
   * profile
   * .unlock("myPassword")
   * .then(() => {
   *  // Do awesome stuff!
   * })
   * .catch(err => {
   *  console.error('Error unlocking profile:', err)
   *  // Do boring stuff :/
   * });
   */
  unlock(options: ProfileOptions): Promise<void> {
    return this.service.unlock(options);
  }

  /**
   * Creates a new wallet with the given name and stores it in this profile.
   *
   * @param name - The name to use for the new wallet.
   *
   * @example
   * import { Wallet } from "grams-sdk";
   *
   * profile
   * .createWallet("myWallet")
   * .then(wallet => {
   *  console.log('Created new wallet:', wallet.meta.name);
   *  // Created new wallet: myWallet
   *  console.log('Wallet balance:', wallet.getBalance());
   *  // Wallet balance: 0
   * })
   * .catch(err => {
   *  console.error('Error creating wallet:', err)
   *  // Do boring stuff :/
   * });
   */
  createWallet(name: string): Promise<IWallet> {
    return this.service.createWallet(name);
  }

  /**
   * Creates a new identity with the given name and stores it in this profile.
   *
   * @param name - The name to use for the new wallet.
   *
   * @example
   * profile
   * .createIdentity("myIdentity")
   * .then(identity => {
   *  console.log("Identity created:", identity.meta.name);
   *  // Identity created: myIdentity
   * })
   * .catch(err => {
   *  console.error('Error creating identity:', err)
   *  // Do boring stuff :/
   * });
   */
  createIdentity(name: string): Promise<IIdentity> {
    return this.service.createIdentity(name);
  }

  /**
   * Changes the password for this profile.
   *
   * @param oldPassword - The old password of the profile.
   * @param newPassword - The new password to use.
   *
   * @example
   * profile
   * .changePassword("oldPassword", "newPassword")
   * .then(() => {
   *  // Do awesome stuff!
   * })
   * .catch(err => {
   *  console.error('Error changing password:', err)
   *  // Do boring stuff :/
   * });
   */
  changePassword(oldPassword: string, newPassword: string): Promise<void> {
    return this.service.changePassword(oldPassword, newPassword);
  }

  /**
   * Backs up this profile to the given file path after verifying the password.
   *
   * @param path - The file path to use for the backup.
   * @param password - The profile's password that will also be used to encrypt the backup.
   *
   * @example
   * profile
   * .backup("/path/to/backup", "password")
   * .then(() => {
   *  // Do awesome stuff!
   * })
   * .catch(err => {
   *  console.error('Error backing up profile:', err)
   *  // Do boring stuff :/
   * });
   */
  backup(path: string, password: string): Promise<void> {
    return this.service.backup(path, password);
  }

  /**
   * Restores this profile from the given file path and password.
   *
   * @param path - The file path to use for the backup.
   * @param password - The password to use to decrypt the backup.
   *
   * @example
   * profile
   * .restore("/path/to/backup", "password")
   * .then(() => {
   *  // Do awesome stuff!
   * })
   * .catch(err => {
   *  console.error('Error restoring profile:', err)
   *  // Do boring stuff :/
   * });
   */
  restore(path: string, password: string): Promise<void> {
    return this.service.restore(path, password);
  }
}

export default Profile;
