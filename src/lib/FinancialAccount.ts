import { IFinancialAccount, IVDRSerializable } from "./Interfaces";
import { Dictionary } from "./Types";

export class FinancialAccount
  implements IFinancialAccount, IVDRSerializable
{
  isManaged: boolean = false;
  evmBlockchainAddress: string | undefined = undefined;
  evmBlockchainSignature: string | undefined = undefined;
  evmBlockchainNetworkID: number | undefined = undefined;
  metadata:
    | {
        walletType: string;
        waasImplementation: string;
        smartContractImplementation: string;
        primary: boolean;
        signers: string[];
        dateAdded: string;
      }
    | undefined = undefined;

  fromVDRFormattedDictionary(entry: Dictionary): FinancialAccount {
    this.isManaged = entry.is_managed as boolean;
    this.evmBlockchainAddress =
      entry.evm_blockchain_address as string;
    this.evmBlockchainSignature =
      entry.evm_blockchain_signature as string;
    this.evmBlockchainNetworkID =
      entry.evm_blockchain_network_id as number;

    if (
      entry.metadata &&
      typeof entry.metadata === "object" &&
      !Array.isArray(entry.metadata)
    ) {
      const metadataObj = entry.metadata as Dictionary;
      this.metadata = {
        walletType: metadataObj.wallet_type as string,
        waasImplementation: metadataObj.waas_implementation as string,
        smartContractImplementation:
          metadataObj.smart_contract_implementation as string,
        primary: metadataObj.primary as boolean,
        // @ts-ignore
        signers: metadataObj.signers as string[],
        dateAdded: metadataObj.date_added as string,
      };
    }

    return this;
  }

  toVDRFormattedDictionary(): Dictionary {
    const result: Dictionary = {
      is_managed: this.isManaged,
      evm_blockchain_address: this.evmBlockchainAddress,
      evm_blockchain_signature: this.evmBlockchainSignature,
      evm_blockchain_network_id: this.evmBlockchainNetworkID,
    };

    if (this.metadata) {
      result.metadata = {
        wallet_type: this.metadata.walletType,
        waas_implementation: this.metadata.waasImplementation,
        smart_contract_implementation:
          this.metadata.smartContractImplementation,
        primary: this.metadata.primary,
        // @ts-ignore
        signers: this.metadata.signers,
        date_added: this.metadata.dateAdded,
      };
    }

    return result;
  }
}
