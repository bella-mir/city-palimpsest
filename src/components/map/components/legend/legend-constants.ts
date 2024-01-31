import { DefaultOptionType } from "antd/es/select";

export const LEGEND_COLORS: { [key: string]: string } = {
  "Market Site (before 1730s)": "#d99e32",
  "Royal Residence (~1740s-1840s)": "#f27649",
  "A New Munich (~1850s-1880s)": "#668c54",
  "Metropolis (~1890s-1900s)": "#bfba73",
  "World Wars (~1910s-1940s)": "#312640",
  "Post War (~1950s-1990s)": "#8C7D4F",
  "Our Days (~2000+)": "#568FA6",
};

export const CATEGORIES: DefaultOptionType[] = [
  { value: "all", label: "All" },
  { value: 1, label: "Market Site" },
  { value: 2, label: "Royal Residence" },
  { value: 3, label: "A New Munich" },
  { value: 4, label: "Metropolis" },
  { value: 5, label: "World Wars" },
  { value: 6, label: "Post War" },
  { value: 7, label: "Our Days" },
];
