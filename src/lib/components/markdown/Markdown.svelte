<script lang="ts">
  import GifRenderer from "./renderers/Gif.svelte";
  import HeadingRenderer from "./renderers/Heading.svelte";
  import SvelteMarkdown from "svelte-marked";
  import { marked } from "marked";
  import { gif } from "./extensions/gif.svelte";

  const { text } = $props();

  marked.use({ extensions: [gif] });
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const defaults = marked.defaults as any;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const renderers = { gif: GifRenderer, heading: HeadingRenderer } as any;
</script>

<div class="p-8 text-primary">
  <SvelteMarkdown source={text} options={defaults} {renderers} />
</div>

<style>
  div :global(> *) {
    margin: 12px;
  }
</style>
