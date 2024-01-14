export interface SubLabelNavItem {
  subLabelNavItem: string;
}
export interface SubLabel {
  id: number;
  title: string;
}

export interface FeaturedItem {
  categoryName: string;
  imgPath: string;
}
export interface SubLabels {
  id: number;
  label: string;
  subLabels: SubLabel[];
}

export interface NavItem {
  label: string;
  children?: SubLabels[];
  href?: string;
  featuredItems?: FeaturedItem[];
}
