<script lang="ts">
	import TaskInput from '$lib/tasks/components/taskInput/TaskInput.svelte'
	import type { TaskInputAddEvent } from '$lib/tasks/components/taskInput/types'
	import TaskList from '$lib/tasks/components/taskList/TaskList.svelte'
	import { tasks } from '$lib/tasks/store'
	import { t } from '$lib/translations'
	import * as common from '$lib/translations/common/constants/common'

	const handleAdd = (event: TaskInputAddEvent) => {
		const { task } = event.detail
		tasks.add(task)
	}
</script>

<svelte:head>
	<title>{$t(common.appName)}</title>
	<meta name="description" content={common.appDescription} />
</svelte:head>

<section>
	<TaskInput on:add={handleAdd} />
</section>

<section>
	<TaskList />
</section>
