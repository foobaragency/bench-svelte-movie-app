import type { MovieDetails } from "../../../types/movie";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch }): Promise<MovieDetails> => {
  const movieDetails = await fetch(
    `https://api.themoviedb.org/3/movie/${params.slug}?api_key=061b5b5397826fffc37bcaad1cc6814f`
  );

  const similarMovies = await fetch(
    `https://api.themoviedb.org/3/movie/${params.slug}/similar?api_key=061b5b5397826fffc37bcaad1cc6814f`
  );
  const similar = await similarMovies.json();

  const credits = await fetch(
    `https://api.themoviedb.org/3/movie/${params.slug}/credits?api_key=061b5b5397826fffc37bcaad1cc6814f`
  );

  return { movie: await movieDetails.json(), credits: await credits.json(), similar: similar.results };

}
