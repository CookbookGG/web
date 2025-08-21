<script lang="ts">
  const { ordered, children } = $props();
</script>

{#if ordered}
  <ul class="tracking-wide leading-loose pl-8 list-decimal">
    {@render children()}
  </ul>
{:else}
  <ul class="tracking-wide leading-loose pl-8 list-disc">
    {@render children()}
  </ul>
{/if}
