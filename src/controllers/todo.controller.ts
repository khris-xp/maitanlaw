import { Elysia, t } from 'elysia';
import { UpdateQuery } from 'mongoose';
import todoSchema from '../entities/todo.schema';
import { ITodo } from '../types/todo.type';

export const todoController = new Elysia()
  .get('/todos', async () => {
    return await todoSchema.find();
  })
  .get('/todos/:id', async (req) => {
    return await todoSchema.findById(req.params.id);
  })
  .post('/todos', async (req) => {
    const todo = new todoSchema(req.body as ITodo);
    return await todo.save();
  })
  .put('/todos/:id', async (req) => {
    return await todoSchema.findByIdAndUpdate(
      req.params.id,
      req.body as UpdateQuery<ITodo>,
      {
        new: true,
      }
    );
  })
  .delete('/todos/:id', async (req) => {
    return await todoSchema.findByIdAndDelete(req.params.id);
  });