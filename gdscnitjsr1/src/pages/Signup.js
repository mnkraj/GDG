import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import toast from "react-hot-toast";
import logo from "../assets/gdscnitjsr_logo.svg";

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

const StyledBox = styled(Box)({
  padding: "32px",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
});

const StyledForm = styled("form")({
  width: "100%",
  marginTop: "16px",
});

const StyledButton = styled(Button)({
  margin: "24px 0 16px",
  backgroundColor: "#4285F4",
  color: "white",
  "&:hover": {
    backgroundColor: "#357ae8",
  },
});

const StyledLink = styled(Link)({
  color: "#4285F4",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleValidation = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(
      details.email.match(emailPattern) &&
        details.password === details.confirmPassword &&
        details.name !== "" &&
        details.password !== "" &&
        details.confirmPassword !== ""
    );
  };

  React.useEffect(() => {
    handleValidation();
  }, [details]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(
      "http://localhost:3080/api/v1/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: details.name,
          email: details.email,
          password: details.password,
        }),
      }
    );
    const result = await response.json();

    if (!result.success) {
      toast.error(result.message);
      setLoading(false);
    } else {
      localStorage.setItem("email", result.email);
      toast.success("Admin Added Successfully");
      navigate("/login");
      setLoading(false);
    }
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <StyledBox>
        <Typography align="center" variant="h4" gutterBottom>
          <img src={logo} alt="Google Logo" style={{ width: "200px" }} />
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="new-password"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            autoComplete="new-password"
            onChange={handleChange}
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            disabled={!isValid || loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Sign Up"
            )}
          </StyledButton>
          <Typography variant="body2" align="center">
            Already have an account?{" "}
            <StyledLink to="/login">Sign In</StyledLink>
          </Typography>
        </StyledForm>
      </StyledBox>
    </StyledContainer>
  );
};

export default Signup;
