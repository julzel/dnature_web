export type INavLink = {
  path: string;
  label: string;
}

export type IMenuItem = {
  label: string;
  onClick?: () => void;
}

export type IMenuChild = {
  customElement?: React.ReactNode;
}

export type IDropdownItem = INavLink | IMenuItem | IMenuChild;
