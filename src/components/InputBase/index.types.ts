import { ReactNode } from "react";

export interface InputBaseProps extends Partial<HTMLInputElement> {
  label: string;
  hasError?: boolean;
  textError?: string;
  message?: string;
  Icon?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
