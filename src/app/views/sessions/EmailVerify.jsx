import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const EmailVerify = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("email", values.email);
      navigate("/session/email-verify-otp");
    },
  });

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Enter Your Email</h2>
        <p style={styles.subText}>
          We're going to send you a verification code.
        </p>

        <form onSubmit={formik.handleSubmit}>
          <div style={styles.inputContainer}>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              style={styles.input}
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <div style={styles.errorText}>{formik.errors.email}</div>
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
    position: "relative",
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

export default EmailVerify;
