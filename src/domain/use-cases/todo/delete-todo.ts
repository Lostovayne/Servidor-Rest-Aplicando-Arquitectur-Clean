import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";

export interface DeleteTodoUseCase {
    execute(id: number): Promise<TodoEntity>;
}

export class DeleteTodo implements DeleteTodoUseCase {
    constructor(private readonly todoRepository: TodoRepository) {}

    execute(id: number): Promise<TodoEntity> {
        return this.todoRepository.deleteById(id);
    }
}
