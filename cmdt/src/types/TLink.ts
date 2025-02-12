export type TLink = {
  name: string;
  path?: string | null;
  submenu?: {
    links: Array<TLink> | null;
    isDynamic?: boolean; // Flag to indicate dynamic submenu
  };
};