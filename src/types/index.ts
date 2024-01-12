export type INavLink = {
  path: string;
  label: string;
}

export type IMenuItem = {
  label: string;
  onClick?: () => void;
}

export type IDropdownItem = INavLink | IMenuItem ;
