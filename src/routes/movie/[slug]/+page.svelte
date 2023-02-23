<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log('data', data);
	const { id, title, poster_path, backdrop_path, release_date, overview, genres } = data;
	const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
</script>

<div class="bg-cover" style="background-image: url({IMAGE_BASE_URL}/original/{backdrop_path})">
	<div
		class="w-full h-full flex flex-row p-12 backdrop-blur-sm from-gray-900 to-transparent bg-gradient-to-b"
	>
		<img src="{IMAGE_BASE_URL}/w500/{poster_path}" alt={title} class="rounded-xl shadow-xl mr-12" />
		<div class="flex flex-col">
			<h1 class="text-white text-6xl">
				{title}
				<span class="opacity-80">({new Date(release_date).getFullYear()})</span>
			</h1>
			<span class="text-white before:marker"
				>{release_date} |
				<span>{genres.map((genre) => genre.name).join(', ')}</span>
			</span>
			<span class="text-white opacity-80 mt-4 italic">{data.tagline}</span>
			<h2 class="text-white font-medium mt-4 text-2xl">Overview</h2>
			<p class="text-white">{overview}</p>
		</div>
	</div>
</div>
