import { CoinType } from '@iota/wallet';

export interface AdvancedProfileOptions {
  nodeUrl?: string;
  coinType?: CoinType;
  localPow?: boolean;
}

export interface ProfileOptions {
  password: string;
  mnemonic?: string;
  advanced?: AdvancedProfileOptions;
}
