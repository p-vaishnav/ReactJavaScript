const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const userSchema = new Schema({
     name:{
         type:String,
         required:true,
         maxlength:32,
         trim:true
     },
     lastname:{
         type:String,
         maxlength:32,
         trim:true
     },

     userInfo:{
        type:String,
        trim:true
     },

     //TODO:come back here
    encry_password:{
         type:String,
         required:true,
        //  trim:true
     },

     salt:String,
     
     role:{
        type:Number,
        default:0
     },
     
     purchases:{
         type:Array,
         default:[],
     }
});

userSchema.virtual('password')
        .set(function(password){
            this._password = password;
            this.salt = uuidv4();
            this.encry_password = this.securepassword(password);
        })
        .get(function(){
            return this._password;
        });

// userSchema.methods({
//     authenticate:function(){
//         return this.encry_password === this.securepassword(password);
//     },
    // securepassword : function(plainPassword){
    //         if(!plainPassword){
    //             return "";
    //         }//if

    //         else{
    //             try{
    //                 return crypto.createHmac('sha256', this.salt).update(plainPassword).digest('hex');
    //             }//try
                
    //             catch(err){

    //             }//catch
    //         }
    // }
// });

userSchema.methods.authenticate=function(){
            return this.encry_password === this.securepassword(password);
}

userSchema.methods.securepassword = function(plainPassword){
    if(!plainPassword){
        return "";
    }//if

    else{
        try{
            return crypto.createHmac('sha256', this.salt).update(plainPassword).digest('hex');
        }//try
        
        catch(err){

        }//catch
    }
}

module.exports = mongoose.model("User",userSchema);

/*const userSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});*/