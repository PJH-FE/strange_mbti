import styled from 'styled-components';

export const StTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  font-family: 'StarFont', sans-serif;
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

export const StResultBox = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #fff;
  border-radius: 12px;
  padding: 16px;
`;

export const StResultTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  .mbti {
    font-size: 24px;
    font-weight: 700;
    font-family: 'StarFont', sans-serif;
  }
`;

export const StResultBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 12px;
  padding-top: 16px;
  margin-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.7);

  div {
    width: 100%;
    padding-bottom: 16px;
    font-size: 18px;
  }

  button {
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 8px 16px;
    font-weight: 700;

    + button {
      background: #fff;
      color: #000;
    }
  }
`;
