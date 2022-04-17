import './Header.scss';

type Props = {
  children: React.ReactNode;
  centered?: boolean;
  variant?: string;
};

const Header = ({ children, centered = false, variant = 'primary' }: Props) => {
  let classString = '';

  switch (variant) {
    case 'primary':
      classString = 'title ';
      break;
    case 'secondary':
      classString = 'block-title bg-primary';
  }

  return (
    <div className={`w-100 ${classString}`}>
      <h2 className={centered ? 'text-center' : ''}>{children}</h2>
    </div>
  );
};

export default Header;
