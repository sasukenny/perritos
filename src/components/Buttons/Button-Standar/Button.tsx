import './Button.scss';

type ButtonSize = 'sm' | 'md' | 'lg';

type Props = {
  children: React.ReactNode;
  elevated?: boolean;
  color?: string;
  className?: string;
  size?: ButtonSize;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  children,
  elevated = false,
  color = 'secondary',
  className = '',
  size = 'md',
  type = 'button',
  onClick = () => {},
}: Props) => {
  let classString = `btn btn-${color}`;
  elevated && (classString = classString.concat(' btn-elevated'));

  let classSize = '';

  switch (size) {
    case 'sm':
      classSize = 'btn-sm';
      break;
    case 'md':
      classSize = 'btn-md';
      break;
    case 'lg':
      classSize = 'btn-lg';
      break;
  }

  classString = classString.concat(' ', className);
  classString = classString.concat(' ', classSize);

  return (
    <button type={type} className={classString} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
