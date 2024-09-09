import TestForm from '../../components/TestForm';
import { StTitle } from '../../shared/CommonStyle';
import { StTestWrap } from './testStyle';

const Test = () => {
  return (
    <StTestWrap>
      <StTitle style={{ fontSize: 48, marginBottom: 24, textAlign: 'center' }}>MBTI</StTitle>
      <TestForm />
    </StTestWrap>
  );
};
export default Test;
