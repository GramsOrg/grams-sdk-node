
export interface IdentityMeta {
    name: string;
}

export interface IdentityOptions {
    password: string;
}

export interface IIdentity {

    meta: IdentityMeta;

    createDid(options: IdentityOptions): Promise<string>;
}

// Define interface for Verifiable Credential
interface IVerifiableCredential {
    type: string[];
    issuer: string;
    issuanceDate: string;
    credentialSubject: { [key: string]: any };
    proof?: object;
  }
  
// Define interface for Presentations
interface IPresentation {
    id?: string;
    type: string;
    verifiableCredential: IVerifiableCredential | IVerifiableCredential[];
    holder?: string;
}
