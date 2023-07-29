export type TaskInputEvents = {
	add: { task: NewTask }
}

export type TaskInputAddEvent = CustomEvent<TaskInputEvents['add']>
