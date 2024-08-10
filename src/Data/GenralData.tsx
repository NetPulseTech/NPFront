interface themeTooltipData {
  link?: string;
  iconClass?: string;
  icon: "File" | "Star" | "Users" | "Headphones" | "Cloud";

  name: string;
}
export const themeTooltipData: themeTooltipData[] = [
  { link: "/", iconClass: "bar-icon", icon: "File", name: "newsfeed" },
  { link: "/favourite/home", icon: "Star", name: "Favourite" },
  { icon: "Users", name: "users" },
  { link: "/music", icon: "Headphones", name: "Music" },
  { link: "/weather", icon: "Cloud", name: "Cloud" },
];
