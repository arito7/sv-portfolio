<script lang="ts">
	import '../app.css';
	let { children } = $props();
	let current_lang = 'jp';
	const nav_links = ['Intro', 'Projects', 'Contact'];
</script>

<header>
	<div class="navwrapper">
		<h1>Yuji</h1>
		<nav class="nav">
			<ul class="nav__list">
				{#each nav_links as link}
					<li class="nav__list__item">
						<a class="nav__list__item__link" href="#{link}">{link}</a>
					</li>
				{/each}
			</ul>
		</nav>
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
		align-items: center;
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

	.nav {
		font-weight: 600;
		color: #272833;
		justify-self: end;
		background-color: red;
		&__list {
			display: flex;
		}
	}
</style>
