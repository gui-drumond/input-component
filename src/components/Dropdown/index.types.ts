export interface DropdownProps extends Partial<HTMLSelectElement> {
  label: string;
  hasError?: boolean;
  textError?: string;
  message?: string;
  placeholder?: string;
  Icon?: string | React.ReactNode;
  textAling?: "start" | "end" | "center";
  width?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}
