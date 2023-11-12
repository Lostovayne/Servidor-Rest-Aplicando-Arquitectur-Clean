import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";

export interface GetTodoUseCases {
    execute(): Promise<TodoEntity[]>;
}

export class GetTodos implements GetTodoUseCases {
    constructor(private readonly todoRepository: TodoRepository) {}

    execute(): Promise<TodoEntity[]> {
        return this.todoRepository.getAll();
    }
}
