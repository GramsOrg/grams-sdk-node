// Copyright 2023 Grams
// SPDX-License-Identifier: Apache-2.0

import { IIdentity, IProfile, IWallet, ProfileMeta, ProfileOptions } from "../../types";

class ProfileService implements IProfile {
    meta: ProfileMeta;

    constructor(meta: ProfileMeta) {
        this.meta = meta;
    }

    createProfile(options: ProfileOptions): Promise<void> {
        throw new Error("Method not implemented.");
    }
    unlock(password: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    createWallet(name: string): Promise<IWallet> {
        throw new Error("Method not implemented.");
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
}

export default ProfileService;