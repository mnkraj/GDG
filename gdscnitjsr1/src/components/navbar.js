// Navbar.js

import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as AnchorLink, NavLink } from "react-router-dom";
import LOGO from "../img/GDSC Logo chapter lockup template 1.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-scroll";
function Navbar() {
  let Links = [
    { name: "About Us", link: "about" },
    { name: "Our Team", link: "our-team" },
    { name: "Events", link: "events" },
    { name: "Socials", link: "socials" },
    {
      name: "Join Us",
      link: "join-us",
      url: "https://gdsc.community.dev/national-institute-of-technology-nit-jamshedpur/",
    },
  ];

  let [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

  const [islogin, setlogin] = useState(false);
  const [isMember, setMember] = useState(false);
  useEffect(() => {
    const registrations = localStorage.getItem("registrationArray");
    const registration = localStorage.getItem("registration");
    if (
      !registration ||
      registration == null ||
      !registrations.includes(registration)
    ) {
      console.log("registrations.includes(registration)");
      setMember(false);
    } else if (registrations.includes(registration)) {
      setMember(true);
    }
  }, []);
  const authenticate = async () => {
    const value = localStorage.getItem("email");

    if (!value) {
      setlogin(false);
      // navigate("/login");
    } else {
      const ans = await axios.post(
        "http://localhost:3080/api/user/authenticate",
        {
          email: value,
        }
      );

      if (ans && ans.data.success) {
        setlogin(true);
        console.log(value);
        console.log(ans);
      } else {
        // navigate("/login");
      }
    }
  };
  useEffect(() => {
    authenticate();
  }, [localStorage.getItem("email")]);

  const handlelogout = () => {
    localStorage.clear("email");
    window.location.reload();
  };

  return (
    <div className="shadow-md w-full relative top-0 left-0 z-[9999] h-[20px]] Navbar ">
      <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7 z-[10000]">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <img src={LOGO} className="w-[80%] sm:w-auto" alt="Logo" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              {link.url ? (
                <AnchorLink
                  to={link.url}
                  className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
                >
                  {link.name}
                </AnchorLink>
              ) : (
                <ScrollLink
                  to={link.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleLinkClick}
                  className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              )}
            </li>
          ))}
          {!islogin && (
            <>
              {/* <li className="md:ml-8 text-xl md:my-0 my-7">
      <NavLink
        className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
        to="/signup"
        onClick={handleLinkClick}
      >
        Register
      </NavLink>
    </li> */}
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
                  to="/login"
                  onClick={handleLinkClick}
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
          {islogin && (
            <>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
                  to="/addmember"
                  onClick={handleLinkClick}
                >
                  Add Members
                </NavLink>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
                  to="/addevents"
                  onClick={handleLinkClick}
                >
                  Add Events
                </NavLink>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <Button
                  className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
                  onClick={handlelogout}
                >
                  Logout
                </Button>
              </li>
            </>
          )}
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
              to="/getposts"
              onClick={handleLinkClick}
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
