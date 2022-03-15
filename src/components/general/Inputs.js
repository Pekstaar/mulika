export const Input = ({ label, className, ...rest }) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-medium text-sm" htmlFor="">
        {label}
      </label>
      <input
        className={`bg-slate-200  w-full rounded-lg p-3 ${className}}`}
        {...rest}
      />
    </div>
  );
};
