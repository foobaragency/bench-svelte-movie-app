import type { MovieDisplay } from '@/types/movie';
import type { PersonDetails } from '../../../types/person';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({
	params,
	fetch
}): Promise<{ details: PersonDetails; credits: MovieDisplay[] }> => {
	const personDetails = await fetch(
		`https://api.themoviedb.org/3/person/${params.slug}?api_key=061b5b5397826fffc37bcaad1cc6814f`
	);

	const combinedCredits = await fetch(
		`https://api.themoviedb.org/3/person/${params.slug}/combined_credits?api_key=061b5b5397826fffc37bcaad1cc6814f`
	);
	const {
		cast,
		crew
	}: {
		cast: (MovieDisplay & { popularity: number })[];
		crew: (MovieDisplay & { popularity: number })[];
	} = await combinedCredits.json();
	const allCredits = [...cast, ...crew];

	return { details: await personDetails.json(), credits: allCredits };
};
