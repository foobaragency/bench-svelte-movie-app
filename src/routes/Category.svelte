<script>
	export let movies;
	const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
	const imageWidth = 185;
</script>

<div class="flex pb-2 [&>*]:mr-2 [&>*]:w-48 overflow-x-auto">
	{#each movies as movie}
		<figure class="mx-auto p-8 md:p-0">
			<img
				class="mx-auto rounded-xl shadow-md  shadow-slate-400 md:h-auto"
				src="{IMAGE_BASE_URL}/w{imageWidth}/{movie.poster_path}"
				alt={movie.title}
			/>
			<figcaption class="p-1.5 text-slate-900 dark:text-slate-700">
				<div class="text-sm font-bold">{movie.title}</div>
				<div class="text-xs font-thin">
					{new Date(movie.release_date).toDateString()}
				</div>
			</figcaption>
		</figure>
	{/each}
</div>
