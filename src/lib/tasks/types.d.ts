export type TaskId = `${string}-${string}-${string}-${string}-${string}`

export type Task = {
	id: TaskId
	description: string
	completed: boolean
}

export type NewTask = Pick<Task, 'description'>
