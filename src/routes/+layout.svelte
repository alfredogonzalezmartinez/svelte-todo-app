<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte'
	import Header from '$lib/components/layout/Header.svelte'
	import '../app.postcss'
</script>

<div class="container mx-auto flex h-screen flex-col justify-between gap-8 p-4">
	<div class="flex flex-col gap-8">
		<Header />
		<slot />
	</div>
	<Footer />
</div>
