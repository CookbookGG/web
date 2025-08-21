export async function load({ params }) {
  const { slug, guide, section } = params

  const res = await fetch(`https://api.dev-cookbook.com/cookbookName/${slug}/guideName/${guide}/sectionName/${section}`)
  const cookbook = await res.json();
  console.log({ cookbook })

  return { cookbook }
}
