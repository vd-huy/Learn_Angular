export interface Task {
    nameUser : string;
    name : string;
    isDone : boolean;
}

export interface TaskId extends Task{
    id: string
}
