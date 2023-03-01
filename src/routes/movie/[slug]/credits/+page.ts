import type { PageLoad } from './$types';
import type { MovieCredits } from '@/types/movie';

export const load: PageLoad = async ({ parent }) => {
	const movieDetails = await parent();

	return movieDetails;
};
