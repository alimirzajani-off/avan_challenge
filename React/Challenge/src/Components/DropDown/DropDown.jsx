const DropDown = ({ option, label, className, value = 0, onChange }) => {
  return (
    <div className={`DropDown ${className}`}>
      {label && (
        <label
          htmlFor={label}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <select
        className="rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 mt-2 py-3 px-3"
        onChange={onChange}
        value={value}
        defaultValue={0}
      >
        <option>یک مورد انتخاب کنید</option>
        {option.map((item) => (
          <option key={item.value} value={item.value}>
            {item.CategoriesName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
