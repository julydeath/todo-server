import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    task: { type: String, required: true },
    // id: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
