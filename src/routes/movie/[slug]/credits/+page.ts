import type { PageLoad } from "./$types";
import type { MovieCredits } from "@/types/movie";

export const load: PageLoad = async ({ params, fetch }): Promise<MovieCredits> => {
  const credits = await fetch(
    `https://api.themoviedb.org/3/movie/${params.slug}/credits?api_key=061b5b5397826fffc37bcaad1cc6814f`
  );

  return credits.json();
}
