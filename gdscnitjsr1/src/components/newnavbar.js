// Navbar.js

import React, { useEffect, useState } from "react";

import { Link as AnchorLink, Link, NavLink } from "react-router-dom";
import LOGO from "../img/GDSC Logo chapter lockup template 1.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-scroll";
function Navbar1() {


  let [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

const [islogin,setlogin]=useState(false)

  const authenticate = async () => {
    const value = localStorage.getItem("email");
    if (!value) {
  setlogin(false)
      // navigate("/login");
    } else {
      const ans = await axios.post(
        "https://gdg-rho.vercel.app/api/user/authenticate",
        {
          email: value,
        }
      );

      if (ans && ans.data.success) {
        setlogin(true)
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

const handlelogout = ()=>{
   localStorage.clear("email")
   navigate("/login")
}





  return (
    <div className="shadow-md w-full relative top-0 left-0 z-[1000000] Navbar">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 z-[10000]">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800"
        >
          <img src={LOGO} className="w-[70%] sm:w-auto" alt="Logo" />
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
        </ul>
      </div>
    </div>
  );
}

export default Navbar1;
