import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.slug}?api_key=061b5b5397826fffc37bcaad1cc6814f`
  );

  return await response.json();
}
