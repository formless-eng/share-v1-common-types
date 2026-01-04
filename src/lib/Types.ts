export type Dictionary = {
  [key: string]: string | boolean | number | undefined | Dictionary;
};

export enum NotificationEvent {
  PublicRelease = "PublicRelease",
  Transaction = "Transaction",
  SplitTransaction = "SplitTransaction",
}

export enum LicenseType {
  ApplicationLicenseV1 = "APPLICATION_LICENSE_V1",
  UnlimitedLeaseV1 = "UNLIMITED_LEASE_V1",
}

export type AssetType =
  | "property" // A contract representing an off-app asset
  | "audio" // A contract representing an in-app audio asset
  | "video" // A contract representing an in-app video asset
  | "collection" // A contract representing an in-app playlist asset
  | "zipfile" // A contract representing an in-app zip file asset
  | "binary"; // A non-contract based raw binary file upload

export type FileType =
  | "audio/x-wav"
  | "audio/mpeg"
  | "application/mp4"
  | "video/mp4"
  | "video/quicktime"
  | "image/png"
  | "image/jpg"
  | "image/jpeg"
  | "application/zip";

export type ContractType =
  | "property smart contract"
  | "revenue share smart contract"
  | "digital asset with revenue share"
  | "collection smart contract"
  | "fractionalized royalties contract";

export type DDNContractContentMetadata = {
  name: string;
  description: string;
  image: string;
  attributes: Record<string, unknown>;
  title: string;
  artist: string;
  type: AssetType;
  enable_fiat_bridged_payments: boolean;
  animation_url: string;
  audio: string | null;
  video: string | null;
  video_hls: string | null;
  file: string | null;
};

export type DDNContractSplitsMetadata = {
  enable_public_splits: boolean;
  enable_standalone_route: boolean;
  split_contract_address: string;
  split_contract_type: string;
  splits_limit_per_unique_id: number;
  split_contract_version?: string;
  splits_recipient_requirements?: {
    content_purchase?: boolean;
  };
};

export type DDNContractNFTVerificationMetadata = {
  supported: boolean;
  nft_contract_addresses: string[];
  nft_contract_network_id: number;
  contract_type: string;
  token_id: string;
};

export type DDNContractMetadata = {
  json_rpc: string;
  network_id: number;
  grant_ttl_seconds?: number;
  absolute_expiration?: number;
  grant: DDNContractContentMetadata;
  preview: DDNContractContentMetadata;
  splits?: DDNContractSplitsMetadata;
  nft_verification?: DDNContractNFTVerificationMetadata;
  price_per_access_usd?: number;
  supports_licensing?: boolean;
  license_type?: LicenseType;
  price_per_license_usd?: number;
};
