import { DefaultOptionType } from "antd/es/select";

export const LEGEND_COLORS: { [key: string]: string } = {
  "Market Site": "#d99e32",
  "Royal Residence": "#f27649",
  "A New Munich": "#668c54",
  Metropolis: "#bfba73",
  "World Wars": "#312640",
  "Post War": "#8C7D4F",
  "Our Days": "#568FA6",
};

export const CATEGORIES: DefaultOptionType[] = [
  { value: "all", label: "All" },
  { value: 1, label: "Market Site" },
  { value: 2, label: "Royal Residence" },
  { value: 3, label: "A New Munich" },
  { value: 4, label: "Metropolis" },
  { value: 5, label: "World Wars" },
  { value: 6, label: "Post War" },
  { value: 6, label: "Our Days" },
];
