<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import { locale, locales, t } from '$lib/translations'
	import * as common from '$lib/translations/common/constants/common'
	import { lang } from '$lib/translations/lang/utils/lang'

	$: ({ route } = $page.data)
</script>

<article>
	<span>{$t(common.language)}:</span>
	<select
		class="border border-gray-300 bg-gray-50 px-1 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
		on:change={({ currentTarget }) => goto(currentTarget.value)}
	>
		{#each $locales as lc}
			<option value="/{lc}{route}" selected={lc === $locale}>{$t(lang(lc))}</option>
		{/each}
	</select>
</article>
