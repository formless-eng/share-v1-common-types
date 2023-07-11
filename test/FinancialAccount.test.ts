import { FinancialAccount } from "../src";

describe("FinancialAccount", () => {
  let financialAccount: FinancialAccount;

  beforeEach(() => {
    financialAccount = new FinancialAccount();
  });

  it("should initialize with default values", () => {
    expect(financialAccount.isManaged).toBe(false);
    expect(financialAccount.evmBlockchainAddress).toBeUndefined();
    expect(financialAccount.evmBlockchainSignature).toBeUndefined();
    expect(financialAccount.evmBlockchainNetworkID).toBeUndefined();
  });

  it("should correctly populate properties from a VDR formatted dictionary", () => {
    const entry = {
      is_managed: true,
      evm_blockchain_address: "0x123456789",
      evm_blockchain_signature: "signature",
      evm_blockchain_network_id: 1,
    };

    financialAccount.fromVDRFormattedDictionary(entry);

    expect(financialAccount.isManaged).toBe(true);
    expect(financialAccount.evmBlockchainAddress).toBe("0x123456789");
    expect(financialAccount.evmBlockchainSignature).toBe("signature");
    expect(financialAccount.evmBlockchainNetworkID).toBe(1);
  });

  it("should correctly convert to a VDR formatted dictionary", () => {
    financialAccount.isManaged = true;
    financialAccount.evmBlockchainAddress = "0x123456789";
    financialAccount.evmBlockchainSignature = "signature";
    financialAccount.evmBlockchainNetworkID = 1;

    const dictionary = financialAccount.toVDRFormattedDictionary();

    expect(dictionary).toEqual({
      is_managed: true,
      evm_blockchain_address: "0x123456789",
      evm_blockchain_signature: "signature",
      evm_blockchain_network_id: 1,
    });
  });
});
