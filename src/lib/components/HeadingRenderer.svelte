<script lang="ts">
	import { cn } from '$lib/utils';

	const { text, depth } = $props();
	console.log({ text });
	const el = `h${depth}`;
	let classes = cn('text-xl font-bold antialiased text-primary my-2');
</script>

<svelte:element this={el} class={classes}>{text}</svelte:element>
