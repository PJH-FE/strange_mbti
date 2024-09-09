import styled from 'styled-components';

export const FixedBtn = styled.div`
  z-index: 101;
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  > img {
    cursor: pointer;
  }
`;

export const StFooter = styled.footer`
  margin-top: auto;
`;
