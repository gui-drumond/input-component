import { ReactNode } from "react";

export interface InputBaseProps extends Partial<HTMLInputElement> {
  label: string;
  hasError?: boolean;
  message?: string;
  Icon?: ReactNode;
}
