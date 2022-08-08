import { json, Request, Response } from 'express';
import Question from '../models/question.model';

export const index = async (req: Request, res: Response) => {
  try {
    const questions = Question.find();
    return res.status(200).json(questions);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const show = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const question = Question.findOne({ _id: id });
    return res.status(200).json(question);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const store = async (req: Request, res: Response) => {
  try {
    const question = Question.create(req.body);
    return res.status(200).json(question);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const update = req.body;
  const options = { new: true };

  try {
    const question = await Question.findByIdAndUpdate(
      { _id: id },
      update,
      options,
    );
    return res.status(200).json(question);
  } catch (error: any) {
    return res.status(400).json(error);
  }
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  const options = { new: true };

  try {
    const question = await Question.findByIdAndDelete({ _id: id }, options);
    return res.status(200).json(question);
  } catch (error: any) {
    return res.status(400).json(error);
  }
};
