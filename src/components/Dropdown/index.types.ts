export interface DropdownProps {
  label: string;
  name: string;
  type: string;
  disabled?: boolean;
  hasError?: boolean;
  textError?: string;
  message?: string;
  placeholder?: string;
  Icon?: string | React.ReactNode;
  textAling?: "start" | "end" | "center";
  width?: number;
  defaultValue?: string;
  options?: OptionsProps[];
  value: OptionsProps;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export type OptionsProps = { value: string; label: string };
