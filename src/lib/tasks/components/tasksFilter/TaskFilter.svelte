<script lang="ts">
	import FilterOption from '$lib/tasks/components/tasksFilter/TaskFilterOption.svelte'
	import { TASK_FILTER_OPTION } from '$lib/tasks/components/tasksFilter/constantes'
	import type { TaskFilterEvents, TaskFilterOption } from '$lib/tasks/components/tasksFilter/types'
	import { createEventDispatcher } from 'svelte'

	export let selectedOption: TaskFilterOption = TASK_FILTER_OPTION.ALL

	const options = Object.values(TASK_FILTER_OPTION)

	const dispatch = createEventDispatcher<TaskFilterEvents>()

	const filter = (option: TaskFilterOption) => dispatch('filter', { filterOption: option })

	const handleClickOption = (option: TaskFilterOption) => {
		selectedOption = option
		filter(option)
	}
</script>

<article class="flex flex-wrap items-center justify-center gap-2">
	{#each options as option}
		<FilterOption selected={option === selectedOption} on:click={() => handleClickOption(option)}>
			<span class="capitalize">{option}</span>
		</FilterOption>
	{/each}
</article>
