const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const Signup = require("./routes/Signup");
const Login = require("./routes/Login");
const OTP = require("./routes/otp");
const AddEvent = require("./routes/Addevents");
const AuthRoute = require("./routes/authRoute");
const Displayevents = require("./routes/Displayevents");
const Members = require("./routes/Displaymembers");
const verifytoken = require("./routes/verifytoken");
const bodyParser = require("body-parser");
const Delete = require("./routes/Delete");
const postRoutes = require("./routes/post.route");
const Hackathon = require("./routes/hackathon.js");
const Admin = require("./models/Admin");
const app = express();
app.use(
  cors({
    origin: "*",

    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
// app.use('/userImages',express.static('userImages'))
// app.use('/thumbnail',express.static('thumbnail'))

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// app.use(express.static("public"))
dotenv.config();
// dotenv.config({ path: "./config/config.env" });
connectDB();
// const uploadUserImage=multer({
//   storage:multer.diskStorage({
//     destination(req,file,cb){
//       cb(null,path.join(__dirname,'userImages/'));
//     },
//     filename(req,file,cb){
//       cb(null,`${new Date().getTime()}_${file.originalname}`);
//     }
//   })
// })

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'userImages/')
//   },
//   filename: function (req, file, cb) {
//     cb(null,`${new Date().getTime()}_${file.originalname}`);
//   }
// })

// const upload = multer({ storage: storage })

// const storage1 = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'thumbnail/')
//   },
//   filename: function (req, file, cb) {
//     cb(null,`${new Date().getTime()}_${file.originalname}`);
//   }
// })

// const upload1 = multer({ storage: storage1 })

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

//app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
// app.use("/api/user", require("./routes/authRoute"));
app.use("/api/user", AuthRoute);
app.use("/api/v1/", Signup);
app.use("/api/v1/", Login);
app.use("/api/v1", OTP);
app.use("/api/v1/", Displayevents);
app.use("/api/v1/", Members);
app.use("/api/v1/", verifytoken);
app.use("/api/v1/", AddEvent);
app.use("/api/v1/hackathon", Hackathon);
app.use("/api/v1/", Delete);
// app.use("/api/search", tokenCheck, searchRouter);
app.use("/api/post", postRoutes);
app.get("/retriever", async (req, res) => {
  try {
    const user = await Admin.find({});
    return res.json({ admins: user, success: true });
  } catch (error) {
    return res.json({ msg: "something error in server", success: false });
  }
});
// app.use("/api/upload", tokenCheck, require("./routes/uploadRoutes"));
//app.use("/api/upload", require("./routes/uploadRoutes"));
app.listen(3080, () => {
  console.log("Server is running on port");
});
