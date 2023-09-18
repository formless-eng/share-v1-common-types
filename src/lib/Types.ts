export type Dictionary = {
  [key: string]: string | boolean | number | undefined | Dictionary;
};

export enum NotificationEvent {
  // eslint-disable-next-line no-unused-vars
  PublicRelease,
  // eslint-disable-next-line no-unused-vars
  Transaction,
  // eslint-disable-next-line no-unused-vars
  SplitTransaction,
}
