<script lang="ts">
	export let selected = false
</script>

<button
	class="w-full cursor-auto rounded border border-orange-600 px-4 py-0.5 sm:max-w-min {selected
		? 'bg-orange-600 text-white'
		: 'text-orange-600 hover:bg-orange-100'}"
	disabled={selected}
	on:click
>
	<slot />
</button>
