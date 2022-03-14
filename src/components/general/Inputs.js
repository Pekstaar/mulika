export const Input = ({ label, className, ...rest }) => {
  return (
    <div>
      <label className="font-bold" htmlFor="">
        Phone number
      </label>
      <input
        className={`bg-slate-200 w-full rounded-lg p-3 className}`}
        {...rest}
      />
    </div>
  );
};
