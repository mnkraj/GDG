const mongoose = require("mongoose");
const { Schema } = mongoose;
const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  color:{
    type:String,
    required:true
  },
  date: {
    type: Date,
    require: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    //required: true,
  },
  thumbnailurl:{
    type: String,
  }
});
module.exports = mongoose.model("Event", EventSchema);
