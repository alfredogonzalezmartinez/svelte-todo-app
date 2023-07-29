<script lang="ts">
	import TaskInput from '$lib/tasks/components/taskInput/TaskInput.svelte'
	import type { TaskInputAddEvent } from '$lib/tasks/components/taskInput/types'
	import TaskList from '$lib/tasks/components/taskList/TaskList.svelte'
	import { tasks } from '$lib/tasks/store'

	const handleAdd = (event: TaskInputAddEvent) => {
		const { task } = event.detail
		tasks.add(task)
	}
</script>

<section>
	<TaskInput on:add={handleAdd} />
</section>

<section>
	<TaskList />
</section>
