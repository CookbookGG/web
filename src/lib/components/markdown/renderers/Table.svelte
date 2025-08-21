<script lang="ts">
  const { children } = $props();
</script>

<table class="w-full max-w-4xl divide-y [&>tbody]:divide-y">
  {@render children()}
</table>
