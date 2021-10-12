import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    path: {
      type: String,
      require: true,
      trim: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

export default model('Photo', schema);
