<script lang="ts">
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";

  interface Props {
    ordered: boolean;
    children: Snippet;
  }

  const { ordered, children }: Props = $props();
  const styles = "tracking-wide leading-loose pl-8";
</script>

{#snippet OrderedList()}
  <ul class={cn(styles, "list-decimal")}>
    {@render children()}
  </ul>
{/snippet}

{#snippet UnorderedList()}
  <ul class={cn(styles, "list-disc")}>
    {@render children()}
  </ul>
{/snippet}

{#if ordered}
  {@render OrderedList()}
{:else}
  {@render UnorderedList()}
{/if}
