import { Colors } from "@/styles/colors";

export const formatNumber = (number: number): string => {
  const _ = new Intl.NumberFormat("ru", {}).format(number);
  return `${_}p.`;
};

export const getActiveColorForText = (isActive?: boolean) =>
  isActive ? Colors.DARK_BLUE : Colors.BLACK;
