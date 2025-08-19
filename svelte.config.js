import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const r = await fetch("https://api.dev-cookbook.com/cookbooks");
const cookbooks = await r.json();

const promises = cookbooks.map(async ({ name }) => {
  const res = await fetch(`https://api.dev-cookbook.com/cookbookName/${name}`);
  const cookbook = await res.json();

  return cookbook.guides
    .map((guide) => {
      const sections = guide.sections;
      return sections.map(
        (section) => `/${name}/${guide.name}/${section.name}`,
      );
    })
    .flat();
});

const entries = await Promise.all(promises);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    prerender: {
      // use relative URLs similar to an anchor tag <a href="/test/1"></a>
      // do not include group layout folders in the path such as /(group)/test/1
      entries: entries.flat(),
    },
  },
};

export default config;
