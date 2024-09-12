import { model, Schema } from 'mongoose';
import { TodoStatus } from '../enum/todo.enum';
import { ITodo } from '../types/todo.type';

const schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: [TodoStatus.ACTIVE, TodoStatus.INACTIVE, TodoStatus.DELETED],
      default: TodoStatus.ACTIVE,
    },
  },
  {
    timestamps: true,
  }
);

export default model<ITodo>('user', schema);
