import React, { ChangeEvent } from "react";
import * as S from "./styles";
import { DropdownProps, OptionsProps } from "./index.types";

import Arrow from "./arrow.svg";

const Dropdown: React.FC<Partial<DropdownProps>> = ({
  name,
  type,
  label,
  Icon,
  placeholder,
  message,
  textAling,
  textError,
  hasError,
  width,
  defaultValue,
  disabled,
  options,
  onChange,
  value: optionState,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <S.InputContainer width={width}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper icon={!!Icon} hasError={hasError}>
        <S.InputContent onClick={() => setOpen(!open)}>
          {typeof Icon === "string" && <img src={Icon} alt="Icone" />}
          {typeof Icon === "object" && Icon}
          <S.StyledInput id={name} textAlign={textAling}>
            {defaultValue ?? optionState?.label ?? placeholder}
          </S.StyledInput>

          <S.ArrowIcon open={open}>
            <img src={Arrow} alt="Arrow" />
          </S.ArrowIcon>
        </S.InputContent>
      </S.InputWrapper>
      <S.DropDownContainer open={open}>
        {defaultValue ||
          (options && (
            <S.DropDownContent>
              {defaultValue && (
                <S.DropDownItem
                  key={`default`}
                  onClick={(e: any) => onChange && onChange(e)}
                >
                  {defaultValue}
                </S.DropDownItem>
              )}
              {options?.map((op: OptionsProps, index: number) => {
                return (
                  <S.DropDownItem
                    active={op.label === optionState?.label}
                    key={`${index}-${op}`}
                    onClick={(e: any) => {
                      onChange && onChange(e);
                      setOpen(false);
                    }}
                  >
                    {op?.label}
                  </S.DropDownItem>
                );
              })}
            </S.DropDownContent>
          ))}
      </S.DropDownContainer>
      {textError && hasError && (
        <S.Message hasError={!!textError}>{textError}</S.Message>
      )}

      {!hasError && message && <S.Message>{message}</S.Message>}
    </S.InputContainer>
  );
};

export default Dropdown;
