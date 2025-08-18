<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { cn } from '$lib/utils';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import { page } from '$app/stores';

	let { children, data } = $props();
	const cookbooks = data.cookbooks;
	let selected = $derived($page.params.slug);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Sidebar.Provider class="dark">
	<Sidebar.Root class="dark">
		<Sidebar.Header>
			<img src={cookbooks.find((c) => c.bannerUrl != null).bannerUrl} class="aspect-auto rounded" />
		</Sidebar.Header>
		<Sidebar.Content>
			<ScrollArea class="h-full">
				<Sidebar.Menu class="p-4">
					{#each cookbooks as cookbook (cookbook.id)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton
								class={cn({
									'bg-primary text-primary-foreground': cookbook.name === selected
								})}
							>
								{#snippet child({ props })}
									<a href={`/${cookbook.name}`} {...props}>
										<span>{cookbook.name}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</ScrollArea>
		</Sidebar.Content>
	</Sidebar.Root>
	<Sidebar.Inset>
		{@render children?.()}
	</Sidebar.Inset>
</Sidebar.Provider>
