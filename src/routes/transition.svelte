<script lang="ts">
	import { navigating } from '$app/stores';
	import { fade } from 'svelte/transition';
    
	export let url = '';
</script>

{#key url}
	<div class="" in:fade>
		<slot />
	</div>
{/key}
