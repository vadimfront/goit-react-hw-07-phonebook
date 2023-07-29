import { Field, Form } from 'formik';
import styled from '@emotion/styled';

export const FormBook = styled(Form)`
  max-width: 600px;
  width: 100%;
`;
export const FieldGroup = styled.div`
  position: relative;
  width: 100%;
  max-width: 258px;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0;
  margin-bottom: 25px;
`;
export const StyledFormikField = styled(Field)`
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
export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 17px;
  color: #fff;
  pointer-events: none;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  font-size: ${props => (props.size === 'small' ? '12px' : '15px')};
  color: #fff;
  background-color: #3f8efc;
  outline: none;
  padding: ${props => (props.size === 'small' ? '5px' : '10px 15px')};
  transition: background-color 0.2s;
  &:hover,
  &:focus {
    background-color: #256ed3;
  }
`;

export const ErrorMessageText = styled.div`
  padding: 10px;
  background-color: #c70c0c;
  margin-top: 10px;
  color: #fff;
  border-radius: 10px;
  width: 100%;
`;
