import React from "react";
import * as S from "./styles";
import { InputBaseProps } from "./index.types";

const InputBase: React.FC<InputBaseProps> = ({
  name,
  label,
  value,
  type,
  Icon,
  placeholder,
  message,
  onChange,
  textAling,
  textError,
  hasError,
  width,
  ...props
}) => {
  return (
    <S.InputContainer width={width}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper icon={!!Icon}>
        <S.InputContent>
          {Icon && <img src={Icon} />}
          <S.StyledInput
            onChange={onChange}
            id={name}
            type={type}
            placeholder={placeholder}
            value={value}
            textAlign={textAling}
          />
        </S.InputContent>
      </S.InputWrapper>

      {textError && hasError && (
        <S.Message hasError={!!textError}>{textError}</S.Message>
      )}

      {!hasError && message && <S.Message>{message}</S.Message>}
    </S.InputContainer>
  );
};

export default InputBase;
