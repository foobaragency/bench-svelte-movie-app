<script>
	import { page } from '$app/stores';
	import MovieCard from '../MovieCard.svelte';
	const query = $page.url.searchParams.get('query');
	import Search from '../Search.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<form method="get" class=" py-3 px-6" action="/search">
	<Search placeholder={query || ''} />
</form>
{#each data.results as movie}
	<MovieCard title={movie.title} releaseDate={movie.release_date} poster={movie.poster_path} />
{/each}
