import mongoose, { Schema, Document } from "mongoose";

// interface for Message
export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
});

// interface for User
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is requried"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is requried"],
    unique: true,
    match: [/.+\@.+\..+/, "Please use a valid email"],
  },
  password: { type: String, required: [true, "Password is requried"] },
  verifyCode: { type: String, required: [true, "Verify code is requried"] },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify code expiry is requried"],
  },
  isVerified: { type: Boolean, default: false },
  isAcceptingMessage: { type: Boolean, default: true },
  messages: [MessageSchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);
// const MessageModel =
//   (mongoose.models.Message as mongoose.Model<Message>) ||
//   mongoose.model("Message", MessageSchema);

export default UserModel;