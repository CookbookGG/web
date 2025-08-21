<script lang="ts">
  const { text } = $props();
  const gifs = text.replace(/gif:/g, "").split(",");

  let inView = $state(false);
  let elementRef: HTMLDivElement;

  $effect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.1 },
    );

    if (elementRef) {
      observer.observe(elementRef);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  });

  function isGif(gif: string) {
    return gif.indexOf(".gif") >= 0;
  }
</script>

<div class="flex w-full flex-wrap justify-center gap-4">
  <div
    bind:this={elementRef}
    class="w-full max-w-[900px] rounded flex flex-wrap gap-4"
  >
    {#each gifs as gif, index (index)}
      {#if isGif(gif)}
        {#if inView}
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
          {#if inView}
            <source src={gif} />
          {:else}
            <div class="aspect-video w-full max-w-[900px]" />
          {/if}
        </video>
      {/if}
    {/each}
  </div>
</div>
