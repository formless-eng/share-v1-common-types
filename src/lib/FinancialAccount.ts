import { IFinancialAccount, IVDRSerializable } from "./Interfaces";
import { Dictionary } from "./Types";

export class FinancialAccount
  implements IFinancialAccount, IVDRSerializable
{
  isManaged: boolean = false;
  evmBlockchainAddress: string | undefined = undefined;
  evmBlockchainSignature: string | undefined = undefined;
  evmBlockchainNetworkID: number | undefined = undefined;

  fromVDRFormattedDictionary(entry: Dictionary): FinancialAccount {
    // @ts-ignore
    this.isManaged = entry.is_managed;
    // @ts-ignore
    this.evmBlockchainAddress = entry.evm_blockchain_address;
    // @ts-ignore
    this.evmBlockchainSignature = entry.evm_blockchain_signature;
    // @ts-ignore
    this.evmBlockchainNetworkID = entry.evm_blockchain_network_id;
    return this;
  }

  toVDRFormattedDictionary(): Dictionary {
    return {
      is_managed: this.isManaged,
      evm_blockchain_address: this.evmBlockchainAddress,
      evm_blockchain_signature: this.evmBlockchainSignature,
      evm_blockchain_network_id: this.evmBlockchainNetworkID,
    };
  }
}
