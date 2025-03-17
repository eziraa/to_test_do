export interface IToDo {
    title: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ITodoQuery{
    search?: string;
    limit?: string | number;
    page?: string | number;
}