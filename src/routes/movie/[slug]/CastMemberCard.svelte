<script lang="ts">
	import type { CastMember } from '../../../types/castAndCrew';

	export let actor: CastMember;
	const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
</script>

<div class="bg-white shadow-xl rounded-xl w-32">
	<img class="rounded-t-xl" src="{IMAGE_BASE_URL}/original/{actor.profile_path}" alt={actor.name} />
	<div class="p-1.5">
		<p class="text-black font-bold">{actor.name}</p>
		<p class="text-black">{actor.character}</p>
	</div>
</div>
