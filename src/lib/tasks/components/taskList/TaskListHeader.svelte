<script lang="ts">
	import TaskFilter from '$lib/tasks/components/tasksFilter/TaskFilter.svelte'
	import { TASK_FILTER_OPTION } from '$lib/tasks/components/tasksFilter/constantes'
	import TasksLeftCounter from '$lib/tasks/components/tasksLeftCounter/TasksLeftCounter.svelte'
	import { tasks, tasksFilter } from '$lib/tasks/store'

	const { leftCount } = tasks

	let selectedOption = TASK_FILTER_OPTION.ALL

	$: tasksFilter[selectedOption]()
</script>

<header class="flex flex-col items-center justify-between gap-4 sm:flex-row">
	<TaskFilter bind:selectedOption />
	<TasksLeftCounter count={$leftCount} />
</header>
