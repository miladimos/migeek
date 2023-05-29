<script>
	import { description, title } from '$lib/config/config';
</script>

<svelte:head>
	<title>About {title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class="text-column">
	<h1>About {title}</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

</div>
