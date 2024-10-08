import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Navbar1 from "../components/newnavbar";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Addmembers.css"; // Import the custom CSS file

export const Addmembers = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setname] = useState("");
  const [registration, setregistration] = useState("");
  const [branch, setbranch] = useState("");
  const [year, setyear] = useState("");
  const [team, setteam] = useState("");
  const [teamType, setteamtype] = useState("core team member");
  const [profilePhoto, setFile] = useState();
  const [image, setImage] = useState();
  const [resp, setres] = useState();
  const [auth, setauth] = useState(false);
  const [github, setgit] = useState("");
  const [mail, setmail] = useState("");
  const [linkedin, setlinked] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [x, setX] = useState("");

  const authenticate = async () => {
    const value = localStorage.getItem("email");

    if (!value) {
      setauth(false);
      navigate("/login");
    } else {
      const ans = await axios.post(
        "https://gdg-rho.vercel.app/api/user/authenticate",
        { email: value }
      );

      if (ans && ans.data.success) {
        setauth(true);
        console.log(value);
        console.log(ans);
      } else {
        setauth(false);
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    authenticate();
  }, [localStorage.getItem("email")]);

  const handleChangename = (e) => {
    setname(e.target.value);
  };

  const handleChangeregistraion = (e) => {
    setregistration(e.target.value);
  };

  const handleChangebranch = (e) => {
    setbranch(e.target.value);
  };

  const handleChangeteam = (e) => {
    setteam(e.target.value);
  };

  const handleChangeteamtype = (e) => {
    setteamtype(e.target.value);
  };

  const handleChangeyear = (e) => {
    setyear(e.target.value);
  };

  const handleUploadImage = (e) => {
    const imgfile = e.target.files[0];
    setFile(imgfile);
    if (imgfile) {
      const reader = new FileReader();
      reader.readAsDataURL(imgfile);
      reader.onloadend = (e) => {
        setImage(reader.result);
      };
    }
  };

  const handleChangeInstagram = (e) => {
    setInstagram(e.target.value);
  };

  const handleChangeFacebook = (e) => {
    setFacebook(e.target.value);
  };

  const handleChangeX = (e) => {
    setX(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (auth === false) {
      alert("not authenticated");
      setLoading(false);
      navigate("/login");
    }
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("registration", registration);
      formData.append("team", team);
      formData.append("teamType", teamType);
      formData.append("year", year);
      formData.append("branch", branch);
      formData.append("profilePhoto", profilePhoto);
      formData.append("image", image);
      formData.append("github", github);
      formData.append("mail", mail);
      formData.append("linkedin", linkedin);
      formData.append("instagram", instagram);
      formData.append("facebook", facebook);
      formData.append("x", x);

      const res = await axios.post(
        "https://gdg-rho.vercel.app/api/user/addmember",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res && res.data.success) {
        setres(res);
        toast.success(res.data.msg);
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.error("Error during member addition:", error);
      toast.error("Error adding member");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar1 />
      {loading && <Spinner />}
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="form-container mb-5">
          <div className="form-header">
            <p className="fs-4">Add Member</p>
          </div>
          <div className="form-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={handleChangename}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registration" className="form-label">
                  Registration No.:
                </label>
                <input
                  type="text"
                  id="registration"
                  name="registration"
                  value={registration}
                  onChange={handleChangeregistraion}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="branch" className="form-label">
                  Branch:
                </label>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  value={branch}
                  onChange={handleChangebranch}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="linkedin" className="form-label">
                  LinkedIn URL:
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={linkedin}
                  required
                  onChange={(e) => {
                    setlinked(e.target.value);
                  }}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="github" className="form-label">
                  GitHub URL:
                </label>
                <input
                  type="url"
                  id="github"
                  name="github"
                  required
                  value={github}
                  onChange={(e) => {
                    setgit(e.target.value);
                  }}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mail" className="form-label">
                  Email ID:
                </label>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  required
                  value={mail}
                  onChange={(e) => {
                    setmail(e.target.value);
                  }}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="year" className="form-label">
                  Year:
                </label>
                <input
                  type="text"
                  id="year"
                  name="year"
                  value={year}
                  onChange={handleChangeyear}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="team" className="form-label">
                  Position:
                </label>
                <input
                  type="text"
                  id="team"
                  name="team"
                  value={team}
                  onChange={handleChangeteam}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="profilePhoto" className="form-label">
                  Profile Photo:
                </label>
                <input
                  type="file"
                  id="profilePhoto"
                  accept="image/*"
                  name="profilePhoto"
                  onChange={handleUploadImage}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="instagram" className="form-label">
                  Instagram URL:
                </label>
                <input
                  type="url"
                  id="instagram"
                  name="instagram"
                  value={instagram}
                  onChange={handleChangeInstagram}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="facebook" className="form-label">
                  Facebook URL:
                </label>
                <input
                  type="url"
                  id="facebook"
                  name="facebook"
                  value={facebook}
                  onChange={handleChangeFacebook}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="x" className="form-label">
                  X:
                </label>
                <input
                  type="text"
                  id="x"
                  name="x"
                  value={x}
                  onChange={handleChangeX}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="teamType" className="form-label">
                  Team Type:
                </label>
                <select
                  id="teamType"
                  name="teamType"
                  value={teamType}
                  onChange={handleChangeteamtype}
                  className="form-select"
                >
                  <option value="core team member">Core Team Member</option>
                  <option value="lead">Lead</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary bg-blue-500"
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Member"}
              </button>
            </form>
            {resp &&
              resp.data &&
              resp.data.newUser &&
              resp.data.newUser.imageurl && (
                <>
                  <img
                    src={resp.data.newUser.imageurl}
                    alt="User"
                    className="img-fluid mt-3"
                  />
                  {console.log(resp.data.newUser.imageurl)}
                </>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Addmembers;
