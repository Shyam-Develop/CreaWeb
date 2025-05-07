import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const PhoneNumber = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      countryCode: "91",
      phone: "",
    },
    validationSchema: Yup.object({
      countryCode: Yup.string().required("Country code is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, "Only numbers are allowed")
        .min(7, "Too short")
        .max(15, "Too long"),
    }),
    onSubmit: (values) => {
      const fullPhoneNumber = `+${values.countryCode}${values.phone}`;
      localStorage.setItem("phone", fullPhoneNumber);
      navigate("/session/phone-number-otp");
    },
  });

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Phone Number</h2>
        <p style={styles.subText}>
          We're going to send you a verification code.
        </p>

        <form onSubmit={formik.handleSubmit}>
          <div style={styles.inputContainer}>
            <select
              name="countryCode"
              value={formik.values.countryCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={styles.select}
            >
              <option value="91">+91</option>
              <option value="1">+1</option>
              <option value="44">+44</option>
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={styles.input}
            />
          </div>

          {formik.touched.phone && formik.errors.phone && (
            <div style={styles.errorText}>{formik.errors.phone}</div>
          )}

          <button type="submit" style={styles.button}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#fff",
    padding: "40px 30px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  subText: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "30px",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "10px",
  },
  select: {
    padding: "12px",
    border: "none",
    borderRight: "1px solid #ddd",
    backgroundColor: "#f5f5f5",
    fontSize: "16px",
    outline: "none",
  },
  input: {
    flex: 1,
    padding: "12px",
    border: "none",
    fontSize: "16px",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "14px",
    fontSize: "16px",
    backgroundColor: "#4f74f9",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px",
  },
  errorText: {
    color: "red",
    fontSize: "13px",
    marginTop: "4px",
  },
};

export default PhoneNumber;
