import styled from 'styled-components';

export const StButtonArea = styled.div``;
export const StTestButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 36px;
  border: 1px solid #fff;
  border-radius: 5px;

  font-size: 18px;

  transition: 0.3s;

  &.on {
    background-color: #fff;
    color: #000;
  }
`;

export const StQuestionLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  line-height: 1.5;
  &:first-child {
    border-top: 2px solid rgba(255, 255, 255, 1);
  }
`;

export const StSubmitButton = styled.button`
  width: 100%;
  padding: 24px 0;
  font-size: 32px;
  font-weight: 700;
  border-top: 2px solid #fff;
  font-family: 'StarFont', sans-serif;
`;
