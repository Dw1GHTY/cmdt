export type TLink = {
  name: string;
  path?: string | null;
  submenu?: Array<TLink> | null;
};
