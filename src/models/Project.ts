import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    technologies: {
      type: Array,
      required: true,
      default: []
    },
    repository: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    photos: {
      type: Array,
      required: true,
      default: []
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

export default model('Project', schema);
