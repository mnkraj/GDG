import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import Spinner from "./Spinner";
import Navbar1 from "../components/newnavbar";
import "./Addmembers.css"; // Import the custom CSS file

const Addevents = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [details, setDetails] = useState({
    title: "",
    category: "workshop",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
    color: "",
  });
  const [res, setRes] = useState(null); // Declare the res state

  const authenticate = async () => {
    const value = localStorage.getItem("email");
    if (!value) {
      navigate("/login");
    } else {
      const ans = await axios.post(
        "http://localhost:3080/api/user/authenticate",
        { email: value }
      );
      if (!ans.data.success) {
        navigate("/login");
      }
    }
  };

  const handleUploadImage = (e) => {
    const imgfile = e.target.files[0];
    setThumbnail(imgfile);
    if (imgfile) {
      const reader = new FileReader();
      reader.readAsDataURL(imgfile);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("title", details.title);
    formData.append("category", details.category);
    formData.append("date", details.date);
    formData.append("startTime", details.startTime);
    formData.append("endTime", details.endTime);
    formData.append("description", details.description);
    formData.append("thumbnail", thumbnail);
    formData.append("color", details.color);
    formData.append("image", image);

    const response = await axios.post(
      "http://localhost:3080/api/v1/addevents",
      formData,
      { headers: { "Content-Type": "application/json" } }
    );

    if (!response.data.success) {
      toast.error(response.data.message);
    } else {
      toast.success("Event Added Successfully");
    }
    setRes(response.data); // Update the res state
    setLoading(false);
  };

  return (
    <>
      {loading && <Spinner />}
      <Navbar1 />
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="form-container mb-5">
          <div className="form-header">
            <p className="fs-4">Add Event</p>
          </div>
          <div className="form-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category:
                </label>
                <select
                  id="category"
                  name="category"
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="workshop">Workshop</option>
                  <option value="hackathon">Hackathon</option>
                  <option value="seminar">Seminar</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Choose Date:
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="starttime" className="form-label">
                  Start Time:
                </label>
                <input
                  type="time"
                  id="starttime"
                  name="startTime"
                  required
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="endtime" className="form-label">
                  End Time:
                </label>
                <input
                  type="time"
                  id="endtime"
                  name="endTime"
                  required
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Link For Event:
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="7"
                  onChange={handleChange}
                  placeholder="LINK"
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="thumbnail" className="form-label">
                  Thumbnail:
                </label>
                <input
                  type="file"
                  id="thumbnail"
                  accept="image/*"
                  onChange={handleUploadImage}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="color" className="form-label">
                  Color:
                </label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  required
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary bg-blue-500"
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Event"}
              </button>
            </form>
            {res && res.thumbnailurl && (
              <>
                <img src={res.thumbnailurl} alt="Event Thumbnail" className="img-fluid mt-3" />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Addevents;
