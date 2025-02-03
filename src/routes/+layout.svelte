<script lang="ts">
	import '../app.css';
	let { children } = $props();
	let current_lang = 'jp';
</script>

<header>
	<div class="navwrapper">
		<h1>Yuji</h1>
		<nav></nav>
		<div class="navwrapper__languages">
			<button>jp</button>
			<span>/</span>
			<button>en</button>
		</div>
	</div>
</header>

{@render children()}

<style lang="scss">
	header {
		display: flex;
		justify-content: center;
	}

	.navwrapper {
		justify-content: space-between;
		padding: 16px 32px;
		max-width: 1025px;
		flex: 1 1 0;
		display: flex;
		h1 {
			color: #525252;
			font-weight: bolder;
			font-size: 64px;
		}

		&__languages {
			align-items: center;
			display: flex;
			span {
				margin: 0 4px;
			}
		}
	}
</style>
