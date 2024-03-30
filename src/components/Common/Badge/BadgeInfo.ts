export enum BadgeColorType {
  BLUE = "blue",
  RED = "red",
  GREEN = "green",
  GRAY = "gray",
}

export interface BadgeInfo {
  badgeColorType: BadgeColorType;
  text: string;
}
