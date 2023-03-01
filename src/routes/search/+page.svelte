<script>
	import { page } from '$app/stores';
	import MovieCard from '@/components/MovieCard';
	const query = $page.url.searchParams.get('query');
	import Search from '../Search.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<form method="get" class=" py-3 px-6" action="/search">
	<Search placeholder={query || ''} />
</form>
<div class="grid grid-cols-4 px-6 [&>*]:mb-4 [&>*]:w-80">
	{#if data.results.length > 0}
		{#each data.results as movie}
			<MovieCard {movie} />
		{/each}
	{:else}
		<span>no results for '{query}' 🙁</span>
	{/if}
</div>
