import { IToDo } from "../types/todo.type";


export class ToDoValidator{
  static  validateForCreation (data: IToDo) {
        if (!data.title) {
          throw new Error('Title is required');
        }
        if (!data.description) {
          throw new Error('Description is required');
        }
      }
}

