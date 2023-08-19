import {
  PlatformAuthenticatorCredential,
  GoogleOAuth2Credential,
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
