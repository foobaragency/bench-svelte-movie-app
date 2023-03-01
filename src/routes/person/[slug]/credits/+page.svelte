<script lang="ts">
	import MovieCard from '@/components/MovieCard';
	import type { PageData } from './$types';

	export let data: PageData;

	const responsiveGrid = `grid grid-cols-2 sm:grid-cols-3 m:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
gap-1`;
</script>

<div class="px-10">
	<h2 class="text:xl mb-3 font-bold lg:text-3xl mt-10">
		All Credits for
		{data.details.name}
	</h2>
	<div class={responsiveGrid}>
		{#each data.credits as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</div>
