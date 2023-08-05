<script lang="ts">
	import { t } from '$lib/translations'
	import * as common from '$lib/translations/common/constants/common'
</script>

<footer class="flex flex-col justify-center gap-1 py-2 sm:flex-row">
	<span class="text-center sm:after:content-['_-']">
		{$t(common.developedBy, { name: 'Alfredo' })}
	</span>
	<a
		class="text-center text-orange-600 underline"
		href="https://github.com/alfredogonzalezmartinez/svelte-todo-app"
		target="_blank"
		rel="noreferrer noopener"
	>
		{$t(common.sourceCode)}
	</a>
</footer>
