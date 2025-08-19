<script lang="ts">
  import { cn } from "$lib/utils";

  const { text, depth }: { text: string; depth: number } = $props();
  const el = `h${depth}`;
  const styles = "font-bold antialiased text-primary my-2";
  const styleMap: { [key: number]: string } = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
  };

  let classes = cn(styles, styleMap[depth]);
</script>

<svelte:element this={el} class={classes}>{text}</svelte:element>
