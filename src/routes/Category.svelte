<script lang="ts">
	import type { Movie } from '../types/movie';
	import MovieCard from './MovieCard.svelte';
	import Slider from './Slider.svelte';

	export let movies: Movie[];
</script>

<Slider>
	{#each movies as movie}
		<MovieCard {movie} />
	{/each}
</Slider>
