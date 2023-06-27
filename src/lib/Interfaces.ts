/**
 * Represents the identity of a network participant.
 */
export interface Identity {
  uniqueIdentifier: string;
}

/**
 * Represents a public key used for authorization.
 */
export interface PublicKey {
  deviceString: string;
  keyString: string;
  type: string;
  authorizingDomain: string;
}

/**
 * Represents an authorizer for performing actions.
 */
export interface ActionAuthorizer {
  publicKeys: PublicKey[];
}

/**
 * Represents an account which can receive currency, e.g.
 * an externally owned account (EOA) with associated EVM
 * compatible wallet address.
 */
export interface Account {
  address: string;
}
