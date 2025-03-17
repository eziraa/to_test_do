
  import { ITodo, Pagination } from "@/types/todo.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
  
  export enum TodoTagsEnum {
    TODO = "todo",
    TODOS = "todos",
  }
  export const TodoApi = createApi({
    baseQuery: fetchBaseQuery({
      baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/todos`,
    }),
    reducerPath: "todoApi",
    tagTypes: [...Object.values(TodoTagsEnum)],
    endpoints: (builder) => ({
    
        getTodos: builder.query<{data:ITodo[], pagination: Pagination}, string | null>({
            query: (params)    => {
                return {
                    url:  params?  "?" + params : "",
                    method: "GET",
                };
            },
            providesTags: [TodoTagsEnum.TODOS],
        }),
        getTodo: builder.query<ITodo, string>({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: TodoTagsEnum.TODO, id }],
        }),
        createTodo: builder.mutation<ITodo, Partial<ITodo>>({
            query: (body) => ({
                url: "",
                method: "POST",
                body,
            }),
            invalidatesTags: [TodoTagsEnum.TODOS],
        }),
        updateTodo: builder.mutation<ITodo, Partial<ITodo>>({
            query: ({ id, ...body }) => ({
                url: `/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: TodoTagsEnum.TODO, id }],
        }),
        deleteTodo: builder.mutation<void, string>({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [TodoTagsEnum.TODOS],
        }),      
    }),
  });
  
  export const {
    useGetTodoQuery,
    useGetTodosQuery,
    useCreateTodoMutation,
    useDeleteTodoMutation,
    useUpdateTodoMutation,
  } = TodoApi;
  