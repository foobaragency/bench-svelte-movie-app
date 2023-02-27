<script lang="ts">
	import type { MovieDisplay } from '@/types/movie';
	import MovieCard from './MovieCard.svelte';
	import Slider from './Slider.svelte';

	export let movies: MovieDisplay[];
</script>

<Slider>
	{#each movies as movie}
		<MovieCard {movie} />
	{/each}
</Slider>
