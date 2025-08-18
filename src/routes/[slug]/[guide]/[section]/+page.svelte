<script lang="ts">
	import GifRenderer from '$lib/components/GifRenderer.svelte';
	import HeadingRenderer from '$lib/components/HeadingRenderer.svelte';
	import { marked } from 'marked';
	import SvelteMarkdown from 'svelte-marked';

	const { data } = $props();
	const gif = {
		name: 'gif',
		level: 'block', // Is this a block-level or inline-level tokenizer?
		start(src) {
			return src.match(/gif:/)?.index;
		}, // Hint to Marked.js to stop and check for a match
		tokenizer(src, tokens) {
			const rule = /^gif:\S+/; // Regex for the complete token, anchor to string start
			const match = rule.exec(src);
			if (match) {
				const token = {
					// Token to generate
					type: 'gif', // Should match "name" above
					raw: match[0], // Text to consume from the source
					text: match[0].trim(), // Additional custom properties
					tokens: [] // Array where child inline tokens will be generated
				};
				console.log({ token });
				this.lexer.inline(token.text, token.tokens); // Queue this data to be processed for inline tokens
				return token;
			}
		}
	};
	marked.use({ extensions: [gif] });
</script>

<div class="p-8 text-primary">
	<p>hi</p>
	<SvelteMarkdown
		source={data.cookbook.body}
		options={marked.defaults}
		renderers={{ gif: GifRenderer, heading: HeadingRenderer }}
	/>
</div>

<style>
	div :global(> *) {
		margin: 12px;
	}
</style>
