import { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import './Authorization.css';
import { authorizationValidation, setCookie } from '../../utils/utils';

const Authorization = ({ setIsUserLoggedIn, setUserName }) => {
  const [nameInput, setNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleChange = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  const logIn = (name, password) => {
    const isResult = authorizationValidation(name, password);

    if (isResult) {
      setIsUserLoggedIn(true);
      setUserName(nameInput);
      setRedirect(true);
      setCookie('authorization', 'Admin');
    } else {
      setError('Username or password entered incorrectly!');
    }
  };

  if (redirect) return <Redirect push to='/profile' />;

  return (
    <form className='authorization' onSubmit={(event) => event.preventDefault()}>
      <h1 className='authorization__title'>Log in</h1>
      <input
        className='authorization__input'
        placeholder='Login'
        type='text'
        onChange={(element) => setNameInput(element.target.value)}
      />
      <input
        className='authorization__input'
        placeholder='Password'
        type={isShowPassword ? 'text' : 'password'}
        onChange={(element) => setPasswordInput(element.target.value)}
      />
      <label className='authorization__label' htmlFor='showpass'>
        Show password
        <input className='authorization__checkbox' type='checkbox' id='showpass' onChange={handleChange} />
      </label>
      <p className='authorization__error'>{error}</p>
      <button className='authorization__save' onClick={() => logIn(nameInput, passwordInput)}>Save</button>
    </form>
  );
};

Authorization.propTypes = {
  setIsUserLoggedIn: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired,
};

export default Authorization;
