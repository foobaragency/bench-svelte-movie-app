<script lang="ts">
	import MovieCard from '@/components/MovieCard/MovieCard.svelte';
	import Slider from '@/routes/Slider.svelte';
	import type { PageData } from './$types';

	/** @type {import('./$types').PageData} */
	export let data: PageData;

	const { details, credits } = data;
	console.log(credits);

	const personalInfo: { label: string; value: string }[] = [
		...((details.birthday && [
			{
				label: 'Born',
				value: details.birthday
			}
		]) ||
			[]),
		...((details.deathday && [{ label: 'Died', value: details.deathday }]) || []),
		...((details.also_known_as && [
			{
				label: 'Also known as',
				value: details.also_known_as
			}
		]) ||
			[]),
		{
			label: 'Known for',
			value: details.known_for_department
		},
		{
			label: 'Known Credits',
			value: credits.length.toString()
		}
	];

	const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
</script>

<div class="flex p-12 md:gap-12">
	<img
		src="{IMAGE_BASE_URL}/original/{details.profile_path}"
		alt={details.name}
		class="rounded-md
    shadow-xl w-120 h-full w-56"
	/>
	<div class="flex flex-col min-w-0">
		<h1 class="text-6xl">{details.name}</h1>
		<h2 class="text-2xl mt-4">Biography</h2>
		<p class="mt-2">{details.biography}</p>
		<h2 class="text-2xl mt-4">Personal Info</h2>
		<div class="grid grid-cols-6 mt-2">
			{#each personalInfo as item}
				<div>
					<p class="font-bold">{item.label}</p>
					<p>{item.value}</p>
				</div>
			{/each}
		</div>
		<h2 class="text-2xl mt-4">Known for</h2>
		<Slider>
			{#each credits as movie}
				<MovieCard {movie} />
			{/each}
		</Slider>
	</div>
</div>
