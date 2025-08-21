<script lang="ts">
  import Markdown from "$lib/components/markdown/Markdown.svelte";

  const { data } = $props();
</script>

<Markdown text={data.cookbook.body} />
