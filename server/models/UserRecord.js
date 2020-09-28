const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UserRecordSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    userName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
      required: false,
    },
    profilePic: {
      type: String,
      required: false,
    },
    emailedIsVerified: {
      type: Boolean,
      required: false,
    },
    emailVerification: {
      type: String,
      required: false,
    },
    resetPassword: {
      type: String,
      required: false,
    },
    friends: [
      {
        type: String,
        required: true,
      },
    ],
    friendRequests: [
      {
        type: String,
        required: true,
      },
    ],
    timeCreated: {
      type: String,
      required: true,
    },
  },
  { collection: "Users" }
);

module.exports = mongoose.model("UserRecord", UserRecordSchema);
