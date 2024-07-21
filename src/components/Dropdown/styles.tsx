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

export const StyledInput = styled.div<{
  textAlign?: "start" | "end" | "center";
}>`
  color: #30303090;
  cursor: pointer;
  padding: 14px 0 14px 10px;
  width: 90%;

  border: none;

  display: flex;
  align-items: center;

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
  width: 100%;
  height: 46px;
  & > img {
    width: 20px;
    height: 20px;
    margin: 14px 8px;
    position: absolute;
  }
`;

export const ArrowIcon = styled.div<{ open: boolean }>`
  position: absolute;
  width: 20px;
  height: 20px;

  margin: auto;
  right: 6px;
  rotate: ${(props) => (props.open ? "180deg" : "0deg")};
  img {
    width: 20px;
    height: 20px;
  }
`;

export const DropDownContainer = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  background-color: #fff;
  margin-top: 5px;

  outline: solid #cfcfcffc 1.5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;

  ${({ open }) =>
    open
      ? `
      position: absolute;
      z-index: 999;
      height: auto;
      min-height: 56px;
      
  `
      : `display: none;`}
`;

export const DropDownContent = styled.div`
  width: 95%;
  display: flex;

  flex-direction: column;
  align-self: center;

  z-index: 2;
  margin-top: 5px;

  border-radius: 8px;
  background-color: #005a9200;
`;

export const DropDownItem = styled.option<{ active?: boolean }>`
  display: flex;
  min-height: 46px;
  align-items: center;
  justify-content: start;

  background-color: ${({ active }) => (active ? "#1a95b020" : "#fff")};
  border-radius: 4px;
  padding-left: 15px;
  margin-bottom: 5px;
  cursor: pointer;
`;
