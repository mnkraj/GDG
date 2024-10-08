// src/LoginPage.js

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
import axios from "axios";
import logo from "../assets/gdscnitjsr_logo.svg";
import toast from "react-hot-toast";

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

const MemberLoginPage = () => {
  const [registrationNo, setRegistrationNo] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (otpSent) {
      setOtp(e.target.value);
    } else {
      setRegistrationNo(e.target.value);
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://gdg-rho.vercel.app/api/v1/otp", {
        registration: registrationNo,
      });
      if (!response.data.success) {
        console.error("Error sending OTP:", response.data.msg);
        toast.error(response.data.msg)
      } else {
        console.log("OTP sent successfully:", response.data.msg);
        toast.success(response.data.msg)
        setOtpSent(true);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("something went wrong")
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://gdg-rho.vercel.app/api/v1/verify-otp", {
        registration: registrationNo,
        otp: otp,
      });
      if (!response.data.success) {
        console.error("Error verifying OTP:", response.data.message);
        toast.error("Invalid OTP")
      } else {
        console.log("OTP verified:", response.data.message);
        localStorage.setItem("registration", registrationNo);
        toast.success("OTP verified")
        navigate("/createpost");
      }
    } catch (error) {
      toast.error("something went wrong")
      console.error("Error verifying OTP:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <StyledBox style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}>
        <Typography style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={logo} alt="Google Logo" style={{ width: "320px", marginBottom: "40px" }} />
        </Typography>

        <StyledForm onSubmit={otpSent ? handleLogin : handleSendOtp}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={otpSent ? "otp" : "registration"}
            label={otpSent ? "otp" : "Registration"}
            name={otpSent ? "otp" : "registration"}
            autoComplete={otpSent ? "otp" : "registration"}
            autoFocus
            onChange={handleChange}
            value={otpSent ? otp : registrationNo}
          />
          {otpSent && <Typography>Enter the OTP sent to your email.</Typography>}
         

          <StyledButton type="submit" fullWidth variant="contained" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : otpSent ? "Verify OTP" : "Send OTP"}
          </StyledButton>
        
        </StyledForm>
      </StyledBox>
    </StyledContainer>
  );
};

export default MemberLoginPage;
