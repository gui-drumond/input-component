import { ReactNode } from "react";

export interface InputBaseProps extends Partial<HTMLInputElement> {
  label: string;
  hasError?: boolean;
  textError?: string;
  message?: string;
  Icon?: string;
  textAling?: "start" | "end" | "center";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}
