<script lang="ts">
	import TaskListItem from '$lib/tasks/components/taskList/TaskListItem.svelte'
	import TaskListTasksLeftCounter from '$lib/tasks/components/taskList/TaskListTasksLeftCounter.svelte'
	import TaskFilter from '$lib/tasks/components/tasksFilter/TaskFilter.svelte'
	import { TASK_FILTER_OPTION } from '$lib/tasks/components/tasksFilter/constantes'
	import type { TaskFilterFilterEvent } from '$lib/tasks/components/tasksFilter/types'
	import { tasks } from '$lib/tasks/store'
	import type { Task } from '$lib/tasks/types'

	let filteredTasks = $tasks

	const allTasksFilter = null
	const activeTaskFilter = (task: Task) => !task.completed
	const completedTaskFilter = (task: Task) => task.completed

	let tasksFilter: ((task: Task) => boolean) | null = null

	$: tasksFilter ? (filteredTasks = $tasks.filter(tasksFilter)) : (filteredTasks = $tasks)

	const handleFilter = (event: TaskFilterFilterEvent) => {
		const { filterOption } = event.detail
		if (filterOption === TASK_FILTER_OPTION.ACTIVE) return (tasksFilter = activeTaskFilter)
		if (filterOption === TASK_FILTER_OPTION.COMPLETED) return (tasksFilter = completedTaskFilter)
		tasksFilter = allTasksFilter
	}
</script>

<article class="flex flex-col gap-4">
	<section class="flex flex-col items-center justify-between gap-4 sm:flex-row">
		<TaskFilter on:filter={handleFilter} />
		<TaskListTasksLeftCounter />
	</section>

	<section>
		<ul>
			{#each filteredTasks as task (task.id)}
				<li>
					<TaskListItem {task} />
				</li>
			{/each}
		</ul>
	</section>
</article>
