import FormGroup from './FormGroup';
import PhoneInput from 'react-phone-input-2';

interface InputProps {
  type: 'text' | 'password' | 'email';
  phone?: boolean;
  placeholder?: string;
  label?: string;
  classes?: string;
  name?: string;
  register?: any;
  error?: React.ReactNode;
  hasIcon?: boolean;
  iconName?: React.ReactNode;
  toogleIcon?: React.MouseEventHandler;
}

const Input = (props: InputProps) => {
  const { classes, label, phone, type, placeholder, name, error } = props;

  return (
    <FormGroup>
      <label>{label}</label>
      {phone ? (
        <div className="phone">
          <PhoneInput country={'us'} />
        </div>
      ) : (
        <input
          className={classes}
          placeholder={placeholder}
          type={type}
          name={name}
        />
      )}

      {error}
    </FormGroup>
  );
};

export default Input;
