import { Dictionary } from "./Types";

/**
 * The network layer identity of a SHARE network
 * participant.
 */
export interface IIdentity {
  uniqueID?: string | undefined;
  platformAuthenticatorDataBase64?: string | undefined;
  platformAuthenticatorClientDataBase64?: string | undefined;
  platformAuthenticatorSignatureBase64?: string | undefined;
}

/**
 * An account which can receive currency, eg.
 * an externally owned account (EOA) with associated EVM
 * compatible wallet address.
 */
export interface IFinancialAccount {
  isManaged: boolean;
  evmBlockchainAddress?: string | undefined;
  evmBlockchainSignature?: string | undefined;
  evmBlockchainNetworkID?: number | undefined;
}

/**
 * The application layer identity of a SHARE
 * platform user.
 */
export interface IUser {
  networkIdentity: IIdentity;
  financialAccount?: IFinancialAccount;
}

/**
 * A serializable object which can be persisted to storage.
 */
export interface ISerializable {
  loadFromDisk(): void;
  saveToDisk(): void;
  toDictionary(): Dictionary;
  fromDictionary(dict: Dictionary): void;
}

/**
 * A serializable object which can be persisted to a Verifiable
 * Data Registry (VDR) using the appropriate key / value format.
 */
export interface IVDRSerializable {
  toVDRFormattedDictionary(): Dictionary;
  fromVDRFormattedDictionary(entry: Dictionary): void;
}

export interface IAsset {
  asset_title: string;
  blockchain: number;
  contract_address: string;
  creator_address: string;
  creator_name: string;
  play_count: number;
  deployment_metadata: {
    grant_ttl_seconds: number;
    price_per_access_usd: number;
    metadata: {
      absolute_expiration: number;
      preview: {
        image: string;
      };
    };
  };
}
