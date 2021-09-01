const crypto = require('crypto')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const UserSchema = new Schema({
    username : {
        type : String,
        required : [true, "Please provide a username"]
    },
    email : {
        type : String,
        required : [true, 'Please provide an email'],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
          ]
    },
    password :{
        type : String,
        required : [true, "PLease add a password"],
        minlength: 6,
        //select = whenever u select user 
        // do u want it with password
        select: false  
    }, 
    resetPasswordToken : String,
    resetPasswordExpire : Date
})

//before the item will be saved 
UserSchema.pre("save", async function(next){
    if(!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
    //next to save it, it's a middleware
})

UserSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

UserSchema.methods.getSignedJwtToken = function () {
    // return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    //     expiresIn : process.env.JWT_EXPIRE,
    // })

    /*added part ------------------------------------------*/
    const user = User.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { 
            expiresIn : process.env.JWT_EXPIRE })
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}


UserSchema.methods.getResetPasswordToken = function() {
     const resetToken = crypto.randomBytes(20).toString('hex')

     // Hash token (private key) and save to database
     this.resetPasswordToken = crypto
          .createHash('sha256')
          .update(resetToken)
          .digest('hex')

     // Set token expire date
     this.resetPasswordExpire = Date.now() + 10 * (60*100) // 10 mins

     //save to db
     return resetToken
}

const User = mongoose.model('User', UserSchema)

module.exports = User