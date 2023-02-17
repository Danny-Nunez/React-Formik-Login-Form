import React from "react";
import { useFormik } from "formik";
import './App.css';

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful"
      );
       
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Email Field required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {  // added this line to check for email format 
        errors.email = 'Username should be an email';  // added this line to display the message if not in email format 
      }
      if (!values.password) {
        errors.password = "Password Field Required";
      return errors;
    }
    return errors;
   },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <div className="title"> 
      <h2>MIT Module 13 React Formik  Login Form</h2>
     </div>
        <div className="inputwrapper">Email:
        <input
          id="emailField"
          type="text"
          name="email"
          placeholder="Enter username"
          onChange={formik.handleChange}
          value={formik.values.email}
        /></div>
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}{formik.errors.emailError}
          </div>
        ) : null}
        
        <div className="inputwrapper">Password:
        <input
          id="pswField"
          type="text"
          name="password"
          placeholder="Min 6 characters"
          onChange={formik.handleChange}
          value={formik.values.password}
        /></div>
        <br />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        <div classNmae="buttonpad">
          <button className="submitbutton" id="submitBtn" type="submit">Submit</button>
        </div>
       
      </form>
    </div>
  );
}

export default App;

