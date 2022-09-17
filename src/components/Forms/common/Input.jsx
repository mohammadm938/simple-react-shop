const Input = ({ formik, name, labelName, type = "text" }) => {
  return (
    <div>
      <div className="flex justify-center items-center space-x-4 ">
        <label className="font-bold" htmlFor={name}>
          {labelName}:
        </label>
        <input
          {...formik.getFieldProps(name)}
          className={`p-1 border-b-2 rounded-md   ${
            formik.errors[name] && formik.touched[name]
              ? "border-red-600"
              : "border-black"
          }`}
          type={type}
          name={name}
          id={name}
          value={formik.values[name]}
        />
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-sm flex justify-center items-center mt-2 text-red-600 font-bold">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default Input;
