import { IdentityMeta, IdentityOptions, IIdentity } from '../types';

class Identity implements IIdentity {
  meta!: IdentityMeta;
  createDid(options: IdentityOptions): Promise<string> {
    throw new Error('Method not implemented.');
  }
}

export default Identity;
