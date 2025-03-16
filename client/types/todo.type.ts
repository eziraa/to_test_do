export interface ITodo {
    id: string;
    title: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
  }
  
export interface ITodoState {
    todos: ITodo[];
    selectedTodo: ITodo | null;
  }