/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
  const query = url.searchParams.get('query') || '';

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=061b5b5397826fffc37bcaad1cc6814f`
  );

  const json = await response.json();
  console.log(json);

  return json;
}
