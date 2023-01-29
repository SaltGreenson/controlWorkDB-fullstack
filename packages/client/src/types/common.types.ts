import { ReactNode } from "react";

export type LayoutContentType = {
  component: ReactNode;
  hrefTitle: string;
  href: string;
  title: string;
};

export type DropDownLinksType = {
  href: string;
  title: string;
};

export type LayoutConfigTypes = {
  layout: Array<LayoutContentType>;
  dropDown: Array<DropDownLinksType>;
};

export type EditModalWindowConfigType = {
  form: ReactNode;
};

export type LinkType = {
  href: string;
  title: string;
};
