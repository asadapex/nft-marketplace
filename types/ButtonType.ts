import { ReactNode } from "react";

export interface ButtonType {
  icon?: ReactNode;
  title: string;
  iconPosition?: "right" | "left";
  variant: "filled" | "outlined";
  type: "button" | "submit";
  extraClass?: string;
}
