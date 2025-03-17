import { Request, Response } from 'express';
import { ToDosService } from './todo.service';
import { ITodoQuery } from '../types/todo.type';
import { ToDoValidator } from './todo.validator';

export class ToDoController {


  // GET all ToDos
  static async getToDos(req: Request, res: Response) {

    try {
      const query = req.query as ITodoQuery;
      const data = await ToDosService.findAllToDos(query);
      res.status(200).json({
        status: 'success',
        pagination: data.pagination,
        data: data.ToDos,
      });
    } catch (err) {
      res
        .status(500)
        .json({ status: 'error', message: (err as Error).message });
    }
  }

  // GET a ToDo
static  async getToDo(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({
          status: 'error',
          message: 'ToDo ID is required',
        });
        return;
      }

      const ToDo = await ToDosService.findToDo(req.params.id);

      if (!ToDo) {
        res.status(404).json({
          status: 'error',
          message: 'ToDo not found',
        });
        return;
      }

      res.status(200).json({
        status: 'success',
        data: ToDo,
      });
    } catch (err) {
      res
        .status(500)
        .json({ status: 'error', message: (err as Error).message });
    }
  }

  // CREATE ToDo
  static async createToDo(req: Request, res: Response) {
    console.log('Create ToDo...');
    try {
      const todo_data = req.body;

      ToDoValidator.validateForCreation(todo_data);

      const newToDo = await ToDosService.createToDo(
        todo_data
      );

      res.status(201).json({
        status: 'success',
        data: newToDo,
      });
    } catch (err) {
      res
        .status(500)
        .json({ status: 'error', message: (err as Error).message });
    }
  }

  // UPDATE ToDo
 static async updateToDo(req: Request, res: Response) {
    console.log('Update ToDo...');
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({
          status: 'error',
          message: 'ToDo ID is required',
        });
        return;
      }

      const ToDo = await ToDosService.updateToDo(
        req.params.id,
        req.body
      );

      if (!ToDo) {
        res.status(404).json({
          status: 'error',
          message: 'ToDo not found',
        });
        return;
      }

      res.status(200).json({
        status: 'success',
        data: ToDo,
      });
    } catch (err) {
      res
        .status(500)
        .json({ status: 'error', message: (err as Error).message });
    }
  }

  // DELETE ToDo
  static async deleteToDo(req: Request, res: Response) {
    console.log('Delete ToDo...');
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({
          status: 'error',
          message: 'ToDo ID is required',
        });
        return;
      }

      const ToDo = await ToDosService.deleteToDo(req.params.id);

      if (!ToDo) {
        res.status(404).json({
          status: 'error',
          message: 'ToDo not found',
        });
        return;
      }

      res.status(204).json({
        status: 'success',
        data: null,
      });
    } catch (err) {
      res
        .status(500)
        .json({ status: 'error', message: (err as Error).message });
    }
  }
}
