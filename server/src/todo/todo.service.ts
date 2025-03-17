import { IToDo, ITodoQuery } from "../types/todo.type";
import ToDoModel from "./todo.model";


export class ToDosService {

    //Getting all ToDos
    static async findAllToDos(query: ITodoQuery) {
    const { search, limit, page } = query;
    const filterObj: Record<string, any> = {};

    if (search) {
      filterObj.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    // pagination
    const _limit = limit ? +limit : 20;
    const _page = page ? +page : 1;
    const skip = (_page - 1) * _limit;
    const totalCount = await ToDoModel.countDocuments();
    const total = Math.ceil(totalCount / _limit);

    const ToDos = await ToDoModel.find(filterObj)
      .sort({ updatedAt: -1 })
      .skip(skip)
      .limit(_limit);

    return {
      ToDos,
      pagination: {
        total,
        limit: _limit,
        page: _page,
      },
    };
  }

  // GET ToDo by ID
  static async findToDo(id: string) {
    const ToDo = await ToDoModel.findById(id);
    return ToDo;
  }

  // CREATE ToDo
  static async createToDo(data: IToDo) {
    const ToDo = await ToDoModel.create(data);
    return ToDo;
  }

  // UPDATE ToDo
 static async updateToDo(id: string, data: Partial<IToDo>) {
    const ToDo = await ToDoModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return ToDo;
  }
  
  // DELETE ToDo
  static async deleteToDo(id: string) {
    const ToDo = await ToDoModel.findByIdAndDelete(id);
    return ToDo;
  }
}
