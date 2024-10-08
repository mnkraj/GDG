const mongoose = require("mongoose")
const {Schema} = mongoose;
const AdminSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique: true,
        validate: {
            validator: function(value) {
                return value.endsWith('@nitjsr.ac.in');
            },
            message: props => `${props.value} is not a valid email ending with @nitjsr.ac.in!`
        }
    },
    password:{
        type : String,
        required : true
    },
    verificationToken:{
        type : String
    },
    verified : {
        type : Boolean,
        default : false
    }
})
module.exports = mongoose.model("admin",AdminSchema);