import { Model } from 'mongoose';
import { Document } from 'mongoose';
import { Schema } from 'mongoose';
import mongoose from 'mongoose';
import { IToDo } from '../types/todo.type';

export interface IToDoModel extends Document, IToDo {}

const ToDoSchema: Schema<IToDo> = new Schema<IToDo>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const ToDoModel: Model<IToDo> = mongoose.model<IToDo>(
  'ToDo',
  ToDoSchema
);

export default ToDoModel;
