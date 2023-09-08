export type Dictionary = {
  [key: string]: string | boolean | number | undefined | Dictionary;
};

export enum NotificationEvent {
  Transaction,
  SplitTransaction,
}
