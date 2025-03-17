import { todos } from "@/app/data/todos";
import { ITodo, ITodoState } from "@/types/todo.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: ITodoState = {
  todos: todos,
  selectedTodo: null,
  textToEdit: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    selectTodo: (state, action: PayloadAction<ITodo | null>) => {
      if(!action.payload) {
        state.selectedTodo = null;
        return;
      }
      state.selectedTodo = action.payload
    },
    formatText: (state, action: PayloadAction<string | null>) => {
      state.textToEdit = action.payload;
    }
  },
});

export const { selectTodo } = todoSlice.actions;
export default todoSlice.reducer;
