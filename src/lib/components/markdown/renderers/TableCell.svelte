<script lang="ts">
  const { children, header } = $props();
</script>

{#if header}
  <th
    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-foreground sm:pl-0"
    >{@render children()}</th
  >
{:else}
  <td
    class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-foreground sm:pl-0"
    >{@render children()}</td
  >
{/if}
