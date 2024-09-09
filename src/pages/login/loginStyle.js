import styled from 'styled-components';

export const StLoginWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  height: calc(100vh - 260px);
`;

export const StImgArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  > img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
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

  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const StInfo = styled.span`
  margin: 12px auto 24px;
  font-size: 14px;
  font-weight: 300;
  font-family: 'StarFont', sans-serif;
`;
