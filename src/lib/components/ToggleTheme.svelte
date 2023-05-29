<script lang="ts">
	import { theme, toggleTheme } from '$lib/theme';
</script>

<button on:click={toggleTheme}>
	{#if theme === 'dark'}
		dark
	{:else}
		light
	{/if}
</button>
