<script lang="ts">
  import { isVisible } from "$lib/utils/isVisible.svelte";

  const { text } = $props();
  const gifs = text.replace(/gif:/g, "").split(",");

  const [visibility, setIsVisible] = isVisible<HTMLDivElement>();

  function isGif(gif: string) {
    return gif.indexOf(".gif") >= 0;
  }
</script>

<div class="flex w-full flex-wrap justify-center gap-4">
  <div
    class="w-full max-w-[900px] rounded flex flex-wrap gap-4"
    {@attach setIsVisible}
  >
    {#each gifs as gif, index (index)}
      {#if isGif(gif)}
        {#if visibility.visible}
          <img
            alt="example gif"
            class="aspect-video w-full max-w-[900px] rounded"
            src={gif}
          />
        {:else}
          <div class="aspect-video w-full max-w-[900px]" />
        {/if}
      {:else}
        <video
          autoplay
          muted
          loop
          class="aspect-video w-full max-w-[900px] rounded"
        >
          {#if visibility.visible}
            <source src={gif} />
          {:else}
            <div class="aspect-video w-full max-w-[900px]" />
          {/if}
        </video>
      {/if}
    {/each}
  </div>
</div>
