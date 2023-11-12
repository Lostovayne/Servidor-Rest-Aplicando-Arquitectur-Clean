export class TodoEntity {
    constructor(public id: number, public text: string, public completedAt?: Date | null) {}
    get isCompleted(): boolean {
        return !!this.completedAt;
    }

    public static fromObject(object: { [key: string]: any }): TodoEntity {
        const { id, text, completedAt } = object;
        if (!id) throw "Id is required";
        if (!text) throw "Text is required";

        // let newCompleteAt = null;
        // if (completedAt) {
        //     newCompleteAt = new Date(completedAt);
        //     if (newCompleteAt.toString() === "Invalid Date") {
        //         throw "CompletedAt must be a valid date";
        //     }
        // }

        return new TodoEntity(id, text, completedAt);
    }
}
