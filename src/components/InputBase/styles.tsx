import styled from "styled-components";

export const InputContainer = styled.div<{ width?: number }>`
  width: ${(props) => `${props.width ? `${props.width}px` : "306px"}`};
  height: 100px;
  color: #30303090;
  position: relative;
`;

export const InputWrapper = styled.div<{ icon?: boolean; hasError?: boolean }>`
  background-color: #fff;
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #cfcfcffc;

  font-family: Open Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;

  border: 1px solid ${({ hasError }) => (hasError ? "#cb0a0a80" : "#00436d85")};
  outline: solid ${({ hasError }) => (hasError ? "#cb0a0a60" : "#005a9275")}
    1.5px;

  &:focus,
  &:focus-visible,
  &:focus-within {
    border: 1px solid ${({ hasError }) => (hasError ? "#cb0a0a" : "#1a95b0")};
    outline: solid ${({ hasError }) => (hasError ? "#cb0a0a80" : "#0091ea80")}
      1.5px;
  }
`;

export const StyledInput = styled.input<
  {
    textAlign?: "start" | "end" | "center";
  } & Partial<HTMLInputElement>
>`
  color: #30303090;
  cursor: pointer;
  padding: 14px 0 14px 10px;
  width: 90%;

  border: none;

  ${({ textAlign }) => {
    if (textAlign === "end") {
      return `
      text-align: right;
      margin-left: 25px;
      margin-right: 20px;
      `;
    }
    if (textAlign === "center") {
      return `
      text-align: center;
      margin:auto;
      padding-right: 10px;
      `;
    }
    return `
      text-align: left;
      margin-left: 25px;
      margin-right: 20px;
      `;
  }}

  &::placeholder {
    color: #30303020;
    line-height: 20px;
  }

  &:focus,
  &:focus-visible,
  &:focus-within {
    outline: none;
  }
`;

export const Message = styled.p<{ hasError?: boolean }>`
  color: ${({ hasError }) => (hasError ? "#cb0a0a" : "#303030")};
  margin-left: 10px;
  margin-top: 4px;

  font-family: Open Sans;
  font-size: 10px;
  font-weight: 700;
  line-height: 15px;
  text-align: left;
`;

export const Label = styled.label`
  color: #303030;
  width: 100%;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  cursor: pointer;
`;

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 46px;
  img {
    width: 20px;
    height: 20px;
    margin: 14px 8px;
    position: absolute;
  }
`;
