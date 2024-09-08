import styled from 'styled-components';

export const StImgArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  > img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`;

export const StLoginArea = styled.div`
  width: 50%;
  padding: 0 24px;

  a.join-button {
    width: 100%;
    height: 48px;
    padding: 0;
    outline: none;
    border-radius: 5px;
    background: #000;
    border: 1px solid #fff;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const StInfo = styled.span`
  font-size: 14px;
  margin: 8px auto 16px;
`;
