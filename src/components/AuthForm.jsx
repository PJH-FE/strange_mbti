import { Link, useLocation } from 'react-router-dom';
import { StButton, StForm, StInput, StLabel } from '../shared/CommonStyle';

const Form = ({ handleSubmit, setFormData, formData }) => {
  const location = useLocation().pathname;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <StForm onSubmit={handleSubmit}>
      {location === '/join' && (
        <div>
          <StLabel htmlFor="nickname">Nickname</StLabel>
          <StInput
            name="nickname"
            id="nickname"
            type="text"
            value={formData.nickname}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      )}

      <div>
        <StLabel htmlFor="id">ID</StLabel>
        <StInput name="id" id="id" type="text" value={formData.id} onChange={(e) => handleInputChange(e)} />
      </div>

      <div>
        <StLabel htmlFor="password">Password</StLabel>
        <StInput
          name="password"
          id="password"
          type="password"
          autoComplete="false"
          value={formData.password}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      {location === '/login' ? (
        <>
          <StButton type="submit">Login</StButton>
          <Link to="/join" className="join-button flex items-center justify-center">
            Join
          </Link>
        </>
      ) : (
        <StButton type="submit">Submit</StButton>
      )}
    </StForm>
  );
};
export default Form;
