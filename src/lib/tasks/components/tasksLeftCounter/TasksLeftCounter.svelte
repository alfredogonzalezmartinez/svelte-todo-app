<script lang="ts">
	export let count = 0
</script>

{#if count > 0}
	<span class="text-orange-600">
		{count}
		{count === 1 ? 'task' : 'tasks'}
		left
	</span>
{/if}
