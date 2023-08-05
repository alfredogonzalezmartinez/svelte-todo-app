<script lang="ts">
	import { t } from '$lib/translations'
	import * as tasksLeftCounter from '$lib/translations/tasksLeftCounter/constants/tasksLeftCounter'

	export let count: number
</script>

{#if count > 0}
	<span class="text-center text-orange-600">
		{$t(tasksLeftCounter.tasksLeft, { count: count })}
	</span>
{/if}
