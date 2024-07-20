import React from "react";
import * as S from "./styles";
import { InputBaseProps } from "./index.types";

const InputBase: React.FC<InputBaseProps> = ({
  value,
  name,
  label,
  placeholder,
  type,
  hasError,
  message,
  Icon,
}) => {
  return (
    <S.InputWrapper>
      <S.Label htmlFor={name}>aaaaaaaaaa{label}</S.Label>
      {Icon && <Icon />}
      <S.StyledInput
        id={name}
        type={type}
        placeholder={placeholder}
        aria-label={value}
      />
      {hasError && <S.Message>{message}</S.Message>}
    </S.InputWrapper>
  );
};

export default InputBase;
