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
}

const Input = (props: InputProps) => {
  const { classes, register, label, phone, type, placeholder, name, error } =
    props;

  return (
    <FormGroup>
      <label>{label}</label>
      {phone ? (
        <div className="phone">
          <PhoneInput
            // {...register(name)}
            country={'us'}
          />
        </div>
      ) : (
        <input
          // {...register(name)}
          className={classes}
          placeholder={placeholder}
          type={type}
        />
      )}

      {error}
    </FormGroup>
  );
};

export default Input;
