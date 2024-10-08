
import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  Divider,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Container, Typography } from '@mui/material'; // Material-UI components

import logo from "../assets/gdscnitjsr_logo.svg"; // Import the logo file

const HackathonPage = () => {
  // State to manage active tab and modal
  const [activeTab, setActiveTab] = useState('overview');
  const [modalContent, setModalContent] = useState({ isOpen: false, title: '', description: '' });
const [backgroundColor,setbackground]=useState("")
  // Content for each tab
  const tabContents = {
    overview: (
      <>
        <Heading as="h2" size="lg" mt={6} mb={4}>
          <strong>Event Overview</strong>
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Text>
              <strong>Duration:</strong> 4 Days
            </Text>
            <Text>
              <strong>Team Size:</strong> 3 Members per Team
            </Text>
            <Text>
              <strong>Registration:</strong> Open to all second year students with a passion for technology and innovation.
            </Text>
            <Text>
              <strong>Prizes:</strong> Each winning team for the problem statements will receive ₹2400.
            </Text>
            <Text>
              <strong>Submission:</strong> Projects must be submitted with a GitHub link.
            </Text>
          </GridItem>
          <GridItem>
            <Text>
              <strong>Event Schedule:</strong>
            </Text>
            <Text>
              Day 1: Registration and Problem Statement Release
            </Text>
            <Text>
              Day 2-6: Hackathon (Development Phase)
            </Text>
            <Text>
              Day 7: Final Submissions, Interviews, and Awards
            </Text>
          </GridItem>
        </Grid>
      </>
    ),
    problems: (
      <>
        <Heading as="h1" size="lg" mt={6} mb={4}>
          <strong>Problem Statements</strong>
        </Heading>
       
        <ol><li><Box>
           
           <Heading as="h2" size="md">
           <strong>Problem Statement 1: Project Showcase Website</strong>  
           </Heading>
           <Text>
             Create a web application where users can showcase their
             projects across various domains such as Machine Learning (ML),
             Artificial Intelligence (AI), Web Development, Android
             Development, etc.
           </Text>
           <Link onClick={() => handleModalOpen("Problem Statement 1", modalDescriptions.problem1)}><strong>Read More...</strong></Link>
         </Box></li>
         <br />
         <br />
         <li>    <Box>
            <Heading as="h3" size="md">
             <strong>Problem Statement 2: Event Archive Website</strong> 
            </Heading>
            <Text>
              Develop a comprehensive website showcasing the photos, videos,
              and posts of a particular event organized by GDSC.
            </Text>
            <Link onClick={() => handleModalOpen("Problem Statement 2", modalDescriptions.problem2)} ><strong >Read More...</strong></Link>
          </Box></li></ol>
          
      
    
      </>
    ),
    participate: (
      <>
        <Heading as="h2" size="lg" mt={6} mb={4}>
        <strong>How to Participate</strong>
        </Heading>
        <VStack align="start" spacing={4}>
          <Text>
            <strong>Register</strong>: Form a team of 3 members and register on the GDSC NIT
            Jamshedpur website.
          </Text>
          <Text>
            <strong>Receive Problem Statement:</strong> Problem statements will be assigned to
            registered teams.
          </Text>
          <Text>
           <strong> Hackathon Phase:</strong> Develop your solution using the specified
            guidelines.
          </Text>
          <Text>
            <strong>Submission: </strong>Submit your project with a GitHub link and any additional
            required documentation.
          </Text>
          <Text>
            <strong>Interviews:</strong> Shortlisted teams will be invited for an interview to
            present and discuss their projects.
          </Text>
          <Text>
            <strong>Awards:</strong> Winners will be selected for each problem statement and
            awarded ₹2400 per winning team.
          </Text>
        </VStack>
      </>
    ),
    benefits: (
      <>
        <Heading as="h2" size="lg" mt={6} mb={4}>
        <strong>Benefits of Participation</strong>
        </Heading>
        <VStack align="center" spacing={4}>
          <Text>
            Gain hands-on experience in web development and design.
          </Text>
          <Text>
            Showcase your skills to industry experts and potential employers.
          </Text>
          <Text>
            Network with peers and professionals in the tech community.
          </Text>
          <Text>
            Win exciting prizes and recognition for your innovative solutions.
          </Text>
        </VStack>
      </>
    ),
  };

  // Modal descriptions for "Read More" links
  const modalDescriptions = {
    problem1: `Create a web application where users can showcase their projects across various domains such as Machine Learning (ML), Artificial Intelligence (AI), Web Development, Android Development, etc. The platform should allow users to upload multiple images and videos related to their project, along with descriptive text. Additionally, users should be able to upload their project's code for others to explore. The overall theme and user interface should be inspired by Google Developer Student Clubs (GDSC), promoting a clean, modern, and user-friendly design. """Features and Functionalities:

User Registration and Authentication,
Project Upload with Images, Videos, and Code,
Project Viewing and Filtering,
Responsive Design"""
`,
   
    problem2: `Develop a comprehensive website showcasing the photos, videos, and posts of a particular event organized by GDSC. The website should embody the GDSC theme, reflecting innovation, community spirit, and technological excellence. The website will serve as an archive for all media related to the event, including a gallery of photos, a library of event videos, and blog-style posts summarizing key discussions and outcomes of sessions.
    """Key Requirements:

GDSC Theme Integration,
User-Friendly Navigation,
Responsive Design"""`,
  };

  // Function to handle modal open
  const handleModalOpen = (title, description) => {
    setbackground("black")
    setModalContent({ isOpen: true, title, description });
  };

  // Function to handle modal close
  const handleModalClose = () => {
    setbackground("")
    setModalContent({ isOpen: false, title: '', description: '' });
  };

  return (
    <Container maxWidth="xl" style={{"backgroundColor":{backgroundColor}}}>
      <Box py={[4, 8]}>
        {/* Logo Section */}
        <Typography align="center" variant="h4" gutterBottom>
          <img src={logo} alt="Google Logo" style={{ width: "200px" }} />
        </Typography>

        {/* Main Content */}
        <Heading as="h1" size="xl" mb={4}>
        <strong>GDSC NIT Jamshedpur Hackathon 2024</strong>
        </Heading>
        <VStack align="center" spacing={6} mb={8}>
          <Text>
            Welcome to the GDSC NIT Jamshedpur Hackathon 2024! Join us for an
            unforgettable experience of creativity, collaboration, and coding
            excellence.
          </Text>
          <Divider />
          {/* Tabs */}
          <Box mt={6} mb={4}>
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
              <Box textAlign="center" py={2} borderBottom={activeTab === 'overview' ? '2px solid #3182CE' : 'none'}>
                <Link onClick={() => setActiveTab('overview')} fontWeight={activeTab === 'overview' ? 'bold' : 'normal'} color={activeTab === 'overview' ? '#3182CE' : 'inherit'}>
                <strong> Event Overview</strong> 
                </Link>
              </Box>
              <Box textAlign="center" py={2} borderBottom={activeTab === 'problems' ? '2px solid #3182CE' : 'none'}>
                <Link onClick={() => setActiveTab('problems')} fontWeight={activeTab === 'problems' ? 'bold' : 'normal'} color={activeTab === 'problems' ? '#3182CE' : 'inherit'}>
                 <strong> Problem Statements</strong>
                </Link>
              </Box>
              <Box textAlign="center" py={2} borderBottom={activeTab === 'participate' ? '2px solid #3182CE' : 'none'}>
                <Link onClick={() => setActiveTab('participate')} fontWeight={activeTab === 'participate' ? 'bold' : 'normal'} color={activeTab === 'participate' ? '#3182CE' : 'inherit'}>
                  <strong>How to Participate</strong>
                </Link>
              </Box>
              <Box textAlign="center" py={2} borderBottom={activeTab === 'benefits' ? '2px solid #3182CE' : 'none'}>
                <Link onClick={() => setActiveTab('benefits')} fontWeight={activeTab === 'benefits' ? 'bold' : 'normal'} color={activeTab === 'benefits' ? '#3182CE' : 'inherit'}>
                  <strong>Benefits</strong>
                </Link>
              </Box>
            </Grid>
          </Box>
          {/* Render active tab content */}
          {tabContents[activeTab]}
        </VStack>
      </Box>

      {/* Modal for "Read More" links */}
      <Modal isOpen={modalContent.isOpen} onClose={handleModalClose} size="xl" >
        <ModalOverlay />
        <ModalContent bg="grey" p={4} boxShadow="lg" borderRadius="md">
          <ModalHeader fontWeight="bold">{modalContent.title}</ModalHeader>
          <ModalCloseButton color={"red"} />
          <ModalBody>
            <Text color={"blue"}>{modalContent.description}</Text>
            <br />
            <strong color='red'>MERN will be Preffered</strong>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default HackathonPage;