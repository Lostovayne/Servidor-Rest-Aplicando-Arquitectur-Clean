export class CreateTodoDto {
    private constructor(public readonly text: string, public readonly completedAt?: Date | null) {}

    static create(props: { [key: string]: any }): [string?, CreateTodoDto?] {
        const { text, completedAt } = props;
        if (!text) return ["Text property is required", undefined];

        let newCompletedAt = null;
        if (completedAt) {
            newCompletedAt = new Date(completedAt);
            if (newCompletedAt.toString() === "Invalid Date") {
                return ["CompletedAt must be a valid date"];
            }
        }

        return [undefined, new CreateTodoDto(text, newCompletedAt)];
    }
}
