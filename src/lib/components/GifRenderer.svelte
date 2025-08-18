<script lang="ts">
	const { text } = $props();
	const gifs = text.replace(/gif:/g, '').split(',');

	let inView = $state(false);
	let elementRef;

	$effect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				inView = entry.isIntersecting;
			},
			{ threshold: 0.1 }
		); // Adjust threshold as needed (e.g., 0.1 for 10% visibility)

		if (elementRef) {
			observer.observe(elementRef);
		}

		return () => {
			if (observer) observer.disconnect();
		};
	});

	function isGif(gif: string) {
		return gif.indexOf('.gif') >= 0;
	}
</script>

<div class="flex w-full flex-wrap justify-center gap-4">
	{#each gifs as gif, index (index)}
		{#if isGif(gif)}
			<img loading="lazy" class="aspect-video w-full max-w-[900px] rounded" src={gif} />
		{:else}
			<video
				bind:this={elementRef}
				autoplay
				muted
				loop
				class="aspect-video w-full max-w-[900px] rounded"
			>
				{#if inView}
					<source src={gif} />
				{/if}
			</video>
		{/if}
	{/each}
</div>
