import React from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import PropTypes from 'prop-types';

const RegisterForm = ({
  subjectValue,
  subjectError,
  passwordValue,
  passwordError,
  passConfirmValue,
  passConfirmError,
  handleSubmit,
  handleChange,
}) => {
  return (
    <div className='registry'>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <Input
            title="Email или телефон"
            type="text"
            name="subject"
            value={subjectValue}
            onChange={handleChange}
            error={subjectError}
          />
        </div>
        <div className="input-field">
          <Input
            title="Пароль"
            type="password"
            name="password"
            value={passwordValue}
            onChange={handleChange}
            error={passwordError}
          />
        </div>
        <div className="input-field">
          <Input
            title="Подтвердить пароль"
            type="pass_confirm"
            name="pass_confirm"
            value={passConfirmValue}
            onChange={handleChange}
            error={passConfirmError}
          />
        </div>
        <div className="input-field">
          <Button title="Войти" />
        </div>
      </form>
    </div>
  );
};

RegisterForm.propTypes = {
  subjectValue: PropTypes.string.isRequired,
  subjectError: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  passConfirmValue: PropTypes.string.isRequired,
  passConfirmError: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RegisterForm;