export interface ITask {
    _id?: string,
    title: string,
    description: string,
    status: string,
    authore ?: string, 
    priority: string,
    dueDate: string | Date,
    isComplite?: boolean,
    isDeleted?: boolean
}