<script lang="ts">
	export let title: string, releaseDate: string, poster: string;

	const imageWidth = 185;
	const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
</script>

<figure class="mx-auto p-8 md:p-0">
	<img
		class="mx-auto rounded-xl shadow-md  shadow-slate-400 md:h-auto"
		src="{IMAGE_BASE_URL}/w{imageWidth}/{poster}"
		alt={title}
	/>
	<figcaption class="p-1.5 text-slate-900 dark:text-slate-700">
		<div class="text-sm font-bold">{title}</div>
		<div class="text-xs font-thin">
			{new Date(releaseDate).toDateString()}
		</div>
	</figcaption>
</figure>
