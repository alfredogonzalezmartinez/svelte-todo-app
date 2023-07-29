import type { TaskId } from '$lib/tasks/types'

export type TaskEvents = {
	toggleCompleted: { taskId: TaskId }
	remove: { taskId: TaskId }
}

export type TaskToggleCompletedEvent = CustomEvent<TaskEvents['toggleCompleted']>
export type TaskRemoveEvent = CustomEvent<TaskEvents['remove']>
