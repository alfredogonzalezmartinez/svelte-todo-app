import type { NewTask, Task, TaskId } from '$lib/tasks/types'
import { writable } from 'svelte/store'

function createTasks(tasks: Task[] = []) {
	const { subscribe, update } = writable(tasks)

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

	return {
		subscribe,
		add,
		toggleCompleted,
		remove,
	}
}

export const tasks = createTasks()
