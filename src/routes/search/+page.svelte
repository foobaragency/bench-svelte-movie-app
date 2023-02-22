<script>
	import { page } from '$app/stores';
	const query = $page.url.searchParams.get('query');
	import Search from '../Search.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<form method="get" class=" py-3 px-6" action="/search">
	<Search placeholder={query || ''} />
</form>
{#each data.results as movie}
	<p>{movie.title}</p>
{/each}
