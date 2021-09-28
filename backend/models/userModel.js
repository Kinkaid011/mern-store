import mongoose from 'mongoose';

//creating the schema to use for the model
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
      //unique because you don't want more than one person with the same email address
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
);

//creating the model
const User = mongoose.model('User', userSchema);

export default User;
