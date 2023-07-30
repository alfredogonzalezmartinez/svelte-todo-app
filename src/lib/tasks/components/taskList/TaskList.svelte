<script lang="ts">
	import TaskListHeader from '$lib/tasks/components/taskList/TaskListHeader.svelte'
	import TaskListItem from '$lib/tasks/components/taskList/TaskListItem.svelte'
	import { filteredTasks } from '$lib/tasks/store'
</script>

<article class="flex flex-col gap-4">
	<TaskListHeader />
	<section>
		<ul>
			{#each $filteredTasks as task (task.id)}
				<li>
					<TaskListItem {task} />
				</li>
			{/each}
		</ul>
	</section>
</article>
