import { ITodoState } from "@/types/todo.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: ITodoState = {
  todos: [
    { id: "mosisfie93293hedbsnnd234", title: "New Additions", description: "Stay representative of framework.", createdAt: "July 7, 2023" },
    { id: "94384md8m84ycxbhsdffmfmd", title: "Bug Fixes", description: "Resolved layout issues in dark mode.", createdAt: "March 16, 2025" },
    { id: "990394394sreuireretw5425", title: "Performance Update", description: "Optimized API requests.", createdAt: "March 10, 2025" },
  ],
  selectedTodo: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    selectTodo: (state, action: PayloadAction<string>) => {
      state.selectedTodo = state.todos.find(todo => todo.id === action.payload) || null;
    },
  },
});

export const { selectTodo } = todoSlice.actions;
export default todoSlice.reducer;
