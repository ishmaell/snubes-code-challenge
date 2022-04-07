import FormGroup from './FormGroup';

interface InputProps {
  type: 'text' | 'password' | 'email';
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
  const { classes, label, type, placeholder, name, error } = props;

  return (
    <FormGroup>
      <label>{label}</label>
      <input
        className={classes}
        placeholder={placeholder}
        type={type}
        name={name}
      />
      {error}
    </FormGroup>
  );
};

export default Input;
