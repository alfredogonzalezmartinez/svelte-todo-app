import { browser } from '$app/environment'
import type { NewTask, Task, TaskFilter, TaskId } from '$lib/tasks/types'
import { derived, writable } from 'svelte/store'

const allTasksFilter = null
const activeTaskFilter = (task: Task) => !task.completed
const completedTaskFilter = (task: Task) => task.completed

function createTaskFilter() {
	const { subscribe, set } = writable<TaskFilter>(allTasksFilter)

	const all = () => set(allTasksFilter)
	const active = () => set(activeTaskFilter)
	const completed = () => set(completedTaskFilter)

	return {
		subscribe,
		all,
		active,
		completed,
	}
}

function createTasks() {
	const localStorageKey = 'tasks'

	const getLocalStorageTasks = (): Task[] => {
		const tasks = localStorage.getItem(localStorageKey)
		return tasks ? JSON.parse(tasks) : []
	}

	const initialTasks = browser ? getLocalStorageTasks() : []

	const { subscribe, update } = writable(initialTasks)

	subscribe((tasks) => {
		if (browser) localStorage.setItem(localStorageKey, JSON.stringify(tasks))
	})

	const add = ({ description }: NewTask) => {
		const newTask = {
			id: crypto.randomUUID(),
			description: description,
			completed: false,
		}

		update((tasks) => [newTask, ...tasks])
	}

	const toggleCompleted = (id: TaskId) => {
		update((tasks) =>
			tasks.map((task) => {
				if (task.id === id) task.completed = !task.completed
				return task
			}),
		)
	}

	const remove = (id: TaskId) => {
		update((tasks) => tasks.filter((task) => task.id !== id))
	}

	const leftCount = derived(
		{ subscribe: subscribe },
		($task) => $task.filter(activeTaskFilter).length,
	)

	return {
		subscribe,
		add,
		toggleCompleted,
		remove,
		leftCount,
	}
}

export const tasks = createTasks()

export const tasksFilter = createTaskFilter()

export const filteredTasks = derived([tasks, tasksFilter], ([$tasks, $taskFilter]) =>
	$taskFilter ? $tasks.filter($taskFilter) : $tasks,
)
