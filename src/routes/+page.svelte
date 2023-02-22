<script>
	import SearchBgImage from '$lib/images/search-bg-blur.webp';
	import Search from './Search.svelte';
</script>

<svelte:head>
	<title>Svelte Movie App</title>
	<meta name="description" content="Svelte movie app" />
</svelte:head>

<div
	class="mb-3 flex  h-80 flex-col justify-center  bg-cover px-10"
	style="background-image: url({SearchBgImage})"
>
	<div class="text-3xl font-bold text-slate-50">
		Millions of movie for you to discover and explore!
	</div>

	<form method="get" class="mt-4" action="/search">
		<Search />
	</form>
</div>
