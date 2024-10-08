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
import logo from "../assets/gdscnitjsr_logo.svg"
// Styled components using @mui/system styled utility
const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

const StyledBox = styled(Box)({
  padding: "32px", // Equivalent to 4 * theme.spacing(1)
  backgroundColor: "white",
  borderRadius: "8px", // Equivalent to theme.shape.borderRadius
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Example shadow
});

const StyledForm = styled("form")({
  width: "100%",
  marginTop: "8px", // Equivalent to theme.spacing(1)
});

const StyledButton = styled(Button)({
  margin: "24px 0 16px", // Equivalent to theme.spacing(3, 0, 2)
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

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const response = await fetch("http://localhost:3080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: details.email,
        password: details.password,
      }),
    });
    const result = await response.json();

    if (!result.success) {
      toast.error(result.message);
      setLoading(false);
    } else {
      localStorage.setItem("email", result.email);
      toast.success(`Logged in as ${result.email}`);
      navigate("/addevents");
      setLoading(false);
    }
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <StyledBox style={{backgroundColor : "#f8f9fa" , border : "1px solid #dee2e6"}}>
        <Typography style={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
          <img
            src={logo}
            alt="Google Logo"
            style={{ width: "320px", marginBottom: "40px" }}
          />
        </Typography>
        
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <Typography> <small style={{color : "red"}}> *Use Institute Mail Id</small></Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Login"}
          </StyledButton>
          <Typography variant="body2" color="textSecondary" align="center">
            New user? <StyledLink to="/signup">Register here</StyledLink>
          </Typography>
        </StyledForm>
      </StyledBox>
    </StyledContainer>
  );
};

export default Login;
