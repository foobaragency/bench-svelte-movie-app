<script lang="ts">
	import type { CastMember } from '../../../types/castAndCrew';

	export let actor: CastMember;
	const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
</script>

<figure class="bg-white shadow-xl rounded-xl">
	<figure class="mx-auto p-8 md:p-0 w-24">
		<img
			class="mx-auto rounded-t-xl md:h-auto"
			src="{IMAGE_BASE_URL}/original/{actor.profile_path}"
			alt={actor.name}
		/>
		<figcaption class="p-1.5 text-slate-900 dark:text-slate-700">
			<div class="text-sm font-bold">{actor.name}</div>
			<div class="text-xs font-thin">
				{actor.character}
			</div>
		</figcaption>
	</figure>
</figure>
