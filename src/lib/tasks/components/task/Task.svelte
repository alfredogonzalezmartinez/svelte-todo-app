<script lang="ts">
	import TrashIcon from '$lib/components/icons/TrashIcon.svelte'
	import type { TaskEvents } from '$lib/tasks/components/task/types'
	import type { Task } from '$lib/tasks/types'
	import { t } from '$lib/translations'
	import * as taskText from '$lib/translations/task/constants/task'
	import { createEventDispatcher } from 'svelte'

	export let task: Task

	const dispatch = createEventDispatcher<TaskEvents>()

	const toggleCompleted = () => dispatch('toggleCompleted', { taskId: task.id })
	const handleRemoveButtonClick = () => dispatch('remove', { taskId: task.id })
</script>

<article
	class="flex max-w-full items-center justify-between gap-2 border border-neutral-200 bg-white p-2 hover:bg-neutral-100"
>
	<div class="flex justify-start gap-2">
		<input
			class="accent-orange-600"
			type="checkbox"
			checked={task.completed}
			on:change={toggleCompleted}
		/>

		<span class={task.completed ? 'text-zinc-500 line-through' : ''}>
			{task.description}
		</span>
	</div>
	<button
		class="cursor-auto p-2 text-red-600 hover:text-red-400"
		aria-label={$t(taskText.remove)}
		on:click={handleRemoveButtonClick}
	>
		<TrashIcon />
	</button>
</article>
