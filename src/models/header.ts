export interface SubLabel {
  subLabelName: string;
}

export interface FeaturedItem {
  categoryName: string;
  imgPath: string;
}
export interface SubLabels {
  label: string;
  subLabels: SubLabel[];
}

export interface NavItem {
  label: string;
  children?: SubLabels[];
  featuredItems?: FeaturedItem[];
}
