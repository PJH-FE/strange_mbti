import styled from 'styled-components';

export const StTitle = styled.div`
  font-size: 32px;
`;

export const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 400px;
`;

export const StLabel = styled.label`
  display: block;
  width: 100%;
  font-size: 18px;
  color: #fff;
  margin-bottom: 16px;
`;

export const StInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 8px;
  outline: none;
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 1;
  color: #fff;
`;

export const StButton = styled.button`
  width: 100%;
  height: 48px;
  padding: 0;
  outline: none;
  border-radius: 5px;
  background: #fff;
  color: #000;
  font-size: 18px;
  font-weight: 700;
`;
