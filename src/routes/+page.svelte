<script lang="ts">
	import Task from '$lib/tasks/components/task/Task.svelte'
	import type { TaskRemoveEvent, TaskToggleCompletedEvent } from '$lib/tasks/components/task/types'
	import TaskInput from '$lib/tasks/components/taskInput/TaskInput.svelte'
	import type { TaskInputAddEvent } from '$lib/tasks/components/taskInput/types'
	import { tasks } from '$lib/tasks/store'
	import { flip } from 'svelte/animate'

	const handleToggleCompleted = (event: TaskToggleCompletedEvent) => {
		const { taskId } = event.detail
		tasks.toggleCompleted(taskId)
	}

	const handleRemove = (event: TaskRemoveEvent) => {
		const { taskId } = event.detail
		tasks.remove(taskId)
	}

	const handleAdd = (event: TaskInputAddEvent) => {
		const { task } = event.detail
		tasks.add(task)
	}
</script>

<section>
	<TaskInput on:add={handleAdd} />
</section>
<section>
	<ul>
		{#each $tasks as task (task.id)}
			<li animate:flip>
				<Task {task} on:toggleCompleted={handleToggleCompleted} on:remove={handleRemove} />
			</li>
		{/each}
	</ul>
</section>
