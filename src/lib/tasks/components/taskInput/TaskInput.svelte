<script lang="ts">
	import type { TaskInputEvents } from '$lib/tasks/components/taskInput/types'
	import type { NewTask } from '$lib/tasks/types'
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher<TaskInputEvents>()

	const add = (task: NewTask) => dispatch('add', { task })

	const handleSubmit = (
		event: Event & {
			readonly submitter: HTMLElement | null
		},
	) => {
		const form = event.currentTarget as HTMLFormElement
		const formData = new FormData(form)
		const description = formData.get('description')?.toString().trim()

		if (description) {
			add({ description })
			form.reset()
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input
		name="description"
		class="block w-full border border-gray-300 bg-gray-50 p-2 px-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
		type="text"
		placeholder="Do something"
	/>
</form>
