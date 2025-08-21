
export async function load({ params }) {
  // if (params.slug == null || params.slug === '') {
  //   redirect(300, '/captain-falcon')
  //   return;
  // }

  const r = await fetch('https://api.dev-cookbook.com/cookbooks')
  const cookbooks = await r.json();
  return { cookbooks, };
}

export const prerender = true

