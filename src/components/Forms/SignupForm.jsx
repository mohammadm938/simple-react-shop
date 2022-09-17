import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Input from "./common/Input";

const inputOptions = [
  { id: 1, name: "name", labelName: "Name" },
  { id: 2, name: "email", labelName: "Email", type: "email" },
  { id: 3, name: "phoneNumber", labelName: "Phone Number", type: "tel" },
  { id: 4, name: "password", labelName: "Password", type: "password" },
  {
    id: 5,
    name: "passwordConfirmation",
    labelName: "Password Confirmation",
    type: "password",
  },
];
let initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};
const SignupForm = () => {
  const [formValues, setFormValues] = useState(null);

  useEffect((values) => {
    console.log(values);
  }, []);

  const onSubmit = (values) => {
    console.log(values);
    // axios
    //   .post("http://localhost:3001/users", values)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.log(err));
    formik.setSubmitting(false);
  };

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches("^[0-9]{11}$", "Phone number is invalid"),
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
      .string()
      .required("Password confirmation is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="flex justify-center items-center mt-2">
      <div className="flex justify-center items-center mt-2 p-4  w-1/3 rounded-lg shadow-lg shadow-purple-400 border   ">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center space-y-5"
        >
          {/* create inputs */}
          {inputOptions.map((input) => (
            <Input key={input.id} formik={formik} {...input} />
          ))}

          {/* create submit button */}
          <button
            type="submit"
            disabled={!formik.isValid}
            className="disabled:bg-gray-600 disabled:text-white disabled:border-gray-600 flex justify-center items-center border border-green-500 p-1 w-1/2 rounded-md transition-all hover:transition-all hover:bg-green-500 hover:text-white "
          >
            {formik.isSubmitting
              ? "Submitting..."
              : formik.isValid
              ? "Submit"
              : "Fill out all fields"}
          </button>
          <Link to={"/login"}>
            <p className="text-xs text-blue-600 font-bold">
              Already have account ?
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
