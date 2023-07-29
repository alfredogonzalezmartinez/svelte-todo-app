<script lang="ts">
	import TaskComponent from '$lib/tasks/components/task/Task.svelte'
	import type { TaskRemoveEvent, TaskToggleCompletedEvent } from '$lib/tasks/components/task/types'
	import { tasks } from '$lib/tasks/store'
	import type { Task } from '$lib/tasks/types'

	export let task: Task

	const handleToggleCompleted = (event: TaskToggleCompletedEvent) => {
		const { taskId } = event.detail
		tasks.toggleCompleted(taskId)
	}

	const handleRemove = (event: TaskRemoveEvent) => {
		const { taskId } = event.detail
		tasks.remove(taskId)
	}
</script>

<TaskComponent {task} on:toggleCompleted={handleToggleCompleted} on:remove={handleRemove} />
