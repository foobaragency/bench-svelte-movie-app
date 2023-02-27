<script lang="ts">
	import type { CrewMember } from '@/types/castAndCrew';
	import type { Credits } from '@/types/movie';
	import PersonCard from '../PersonCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data: Credits;

	const { cast, crew } = data;
	const crewByJob: { [job: string]: CrewMember[] } = {};
	crew.forEach((crewMember) => {
		if (!crewByJob[crewMember.job]) {
			crewByJob[crewMember.job] = [crewMember];
		} else {
			crewByJob[crewMember.job].push(crewMember);
		}
	});

	const responsiveGrid = `grid grid-cols-2 sm:grid-cols-3 m:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
gap-1`;
</script>

<div class="px-10">
	<h2 class="text:xl mb-3 font-bold lg:text-3xl mt-10">Cast 🍿</h2>
	<div class={responsiveGrid}>
		{#each cast as actor}
			<PersonCard person={actor} />
		{/each}
	</div>
	<h2 class="text:xl my-3 font-bold lg:text-3xl">Crew 🎥</h2>
	{#each Object.keys(crewByJob) as job}
		<h3 class="text-xl">{job}</h3>
		<div class={responsiveGrid}>
			{#each crewByJob[job] as jobMember}
				<PersonCard person={jobMember} />
			{/each}
		</div>
	{/each}
</div>
