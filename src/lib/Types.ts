export type Dictionary = {
  [key: string]: string | boolean | number | undefined | Dictionary;
};
