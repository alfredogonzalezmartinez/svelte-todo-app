<script lang="ts">
	import { tasks } from '$lib/tasks/store'

	let count = 0
	$: count = $tasks.filter((task) => !task.completed).length
</script>

{#if count > 0}
	<span class="text-orange-600">
		{count}
		{count === 1 ? 'task' : 'tasks'}
		left
	</span>
{/if}
