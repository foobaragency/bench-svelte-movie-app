<script lang="ts">
	import type { Movie } from '../types/movie';

	export let movie: Movie;

	type ImageWidth = '185' | '342' | '500' | '780';

	export let imageWidth: ImageWidth = '185';
	const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
</script>

<a href="/movie/{movie.id}">
	<figure class="mx-auto p-8 md:p-0 w-44">
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
</a>
