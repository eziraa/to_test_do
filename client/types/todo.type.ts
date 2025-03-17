export interface ITodo {
    id?: string;
    title: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
  }

export interface ITodoState {
    todos: ITodo[];
    selectedTodo: ITodo | null;
    textToEdit: string | null;
  }

  export interface Pagination {
    page: number;
    limit: number;
    total: number;
  }