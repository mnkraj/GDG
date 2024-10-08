import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "tailwindcss/tailwind.css";
import { Typography } from "@mui/joy";
import logo from "../assets/gdscnitjsr_logo.svg";

function Poster() {
  const [activeButton, setActiveButton] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from posts API
    axios
      .get("https://gdg-rho.vercel.app/api/post/getposts")
      .then((response) => {
        setPosts(response.data.posts);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

    // Fetch data from displaymembers API
    axios
      .get("https://gdg-rho.vercel.app/api/v1/displaymembers")
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const filteredPosts = posts.filter((post) => {
    const categoryMatches =
      post.category.toLowerCase() === activeButton || activeButton === "all";
    const searchMatches =
      post.title.toLowerCase().includes(searchText.toLowerCase()) ||
      post.slug.toLowerCase().includes(searchText.toLowerCase()) ||
      post.content.toLowerCase().includes(searchText.toLowerCase());
    return categoryMatches && searchMatches;
  });

  const getMemberDetails = (registration) => {
    return members.find((member) => member.registration === registration);
  };

  if (loading) {
    return <div className="container mx-auto p-6">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-6">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="Google Logo"
          style={{ width: "320px", marginBottom: "40px" }}
        />
      </Typography>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search blog..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="p-2 border border-gray-300 rounded-md text-black bg-white focus:outline-none focus:border-blue-500"
          />
          <div className="absolute top-0 right-0 mt-2 mr-3 text-gray-600">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <Link to="/createpost">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Create Blog
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPosts.map((post) => {
          const member = getMemberDetails(post.userId);
          return (
            <div
              key={post._id}
              className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <Link to={`/post/${post.slug}`} className="block">
                <img
                  className="w-full h-48 object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <div className="p-6">
                  <div className="font-bold text-xl mb-2">{post.title}</div>
                  <div className="mt-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      #{post.category}
                    </span>
                  </div>
                </div>
              </Link>
              {member && (
                <div className="flex items-center justify-between p-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={member.imageurl}
                    alt={member.name}
                  />
                  <div className="ml-4">
                    <div className="text-sm font-semibold">{member.name}</div>
                    <div className="text-sm">{member.branch}</div>
                    <div className="text-sm">{member.year}</div>
                    <div className="flex space-x-2 mt-1">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin text-blue-700"></i>
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram text-pink-600"></i>
                        </a>
                      )}
                      {member.facebook && (
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook text-blue-500"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <Link
                to={`/post/${post.slug}`}
                className="block text-center bg-blue-500 text-white py-2 hover:bg-blue-600 rounded-b-xl"
              >
                View Full Blog
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Poster;
