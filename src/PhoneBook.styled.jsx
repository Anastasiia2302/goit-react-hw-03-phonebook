import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 600px;
  background-color: beige;
  border: solid 3px black;
`;

export const Title = styled.h2`
  font-size: 24px;
  padding: 0;
  margin: 0;
`;

export const Forma = styled(Form)`
  padding: 10px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;
export const Label = styled.label`
  font-size: 22px;
`;

export const Input = styled(Field)`
  border: solid 3px black;
  padding: 10px;
  background-color: #5f9ea0;
  margin: 0;
`;

export const ErrorMes = styled(ErrorMessage)`
  padding: 5px;
  border: solid 1px #ff2400;
  border-radius: 2px;
  color: #ff2400;
`;

export const Btn = styled.button`
  background-color: #5f9ea0;

  border: none;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
`;

export const WrapFilter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const FilterLabel = styled.label`
  font-size: 22px;
`;

export const FilterInput = styled.input`
  border: solid 3px black;
  background-color: #5f9ea0;
  margin: 0;
  padding: 10px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 15px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Name = styled.span`
  &:first-child {
    margin-right: 15px;
  }
  
  font-size: 16px;
  font-weight: 600;
`;

export const BtnDel = styled.button`
  background-color: #5f9ea0;

  border: none;
  display: block;
  padding: 5px;
  font-size: 12px;
  border-radius: 3px;
  cursor: pointer;
`;
