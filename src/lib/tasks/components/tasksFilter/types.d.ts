import type { TASK_FILTER_OPTION } from '$lib/tasks/components/tasksFilter/constantes'

export type TaskFilterOption = (typeof TASK_FILTER_OPTION)[keyof typeof TASK_FILTER_OPTION]

export type TaskFilterEvents = {
	filter: { filterOption: TaskFilterOption }
}

export type TaskFilterFilterEvent = CustomEvent<TaskFilterEvents['filter']>
