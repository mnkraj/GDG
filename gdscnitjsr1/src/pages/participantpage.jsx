import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  styled,
  ThemeProvider,
  createTheme
} from '@mui/material';
import logo from "../assets/gdscnitjsr_logo.svg"; // Assuming the path to your logo is correct

// Create a theme for styled components
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Adjust as needed
      dark: '#004ba0', // Adjust as needed
    },
    secondary: {
      main: '#f44336', // Adjust as needed
    },
  },
});

// Styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

const HackathonTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch data from backend API
    axios.get('https://gdg-rho.vercel.app/api/v1/hackathon/get')
      .then(response => {
        setTeams(response.data.data); // Assuming response.data.data contains the array of teams
      })
      .catch(error => {
        console.error('Error fetching teams:', error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} sx={{ marginBottom: 4, padding: 2 }}>
        <Typography align="center" variant="h4" gutterBottom>
          <img src={logo} alt="GDSC NIT JSR Logo" style={{ width: "200px", marginBottom: "16px" }} />
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Team Name</StyledTableCell>
              
              <StyledTableCell align="center">ProblemStatement</StyledTableCell>
              <StyledTableCell align="center">GitHub</StyledTableCell>
              <StyledTableCell align="center">Members</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {teams.map((team, index) => (
              <TableRow key={index}>
                <TableCell align="center">{team.teamName}</TableCell>
                <TableCell align="center">{team.problemStatement}</TableCell>
                <TableCell align="center"><a href={team.github}>{team.github}</a></TableCell>
                <TableCell>
                  <Typography component="div">
                    <Box sx={{ maxHeight: 200, overflow: 'auto', textAlign: 'center' }}>
                      <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {team.members.map((member, idx) => (
                          <li key={idx} style={{ marginBottom: '8px' }}>
                            {member.name} ({member.registrationNumber}) 
                          </li>
                        ))}
                      </ul>
                    </Box>
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default HackathonTable;
