import { FinancialAccount } from "../lib/FinancialAccount";

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
    expect(financialAccount.metadata).toBeUndefined();
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

  it("should correctly populate metadata from a VDR formatted dictionary", () => {
    const entry = {
      is_managed: true,
      evm_blockchain_address: "0x123456789",
      metadata: {
        wallet_type: "custodial",
        waas_implementation: "fireblocks",
        smart_contract_implementation: "erc20",
        primary: true,
        signers: ["0xabc123", "0xdef456"],
        date_added: "2023-05-15T10:30:00Z",
      },
    };

    // @ts-ignore
    financialAccount.fromVDRFormattedDictionary(entry);

    expect(financialAccount.isManaged).toBe(true);
    expect(financialAccount.evmBlockchainAddress).toBe("0x123456789");
    expect(financialAccount.metadata).toBeDefined();
    expect(financialAccount.metadata?.walletType).toBe("custodial");
    expect(financialAccount.metadata?.waasImplementation).toBe(
      "fireblocks"
    );
    expect(
      financialAccount.metadata?.smartContractImplementation
    ).toBe("erc20");
    expect(financialAccount.metadata?.primary).toBe(true);
    expect(financialAccount.metadata?.signers).toEqual([
      "0xabc123",
      "0xdef456",
    ]);
    expect(financialAccount.metadata?.dateAdded).toBe(
      "2023-05-15T10:30:00Z"
    );
  });

  it("should correctly convert metadata to a VDR formatted dictionary", () => {
    financialAccount.isManaged = true;
    financialAccount.evmBlockchainAddress = "0x123456789";
    financialAccount.metadata = {
      walletType: "custodial",
      waasImplementation: "fireblocks",
      smartContractImplementation: "erc20",
      primary: true,
      signers: ["0xabc123", "0xdef456"],
      dateAdded: "2023-05-15T10:30:00Z",
    };

    const dictionary = financialAccount.toVDRFormattedDictionary();

    expect(dictionary).toEqual({
      is_managed: true,
      evm_blockchain_address: "0x123456789",
      evm_blockchain_signature: undefined,
      evm_blockchain_network_id: undefined,
      metadata: {
        wallet_type: "custodial",
        waas_implementation: "fireblocks",
        smart_contract_implementation: "erc20",
        primary: true,
        signers: ["0xabc123", "0xdef456"],
        date_added: "2023-05-15T10:30:00Z",
      },
    });
  });

  it("should handle missing metadata in VDR formatted dictionary", () => {
    const entry = {
      is_managed: true,
      evm_blockchain_address: "0x123456789",
      // No metadata
    };

    financialAccount.fromVDRFormattedDictionary(entry);

    expect(financialAccount.isManaged).toBe(true);
    expect(financialAccount.evmBlockchainAddress).toBe("0x123456789");
    expect(financialAccount.metadata).toBeUndefined();
  });

  it("should handle partial metadata in VDR formatted dictionary", () => {
    const entry = {
      is_managed: true,
      metadata: {
        wallet_type: "custodial",
        primary: true,
        // Missing other metadata fields
      },
    };

    financialAccount.fromVDRFormattedDictionary(entry);

    expect(financialAccount.isManaged).toBe(true);
    expect(financialAccount.metadata).toBeDefined();
    expect(financialAccount.metadata?.walletType).toBe("custodial");
    expect(financialAccount.metadata?.primary).toBe(true);
    expect(
      financialAccount.metadata?.waasImplementation
    ).toBeUndefined();
    expect(
      financialAccount.metadata?.smartContractImplementation
    ).toBeUndefined();
    expect(financialAccount.metadata?.signers).toBeUndefined();
    expect(financialAccount.metadata?.dateAdded).toBeUndefined();
  });

  it("should not include metadata in VDR formatted dictionary when undefined", () => {
    financialAccount.isManaged = true;
    financialAccount.evmBlockchainAddress = "0x123456789";
    // No metadata set

    const dictionary = financialAccount.toVDRFormattedDictionary();

    expect(dictionary).toEqual({
      is_managed: true,
      evm_blockchain_address: "0x123456789",
      evm_blockchain_signature: undefined,
      evm_blockchain_network_id: undefined,
    });
    expect(dictionary).not.toHaveProperty("metadata");
  });
});
