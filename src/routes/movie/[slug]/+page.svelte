<script>
	import MovieCard from '../../MovieCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<MovieCard
	title={data.title}
	poster={data.poster_path}
	releaseDate={data.release_date}
	imageWidth="500"
/>
