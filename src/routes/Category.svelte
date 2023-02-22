<script lang="ts">
	import MovieCard from './MovieCard.svelte';

	export let movies: { id: string; title: string; release_date: string; poster_path: string }[];
</script>

<div style="overflow: scroll hidden">
	<div style="min-width: 100%; display: table;">
		<div class="flex flex-nowrap pb-2 [&>*]:mr-2 [&>*]:w-48">
			{#each movies as movie}
				<MovieCard
					id={movie.id}
					title={movie.title}
					releaseDate={movie.release_date}
					poster={movie.poster_path}
				/>
			{/each}
		</div>
	</div>
</div>
