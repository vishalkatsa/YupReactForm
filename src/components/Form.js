// import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export default function Forms(props) {
  const [formValue, setsetFormValue] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [closes, setcloses] = useState();

  const initialValues = {
    name: "",
    mobile: "",
    email: "",
    state: "",
    district: "",
    village: "",
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("name is required")
      .max(30, "minimum 30 characters"),
    mobile: Yup.string()
      .required("mobile is required")
      .matches(/^\d{10}$/, "Mobile number must be 10 digits")
      .matches(/^[647]/, "Mobile number must start with 6, 7, or 4"),
    email: Yup.string().required("email is required").email("invalid email"),
    state: Yup.string()
      .required("state is required")
      .max(20, "minimum 20 characters"),
    district: Yup.string()
      .required("district is required")
      .max(20, "minimum 20 characters"),
    village: Yup.string()
      .required("district is required")
      .max(20, "minimum 20 characters"),
  });

  const onSubmit = (values) => {
    setsetFormValue([...formValue, values]);
    setShowPopup(true);
    setcloses("hidden");
  };
  // console.log(setFormValue);
  return (
    <>
      {showPopup && <Popup mapData={formValue} />}
      <div className={`${props.FormBlock} mt-5`}></div>
      <div className={`${closes} w-[65%] mx-auto `}>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            try {
              schema.validateSync(values, { abortEarly: false });
            } catch (errors) {
              return errors.inner.reduce((formErrors, error) => {
                formErrors[error.path] = error.message;
                return formErrors;
              }, {});
            }
          }}
          onSubmit={onSubmit}
        >
          <Form className=" bg-[#ffffff]  rounded wv mx-auto py-8 px-6">
            {/* <h1 className="w-[100%] px-4 py-2 text-[25px] mb-4 text-white rounded text-center font-semibold mx-auto bg-green-600">Address</h1> */}
            <label className=" text-sm  mb-1 antialiased fontF ">
              Full Name
            </label>
            <Field
              type="text"
              name="name"
              placeholder="Full Name"
              className={` mx-auto w-full    bg-[#ffffff] h-9 rounded border border-gray-light focus:border-green-500 hover:border-green-500 focus:shadow-green-500 focus:drop-shadow-sm outline-none px-4 py-2`}
            />
            <p className="w-full h-4 text-sm text-red-600 ">
              <ErrorMessage name="name" />
            </p>
            <label className=" text-sm  mb-1 mt-1  fontF ">Mobile </label>
            <Field
              minLength={1}
              maxLength={10}
              name="mobile"
              placeholder="Mobile"
              type="number"
              className=" mx-auto w-full bg-[#ffffff] h-9 rounded border border-gray-light focus:border-green-500 hover:border-green-500 focus:shadow-green-500 focus:drop-shadow-sm outline-none px-4 py-2"
            />
            <p className="w-full h-4 text-red-600 text-sm">
              <ErrorMessage name="mobile" />
            </p>
            <label className=" text-sm  mb-1 mt-1 fontF ">Email Id</label>
            <Field
              type="email"
              name="email"
              required
              placeholder="Email Id"
              className=" mx-auto w-full   bg-[#ffffff] h-9 rounded border border-gray-light focus:border-green-500 hover:border-green-500 focus:shadow-green-500 focus:drop-shadow-sm outline-none px-4 py-2"
            />
            <p className="w-full h-4 text-red-600 text-sm ">
              <ErrorMessage name="email" />
            </p>
            <label className=" text-sm  mb-1 mt-1  fontF">State</label>
            <Field
              type="text"
              name="state"
              placeholder="State"
              className="block mx-auto w-full   bg-[#ffffff] h-9 rounded border border-gray-light focus:border-green-500 hover:border-green-500 focus:shadow-green-500 focus:drop-shadow-sm outline-none px-4 py-2"
            />
            <p className="w-full h-4 text-red-600 text-sm">
              <ErrorMessage name="state" />
            </p>
            <label className="block text-sm  mb-1 mt-1 fontF ">District</label>
            <Field
              type="text"
              name="district"
              placeholder="District"
              className="block mx-auto w-full   bg-[#ffffff] h-9 rounded border border-gray-light focus:border-green-500 hover:border-green-500  focus:shadow-green-500 focus:drop-shadow-sm outline-none px-4 py-2"
            />
            <p className="w-full h-4 text-red-600 text-sm">
              <ErrorMessage name="district" />
            </p>
            <label className="block text-sm  mb-1 mt-1 fontF ">Village</label>
            <Field
              type="text"
              name="village"
              placeholder="Village"
              className="block mx-auto w-full   bg-[#ffffff] h-9 rounded border border-gray-light focus:border-green-500 hover:border-green-500 focus:shadow-green-500 focus:drop-shadow-sm outline-none px-4 py-2"
            />
            <p className="w-full h-4 text-red-600 text-sm ">
              <ErrorMessage name="village" />
            </p>
            <div className="w-24 mx-auto">
              <div className="py-2 px-5 font-semibold text-[15px]  text-white h-9  rounded mt- bg-green-600 cursor-pointer">
                <button type="submit" />
                Submit
              </div>
            </div>
            {/* <button
            onClick={onsubmit}
            className="py-2 px-10 font-semibold ml-32 mt-6 bg-green-600"
          >
            Submit
          </button> */}
          </Form>
        </Formik>
      </div>
    </>
  );
}

// Form.propTypes = {
//   inputName: PropTypes.string,
//   Mobile: PropTypes.number,
//   Email: PropTypes.string,
//   States: PropTypes.string,
//   District: PropTypes.string,
//   Village: PropTypes.string,
//   submits: PropTypes.bool,
//   mapData: PropTypes.array,
// };
