const Button = ({
  onClick,
  children,
  className,
  disabled = false,
  ...props
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;
