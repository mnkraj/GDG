import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const registrations = localStorage.getItem("registrationArray");
    if (!registrations || registrations === null) {
      navigate("/mml");
    } else {
      setFormData({ ...formData, registrations: registrations });
    }

    const registration = localStorage.getItem("registration");
    if (registration == null || !registration) {
      navigate("/mml");
    } else {
      setFormData({ ...formData, registration: registration });
    }
  }, []);
  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please select an image");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image upload failed");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image upload failed");
      setImageUploadProgress(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://gdg-rho.vercel.app/api/post/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      console.log(data);
      console.log(data.success);
      if (!data.success) {
        setPublishError(data.msg);
        return;
      }
      if (!res.ok) {
        setPublishError(data.msg);
        return;
      }
      setPublishError(null);
      navigate(`/post/${data.slug}`);
    } catch (error) {
      setPublishError("something went wrong");
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <Typography variant="h3" align="center" gutterBottom>
        Create Blogs
      </Typography>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8}>
            <TextField
              variant="outlined"
              label="Title"
              fullWidth
              required
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              variant="outlined"
              label="Category"
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              SelectProps={{ native: true }}
              required
            >
              <option value="all">All Categories</option>
              <option value="uncategorized">Uncategorized</option>
              <option value="javascript">JavaScript</option>
              <option value="reactjs">React.js</option>
              <option value="nextjs">Next.js</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="sass">Sass</option>
              <option value="less">Less</option>
              <option value="bootstrap">Bootstrap</option>
              <option value="tailwindcss">Tailwind CSS</option>
              <option value="styled-components">Styled Components</option>
              <option value="angular">Angular</option>
              <option value="vuejs">Vue.js</option>
              <option value="typescript">TypeScript</option>
              <option value="jquery">jQuery</option>
              <option value="nodejs">Node.js</option>
              <option value="express">Express.js</option>
              <option value="mongodb">MongoDB</option>
              <option value="mysql">MySQL</option>
              <option value="postgresql">PostgreSQL</option>
              <option value="graphql">GraphQL</option>
              <option value="firebase">Firebase</option>
              <option value="aws">AWS</option>
              <option value="azure">Microsoft Azure</option>
              <option value="google-cloud">Google Cloud Platform</option>
              <option value="docker">Docker</option>
              <option value="kubernetes">Kubernetes</option>
              <option value="jenkins">Jenkins</option>
              <option value="git">Git</option>
              <option value="github">GitHub</option>
              <option value="gitlab">GitLab</option>
              <option value="bitbucket">Bitbucket</option>
              <option value="agile">Agile Development</option>
              <option value="scrum">Scrum</option>
              <option value="kanban">Kanban</option>
              <option value="devops">DevOps</option>
              <option value="microservices">Microservices</option>
              <option value="serverless">Serverless</option>
              <option value="continuous-integration">
                Continuous Integration
              </option>
              <option value="continuous-delivery">Continuous Delivery</option>
              <option value="testing">Testing</option>
              <option value="unit-testing">Unit Testing</option>
              <option value="integration-testing">Integration Testing</option>
              <option value="end-to-end-testing">End-to-End Testing</option>
              <option value="jest">Jest</option>
              <option value="mocha">Mocha</option>
              <option value="chai">Chai</option>
              <option value="cypress">Cypress</option>
              <option value="selenium">Selenium</option>
              <option value="storybook">Storybook</option>
              <option value="storybookjs">Storybook.js</option>
              <option value="documentation">Documentation</option>
              <option value="api">APIs</option>
              <option value="rest-api">REST API</option>
              <option value="graphql-api">GraphQL API</option>
              <option value="authentication">Authentication</option>
              <option value="authorization">Authorization</option>
              <option value="oauth">OAuth</option>
              <option value="jwt">JSON Web Tokens (JWT)</option>
              <option value="encryption">Encryption</option>
              <option value="hashing">Hashing</option>
              <option value="security">Security</option>
              <option value="csrf">Cross-Site Request Forgery (CSRF)</option>
              <option value="xss">Cross-Site Scripting (XSS)</option>
              <option value="cors">Cross-Origin Resource Sharing (CORS)</option>
              <option value="ssl">SSL</option>
              <option value="https">HTTPS</option>
              <option value="networking">Networking</option>
              <option value="http">HTTP</option>
              <option value="tcp">TCP</option>
              <option value="udp">UDP</option>
              <option value="ipv4">IPv4</option>
              <option value="ipv6">IPv6</option>
              <option value="dns">DNS</option>
              <option value="api-gateway">API Gateway</option>
              <option value="cloudflare">Cloudflare</option>
              <option value="nginx">NGINX</option>
              <option value="apache">Apache</option>
              <option value="iis">Internet Information Services (IIS)</option>
              <option value="linux">Linux</option>
              <option value="ubuntu">Ubuntu</option>
              <option value="centos">CentOS</option>
              <option value="debian">Debian</option>
              <option value="redhat">Red Hat</option>
              <option value="bash">Bash</option>
              <option value="shell">Shell Scripting</option>
              <option value="windows">Windows</option>
              <option value="powershell">PowerShell</option>
              <option value="macos">macOS</option>
              <option value="ios">iOS Development</option>
              <option value="android">Android Development</option>
              <option value="flutter">Flutter</option>
              <option value="react-native">React Native</option>
              <option value="ionic">Ionic</option>
              <option value="xamarin">Xamarin</option>
              <option value="unity">Unity</option>
              <option value="game-development">Game Development</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-development">Mobile Development</option>
              <option value="cross-platform">Cross-Platform Development</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="full-stack">Full-Stack Development</option>
              <option value="database">Database</option>
              <option value="nosql">NoSQL</option>
              <option value="sql">SQL</option>
              <option value="orm">Object-Relational Mapping (ORM)</option>
              <option value="mongoose">Mongoose</option>
              <option value="sequelize">Sequelize</option>
              <option value="data-visualization">Data Visualization</option>
              <option value="d3js">D3.js</option>
              <option value="chartjs">Chart.js</option>
              <option value="highcharts">Highcharts</option>
              <option value="data-analysis">Data Analysis</option>
              <option value="machine-learning">Machine Learning</option>
            </TextField>
          </Grid>
        </Grid>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <CircularProgress value={imageUploadProgress} />
            ) : (
              "Upload Image"
            )}
          </Button>
        </div>
        {imageUploadError && <Alert severity="error">{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Publish
        </Button>
        {publishError && <Alert severity="error">{publishError}</Alert>}
      </form>
    </div>
  );
}
