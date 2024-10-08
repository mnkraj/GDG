import React, { useState, useEffect } from "react";
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
    teamName: "",
    members: [
      { name: "", registrationNumber: "" },
      { name: "", registrationNumber: "" },
      { name: "", registrationNumber: "" },
    ],
    github:""
  });
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("memberName") || name.startsWith("memberRegNo")) {
      const index = parseInt(name.replace(/\D/g, ""), 10);
      const field = name.startsWith("memberName") ? "name" : "registrationNumber";
      const updatedMembers = [...details.members];
      updatedMembers[index][field] = value;
      setDetails({ ...details, members: updatedMembers });
    } else {
      setDetails({ ...details, [name]: value });
    }
  };

  const handleValidation = () => {
    const membersFilled = details.members.every(
      (member) => member.name !== "" && member.registrationNumber !== ""
    );
    setIsValid(details.teamName !== "" && membersFilled);
  };

  useEffect(() => {
    handleValidation();
  }, [details]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3080/api/v1/hackathon/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            teamName: details.teamName,
            members: details.members,
            github:details.github
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register team");
      }

      const result = await response.json();

      if (!result.success) {
        toast.error(result.msg);
      } else {
        toast.success("Team Registered Successfully");
        navigate("/hackathonpage");
      }
    } catch (error) {
      console.error("Error registering team:", error);
      toast.error("Failed to register team");
    } finally {
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
            id="teamName"
            label="Team Name"
            name="teamName"
            autoComplete="teamName"
            autoFocus
            onChange={handleChange}
            value={details.teamName}
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="github"
            label="Git Hub Link"
            name="github"
            autoComplete="github"
            autoFocus
            onChange={handleChange}
            value={details.github}
          />
          {[0, 1, 2].map((index) => (
            <div key={index}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name={`memberName${index}`}
                label={`Member ${index + 1} Name`}
                onChange={handleChange}
                inputProps={{ "data-index": index, name: `memberName${index}` }}
                value={details.members[index].name}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name={`memberRegNo${index}`}
                label={`Member ${index + 1} Registration No.`}
                onChange={handleChange}
                inputProps={{ "data-index": index, name: `memberRegNo${index}` }}
                value={details.members[index].registrationNumber}
              />
            </div>
          ))}
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            disabled={!isValid || loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Register For GDSC 2024 Hackathon"
            )}
          </StyledButton>
          
        </StyledForm>
      </StyledBox>
    </StyledContainer>
  );
};

export default Signup;
