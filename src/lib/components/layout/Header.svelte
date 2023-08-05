<script lang="ts">
	import { t } from '$lib/translations'
	import * as common from '$lib/translations/common/constants/common'
	import LanguageSelector from '../languageSelector/LanguageSelector.svelte'
</script>

<header class="flex flex-wrap items-center justify-center gap-4 py-2 xs:justify-between">
	<h1 class="py-2 text-center text-5xl font-black text-orange-600">{$t(common.appName)}</h1>

	<LanguageSelector />
</header>
