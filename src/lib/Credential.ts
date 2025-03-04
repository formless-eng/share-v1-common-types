import {
  IBearerTokenCredential,
  IGoogleOAuth2Credential,
  IJWTCredential,
  IOAuth2Credential,
  IPlatformAuthenticatorCredential,
  ISerializable,
} from "./Interfaces";
import { Dictionary } from "./Types";

export class PlatformAuthenticatorCredential
  implements IPlatformAuthenticatorCredential, ISerializable
{
  credentialType: string;
  platformAuthenticatorDataBase64: string;
  platformAuthenticatorClientDataBase64: string;
  platformAuthenticatorSignatureBase64: string;

  constructor(
    platformAuthenticatorDataBase64: string,
    platformAuthenticatorClientDataBase64: string,
    platformAuthenticatorSignatureBase64: string
  ) {
    this.credentialType = "platform_authenticator_credential";
    this.platformAuthenticatorDataBase64 =
      platformAuthenticatorDataBase64;
    this.platformAuthenticatorClientDataBase64 =
      platformAuthenticatorClientDataBase64;
    this.platformAuthenticatorSignatureBase64 =
      platformAuthenticatorSignatureBase64;
  }

  toDictionary(): Dictionary {
    return {
      credential_type: this.credentialType,
      platform_authenticator_data_base64:
        this.platformAuthenticatorDataBase64,
      platform_authenticator_client_data_base64:
        this.platformAuthenticatorClientDataBase64,
      platform_authenticator_signature_base64:
        this.platformAuthenticatorSignatureBase64,
    };
  }

  fromDictionary(dict: Dictionary): void {
    this.credentialType = dict["credential_type"] as string;
    this.platformAuthenticatorDataBase64 = dict[
      "platform_authenticator_data_base64"
    ] as string;
    this.platformAuthenticatorClientDataBase64 = dict[
      "platform_authenticator_client_data_base64"
    ] as string;
    this.platformAuthenticatorSignatureBase64 = dict[
      "platform_authenticator_signature_base64"
    ] as string;
  }

  loadFromDisk(): void {
    throw new Error("Method not implemented.");
  }

  saveToDisk(): void {
    throw new Error("Method not implemented.");
  }
}

export class GoogleOAuth2Credential
  implements IGoogleOAuth2Credential, ISerializable
{
  credentialType: string;
  googleOAuth2CredentialClientID: string;
  googleOAuth2CredentialJWT: string;

  constructor(
    googleOAuth2CredentialClientID: string,
    googleOAuth2CredentialJWT: string
  ) {
    this.credentialType = "google_oauth2_credential";
    this.googleOAuth2CredentialClientID =
      googleOAuth2CredentialClientID;
    this.googleOAuth2CredentialJWT = googleOAuth2CredentialJWT;
  }

  toDictionary(): Dictionary {
    return {
      credential_type: this.credentialType,
      google_oauth2_credential_client_id:
        this.googleOAuth2CredentialClientID,
      google_oauth2_credential_jwt: this.googleOAuth2CredentialJWT,
    };
  }

  fromDictionary(dict: Dictionary): void {
    this.credentialType = dict["credential_type"] as string;
    this.googleOAuth2CredentialClientID = dict[
      "google_oauth2_credential_client_id"
    ] as string;
    this.googleOAuth2CredentialJWT = dict[
      "google_oauth2_credential_jwt"
    ] as string;
  }

  loadFromDisk(): void {
    throw new Error("Method not implemented.");
  }

  saveToDisk(): void {
    throw new Error("Method not implemented.");
  }
}

export class OAuth2Credential
  implements IOAuth2Credential, ISerializable
{
  credentialType: string;
  oauth2CredentialClientID: string;
  oauth2CredentialJWT: string;

  constructor(
    oauth2CredentialClientID: string,
    oauth2CredentialJWT: string
  ) {
    this.credentialType = "oauth2_credential";
    this.oauth2CredentialClientID = oauth2CredentialClientID;
    this.oauth2CredentialJWT = oauth2CredentialJWT;
  }

  toDictionary(): Dictionary {
    return {
      credential_type: this.credentialType,
      oauth2_credential_client_id: this.oauth2CredentialClientID,
      oauth2_credential_jwt: this.oauth2CredentialJWT,
    };
  }

  fromDictionary(dict: Dictionary): void {
    this.credentialType = dict["credential_type"] as string;
    this.oauth2CredentialClientID = dict[
      "oauth2_credential_client_id"
    ] as string;
    this.oauth2CredentialJWT = dict[
      "oauth2_credential_jwt"
    ] as string;
  }

  loadFromDisk(): void {
    throw new Error("Method not implemented.");
  }

  saveToDisk(): void {
    throw new Error("Method not implemented.");
  }
}

export class BearerTokenCredential
  implements IBearerTokenCredential, ISerializable
{
  credentialType: string;
  credentialToken: string;

  constructor(credentialToken: string) {
    this.credentialType = "bearer_token";
    this.credentialToken = credentialToken;
  }

  toDictionary() {
    return {
      credential_type: this.credentialType,
      credential_token: this.credentialToken,
    };
  }

  fromDictionary(dict: Dictionary): void {
    this.credentialType = dict["credential_type"] as string;
    this.credentialToken = dict["credential_token"] as string;
  }

  loadFromDisk(): void {
    throw new Error("Method not implemented.");
  }

  saveToDisk(): void {
    throw new Error("Method not implemented.");
  }
}

export class JWTCredential implements IJWTCredential, ISerializable {
  credentialType: string;
  jwt: string;

  constructor(jwt: string) {
    this.credentialType = "jwt_credential";
    this.jwt = jwt;
  }

  toDictionary(): Dictionary {
    return {
      credential_type: this.credentialType,
      jwt: this.jwt,
    };
  }

  fromDictionary(dict: Dictionary): void {
    this.credentialType = dict["credential_type"] as string;
    this.jwt = dict["jwt"] as string;
  }

  loadFromDisk(): void {
    throw new Error("Method not implemented.");
  }

  saveToDisk(): void {
    throw new Error("Method not implemented.");
  }
}
