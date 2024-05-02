export const Input = ({
  label = "",
  value = "",
  onChange,
  type = "text",
  placeholder,
  className = "",
  disabled,
  ...props
}) => {
  return (
    <div className={`Input ${className} `}>
      {disabled ? (
        <>{value}</>
      ) : (
        <>
          {label && (
            <label
              htmlFor={label}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {label}
            </label>
          )}
          <div
            className={`relative ${label ? "mt-2" : ""} rounded-md shadow-sm`}
          >
            <input
              type={type}
              name={label}
              id={label}
              value={value}
              className={`block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2`}
              placeholder={placeholder}
              onChange={onChange}
              disabled={disabled}
            />
          </div>
        </>
      )}
    </div>
  );
};
