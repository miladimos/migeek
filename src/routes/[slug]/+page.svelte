<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
    <meta property="og:type" content="article"/>
    <meta property="og:title" content="article"/>
</svelte:head>


<article>
    <h1>{data.meta.title}</h1>
</article>
