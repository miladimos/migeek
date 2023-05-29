<script>
	import '../app.postcss';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Transition from './transition.svelte'

	import './styles.css';

	export let data;
</script>

<div class="app">
	<Header />

	<main>
		<Transition url={data.url}>
			<slot />
		</Transition>
			
	</main>

	<Footer></Footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>
