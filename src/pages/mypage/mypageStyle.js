import styled from 'styled-components';

export const StNickname = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StNicknameInput = styled.input`
  height: 36px;
  padding: 0 8px;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
`;

export const StNicknameButton = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 36px;
  font-size: 14px;
  background: #fff;
  color: #000;
  border-radius: 5px;
  font-weight: 700;

  img {
    height: 24px;
  }
`;
