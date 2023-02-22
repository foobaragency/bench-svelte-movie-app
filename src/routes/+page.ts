/** @type {import('./$types').PageLoad} */
export async function load() {
  const popularResponse = await fetch(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=061b5b5397826fffc37bcaad1cc6814f"
  );

  const upcomingResponse = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?page=1&sort_by=popularity.desc&api_key=061b5b5397826fffc37bcaad1cc6814f"
  );

  const popularJson = popularResponse.json();
  const upcomingJson = upcomingResponse.json();

  return { popular: popularJson, upcoming: upcomingJson };
}
