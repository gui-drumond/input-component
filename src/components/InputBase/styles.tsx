import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(207, 207, 207, 0.988);
  background-color: #fff;
  color: rgba(48, 48, 48, 1);
  padding: 14px 8px;

  &::placeholder {
    color: #323131;
  }
`;

export const Message = styled.p<{ hasError?: boolean }>`
  color: #cb0a0a;
  margin-left: 10px;
`;

export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
