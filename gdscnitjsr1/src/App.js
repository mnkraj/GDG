import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./components/home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import EventsPage from "./pages/Events";
import { Addmembers } from "./pages/Addmembers";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import CreatePost from "./components/createpost";
import Postcontainer from "./components/postcontainer";
import Post from "./components/post";
import MemberLoginPage from "./components/Memberlogin";
import Registerforhackathon from "./pages/HackathonRegistration";
import HackathonTable from "./pages/participantpage";
import HackathonPage from "./pages/HackathonPage";
function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addevents" element={<EventsPage />} />
          <Route exact path="/addmember" element={<Addmembers />} />
          <Route exact path="/createpost" element={<CreatePost />} />
          <Route exact path="/getposts" element={<Postcontainer />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="/mml" element={<MemberLoginPage />} />
          <Route path="/hackathon" element={<Registerforhackathon />} />
          <Route path="/hackathontable" element={<HackathonTable />} />
          <Route path="/hackathonpage" element={<HackathonPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
