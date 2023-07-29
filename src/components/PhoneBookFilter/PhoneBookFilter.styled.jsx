import styled from '@emotion/styled';

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const Field = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #fff;
  outline: 0;
  font-size: 17px;
  color: #fff;
  padding: 7px 10px;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown ~ label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }
  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
  }
  &:focus ~ label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #38caef;
    font-weight: 700;
  }
`;

export const Label = styled.label``;
