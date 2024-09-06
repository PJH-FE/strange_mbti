import { Link, useLocation } from 'react-router-dom';

const Form = ({ handleSubmit, setFormData, formData }) => {
  const location = useLocation().pathname;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      {location === '/join' && (
        <div>
          <label htmlFor="nickname">Nickname</label>
          <input
            name="nickname"
            id="nickname"
            type="text"
            value={formData.nickname}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      )}

      <div>
        <label htmlFor="id">ID</label>
        <input name="id" id="id" type="text" value={formData.id} onChange={(e) => handleInputChange(e)} />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
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
          <button type="submit">Login</button>
          <Link to="/join">Join</Link>
        </>
      ) : (
        <button type="submit">Join</button>
      )}
    </form>
  );
};
export default Form;
