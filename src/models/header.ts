export interface SubLabel {
  subLabelName: string;
  children: any[];
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

export interface SubLabel {
  subLabelName: string;
  children: any[];
}

export interface FeaturedItem {
  categoryName: string;
  imgPath: string;
}
export interface SubLabels {
  label: string;
  subLabels: SubLabel[];
}
