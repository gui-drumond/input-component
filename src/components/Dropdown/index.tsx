import React from "react";
import * as S from "./styles";
import { DropdownProps } from "./index.types";

import Arrow from "./arrow.svg";

const Dropdown: React.FC<Partial<DropdownProps>> = ({
  name,
  label,
  value,
  type,
  Icon,
  placeholder,
  message,
  textAling,
  textError,
  hasError,
  width,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <S.InputContainer width={width}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper icon={!!Icon} hasError={hasError}>
        <S.InputContent>
          {typeof Icon === "string" && <img src={Icon} alt="Icone" />}
          {typeof Icon === "object" && Icon}
          <S.StyledInput
            {...props}
            id={name}
            type={type}
            placeholder={placeholder}
            value={value}
            textAlign={textAling}
          />

          <S.ArrowIcon open={open} onClick={() => setOpen(!open)}>
            <img src={Arrow} alt="Arrow" />
          </S.ArrowIcon>
        </S.InputContent>
      </S.InputWrapper>

      {textError && hasError && (
        <S.Message hasError={!!textError}>{textError}</S.Message>
      )}

      {!hasError && message && <S.Message>{message}</S.Message>}
    </S.InputContainer>
  );
};

export default Dropdown;
