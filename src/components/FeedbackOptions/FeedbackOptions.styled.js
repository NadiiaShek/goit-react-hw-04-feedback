import styled from '@emotion/styled';
export const Box = styled.div`
  display: block;
  
`;
export const Button = styled.button`
  &:not(:last-child) {
    margin-right: 40px;
  }
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 15px 30px;
  background-color: #abdbe3;
  color: dark blue;
  border-radius: 10px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  cubic-bezier(.17,.67,.57,.48)
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #1e81b0;
   box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;

