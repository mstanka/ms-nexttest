import Link from 'next/link';

const Button = ({ link, children, onClick }) => {
  if (link) {
    return (
      <Link href={link}>
        <a>{children}</a>
      </Link>
    );
  }
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
