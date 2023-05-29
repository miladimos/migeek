<script>
	import * as config from '$lib/config/config';
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content={config.description} />
</svelte:head>

<section>
	<h1 class="">
		Migeek		
	</h1>
</section>

<section>
	<ul>
		{#each data.posts as post}
		<li>
			<a href="{post.slug}">{post.title}</a>
		</li>
		{/each}
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
