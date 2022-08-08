import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    answer: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  },
);

const Question = mongoose.model('Question', QuestionSchema);

export default Question;
