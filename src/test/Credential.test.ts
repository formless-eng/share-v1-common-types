import {
  PlatformAuthenticatorCredential,
  GoogleOAuth2Credential,
  BearerTokenCredential,
  OAuth2Credential,
  JWTCredential,
} from "../lib/Credential";

describe("PlatformAuthenticatorCredential", () => {
  let credential: PlatformAuthenticatorCredential;

  beforeEach(() => {
    credential = new PlatformAuthenticatorCredential(
      "test/platformAuthenticatorDataBase64",
      "test/platformAuthenticatorClientDataBase64",
      "test/platformAuthenticatorSignatureBase64"
    );
  });

  it("should initialize with correct values", () => {
    expect(credential.credentialType).toBe(
      "platform_authenticator_credential"
    );
    expect(credential.platformAuthenticatorClientDataBase64).toBe(
      "test/platformAuthenticatorClientDataBase64"
    );
    expect(credential.platformAuthenticatorDataBase64).toBe(
      "test/platformAuthenticatorDataBase64"
    );
    expect(credential.platformAuthenticatorSignatureBase64).toBe(
      "test/platformAuthenticatorSignatureBase64"
    );
  });

  it("should serialize to dictionary with correct values", () => {
    expect(credential.toDictionary()).toEqual({
      credential_type: "platform_authenticator_credential",
      platform_authenticator_data_base64:
        "test/platformAuthenticatorDataBase64",
      platform_authenticator_client_data_base64:
        "test/platformAuthenticatorClientDataBase64",
      platform_authenticator_signature_base64:
        "test/platformAuthenticatorSignatureBase64",
    });
  });

  it("should deserialize from dictionary with correct values", () => {
    credential.fromDictionary({
      credential_type: "platform_authenticator_credential",
      platform_authenticator_data_base64:
        "test/platformAuthenticatorDataBase64",
      platform_authenticator_client_data_base64:
        "test/platformAuthenticatorClientDataBase64",
      platform_authenticator_signature_base64:
        "test/platformAuthenticatorSignatureBase64",
    });
    expect(credential.platformAuthenticatorClientDataBase64).toBe(
      "test/platformAuthenticatorClientDataBase64"
    );
    expect(credential.platformAuthenticatorDataBase64).toBe(
      "test/platformAuthenticatorDataBase64"
    );
    expect(credential.platformAuthenticatorSignatureBase64).toBe(
      "test/platformAuthenticatorSignatureBase64"
    );
  });
});

describe("GoogleOAuth2Credential", () => {
  let credential: GoogleOAuth2Credential;

  beforeEach(() => {
    credential = new GoogleOAuth2Credential(
      "test/googleOAuth2CredentialClientID",
      "test/googleOAuth2CredentialJWT"
    );
  });

  it("should initialize with correct values", () => {
    expect(credential.credentialType).toBe(
      "google_oauth2_credential"
    );
    expect(credential.googleOAuth2CredentialClientID).toBe(
      "test/googleOAuth2CredentialClientID"
    );
    expect(credential.googleOAuth2CredentialJWT).toBe(
      "test/googleOAuth2CredentialJWT"
    );
  });

  it("should serialize to dictionary with correct values", () => {
    expect(credential.toDictionary()).toEqual({
      credential_type: "google_oauth2_credential",
      google_oauth2_credential_client_id:
        "test/googleOAuth2CredentialClientID",
      google_oauth2_credential_jwt: "test/googleOAuth2CredentialJWT",
    });
  });

  it("should deserialize from dictionary with correct values", () => {
    credential.fromDictionary({
      credential_type: "google_oauth2_credential",
      google_oauth2_credential_client_id:
        "test/googleOAuth2CredentialClientID",
      google_oauth2_credential_jwt: "test/googleOAuth2CredentialJWT",
    });
    expect(credential.credentialType).toBe(
      "google_oauth2_credential"
    );
    expect(credential.googleOAuth2CredentialClientID).toBe(
      "test/googleOAuth2CredentialClientID"
    );
    expect(credential.googleOAuth2CredentialJWT).toBe(
      "test/googleOAuth2CredentialJWT"
    );
  });
});

describe("OAuth2Credential", () => {
  let credential: OAuth2Credential;

  beforeEach(() => {
    credential = new OAuth2Credential(
      "test/oauth2CredentialClientID",
      "test/oauth2CredentialJWT"
    );
  });

  it("should initialize with correct values", () => {
    expect(credential.credentialType).toBe("oauth2_credential");
    expect(credential.oauth2CredentialClientID).toBe(
      "test/oauth2CredentialClientID"
    );
    expect(credential.oauth2CredentialJWT).toBe(
      "test/oauth2CredentialJWT"
    );
  });

  it("should serialize to dictionary with correct values", () => {
    expect(credential.toDictionary()).toEqual({
      credential_type: "oauth2_credential",
      oauth2_credential_client_id: "test/oauth2CredentialClientID",
      oauth2_credential_jwt: "test/oauth2CredentialJWT",
    });
  });

  it("should deserialize from dictionary with correct values", () => {
    credential.fromDictionary({
      credential_type: "oauth2_credential",
      oauth2_credential_client_id: "test/oauth2CredentialClientID",
      oauth2_credential_jwt: "test/oauth2CredentialJWT",
    });
    expect(credential.credentialType).toBe("oauth2_credential");
    expect(credential.oauth2CredentialClientID).toBe(
      "test/oauth2CredentialClientID"
    );
    expect(credential.oauth2CredentialJWT).toBe(
      "test/oauth2CredentialJWT"
    );
  });
});

describe("BearerTokenCredential", () => {
  let credential: BearerTokenCredential;

  beforeEach(() => {
    credential = new BearerTokenCredential("test/credentialToken");
  });

  it("should initialize with correct values", () => {
    expect(credential.credentialType).toBe("bearer_token");
    expect(credential.credentialToken).toBe("test/credentialToken");
  });

  it("should serialize to dictionary with correct values", () => {
    expect(credential.toDictionary()).toEqual({
      credential_type: "bearer_token",
      credential_token: "test/credentialToken",
    });
  });

  it("should deserialize from dictionary with correct values", () => {
    credential.fromDictionary({
      credential_type: "bearer_token",
      credential_token: "test/credentialToken",
    });
    expect(credential.credentialType).toBe("bearer_token");
    expect(credential.credentialToken).toBe("test/credentialToken");
  });
});

describe("JWTCredential", () => {
  const testJwt = "test/jwt";

  test("constructor sets properties correctly", () => {
    const credential = new JWTCredential(testJwt);

    expect(credential.credentialType).toBe("jwt_credential");
    expect(credential.jwt).toBe(testJwt);
  });

  test("toDictionary returns correct dictionary", () => {
    const credential = new JWTCredential(testJwt);
    const dict = credential.toDictionary();

    expect(dict).toEqual({
      credential_type: "jwt_credential",
      jwt: testJwt,
    });
  });

  test("fromDictionary sets properties correctly", () => {
    const credential = new JWTCredential("");
    credential.fromDictionary({
      credential_type: "jwt_credential",
      jwt: testJwt,
    });

    expect(credential.credentialType).toBe("jwt_credential");
    expect(credential.jwt).toBe(testJwt);
  });

  test("loadFromDisk throws error", () => {
    const credential = new JWTCredential(testJwt);

    expect(() => {
      credential.loadFromDisk();
    }).toThrow("Method not implemented.");
  });

  test("saveToDisk throws error", () => {
    const credential = new JWTCredential(testJwt);

    expect(() => {
      credential.saveToDisk();
    }).toThrow("Method not implemented.");
  });
});
