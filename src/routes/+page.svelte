<script lang="ts">
	import { onMount } from 'svelte';

	const projects = [
		{
			platform: 'android',
			name: 'SDSGC App',
			description: `
				<p style='margin-bottom: 8px'>
				An app for managing game characters for the mobile game 
				<b><i>Seven Deadly Sins: Grand Cross</i></b>. 
				</p>
				<h3><u><b>Features</b></u></h3>
				<ul style='margin-bottom: 8px;'>
					<li>
					🟆 Voting system for users to rank certain characters.
					</li>
					<li>
					🟆 Runtime updates for new characters.
					</li>
					<li>
					🟆 User data backups to Firestore
					</li>
					<li>
					🟆 Data stored in Google Spreadsheets
					</li>
				</ul>
				<ul>
					<li>
						Platform: <b>Android (Playstore)</b>
					</li>
					<li>
						Language: <b>React Native</b>
					</li>
					<li>
						Framework: <b>Expo</b>
					</li>
					<li>
						Backend: <b>Firestore</b>
					</li>
				</ul>
				`,
			image_path: './images/sdsgc.png',
			languages: ['playstore', 'expo', 'react']
		},
		{
			platform: 'android',
			name: 'OSRS Prices',
			description: `
				<p style='margin-bottom: 8px'>
				An app to track real time prices for an in-game marketplace for the game <b><i>Runescape</i></b>.
				</p>
				<h3><u><b>Features</b></u></h3>
				<ul style='margin-bottom: 8px;'>
					<li>
					🟆 Hits the publicly available game API for realtime data.
					</li>
					<li>
					🟆 Graphs the data to selected time intervals.
					</li>
				</ul>
				<ul>
					<li>
						Platform: <b>Android (Playstore)</b>
					</li>
					<li>
						Language: <b>React Native</b>
					</li>
					<li>
						Framework: <b>Expo</b>
					</li>
				</ul>
			`,
			image_path: './images/osrs.png',
			languages: ['playstore', 'expo', 'react']
		}
	];
	const languages = { react: 'https://reactnative.dev', expo: 'https://expo.dev' };
	const nav_links = ['Intro', 'Tools', 'Projects', 'Contact'];

	let visible = $state(true);
	let mobileNavOpen = $state(false);

	let ctaBtn: HTMLButtonElement;
	let textArea: HTMLTextAreaElement;
	let introEle: HTMLHeadingElement;
	let toolEle: HTMLHeadingElement;
	let projectsEle: HTMLHeadingElement;
	let contactEle: HTMLHeadingElement;
	let navEle: HTMLUListElement;

	const onClickCta = () => {
		contactEle.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	const onClickMenu = () => {
		mobileNavOpen = true;
		window.document.body.style.overflow = 'hidden';
	};

	const onCloseMenu = () => {
		mobileNavOpen = false;
		window.document.body.style.overflow = 'auto';
	};

	const navLinkClick = (link: String) => {
		switch (link) {
			case 'Intro':
				introEle.scrollIntoView({ behavior: 'smooth', block: 'start' });
				break;
			case 'Tools':
				toolEle.scrollIntoView({ behavior: 'smooth', block: 'start' });
				break;
			case 'Projects':
				projectsEle.scrollIntoView({ behavior: 'smooth', block: 'start' });
				break;
			case 'Contact':
				contactEle.scrollIntoView({ behavior: 'smooth', block: 'start' });
				break;
		}
		if (mobileNavOpen) {
			onCloseMenu();
		}
		console.log(link);
	};

	onMount(() => {
		ctaBtn.onclick = onClickCta;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					visible = false;
				} else {
					visible = true;
				}
			});
		});
		observer.observe(textArea);
	});
</script>

<header>
	<div class="navwrapper">
		<nav class="nav">
			<h1>Yuji</h1>
			<ul bind:this={navEle} class={['nav__list', mobileNavOpen ? 'nav__list--open' : '']}>
				<button class="nav__close-btn" onclick={onCloseMenu}>
					<img src="./images/close.svg" width="32px" alt="" />
				</button>
				{#each nav_links as link}
					<li class="nav__list__item">
						<button class="nav__list__item__link" onclick={() => navLinkClick(link)}>{link}</button>
					</li>
				{/each}
			</ul>
			<button class="nav__menu-btn" onclick={onClickMenu}>
				<img src="./images/menu.svg" width="32px" alt="" />
			</button>
		</nav>
	</div>
</header>

<main>
	<button
		bind:this={ctaBtn}
		class={['cta_button', visible ? '' : 'cta_button--hidden']}
		style={mobileNavOpen ? 'display: none' : ''}
	>
		<span> お問い合わせ </span><img width="32px" src="./images/contact-mail.svg" alt="" />
	</button>

	<section id="intro" class="section intro">
		<h2 bind:this={introEle} class="section__title">Introduction</h2>
		<div class="section__connector"></div>
		<p>
			アメリカで20年以上過ごし、英語力を活かしてフリーランスの翻訳・通訳業務を行っています。TOEIC
			990点を取得しており、ビジネスや国際的な環境での円滑なコミュニケーションに強みがあります。
			加えて、Python、Excel、ウェブ開発（JavaScript、HTML、CSS、React、Svelte）を駆使し、業務の効率化やシステム開発をサポート。ExcelではVBAを用いて作業の自動化やデータ分析を行い、ReactやSvelteを活用してインタラクティブなウェブサイトを構築しています。
			自己開発でAndroidアプリも制作しており、幅広い技術を組み合わせて、クライアントの多様なニーズに応えています。今後もこれらのスキルを活かし、更なる成長を目指し貢献していきたいと考えています。
		</p>
	</section>

	<section class="section">
		<h2 bind:this={toolEle} class="section__title">ツール制作</h2>
	</section>

	<section id="projects" class="section projects">
		<h2 bind:this={projectsEle} class="section__title">Projects</h2>
		{#each projects as project}
			<div class="project">
				<div class="project__image">
					<img src={project.image_path} alt="SDSGC App" />
				</div>
				<div class="project__description">
					<h3>{project.name}</h3>
					{@html project.description}
				</div>
				<div class="project__languages">
					<ul>
						{#each project.languages as language}
							<li class="project__languages__language">
								<a href={languages[language]} target="_blank"
									><img src={`./images/${language}.svg`} alt={language} /></a
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</section>

	<section id="contact" class="section contact">
		<h2 bind:this={contactEle} class="section__title">Contact</h2>

		<form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
			<input class="contact-form__input" type="text" name="name" required placeholder="Name" />
			<input class="contact-form__input" type="email" name="email" required placeholder="Email" />
			<input type="hidden" name="access_key" value="b7d864e2-0a79-4044-ab01-60c6c87ea2b0" />
			<input type="checkbox" name="botcheck" class="hidden" style="display: none;" />
			<textarea
				bind:this={textArea}
				class="contact-form__input textarea"
				name="message"
				required
				placeholder="text"
				aria-multiline="true"
			></textarea>
			<button type="submit">
				<span> お問い合わせ </span>
				<img src="./images/arrow.svg" width="28px" alt="" />
			</button>
		</form>
	</section>

	<section class="section links">
		<ul class="links__list">
			<li class="links__list__item">
				<a class="links__list__item__link" href="https://github.com/arito7" target="_blank">
					<img class="links__list__item__icon" src="./images/github.svg" alt="" />
				</a>
			</li>
			<li class="links__list__item">
				<a class="links__list__item__link" href="mailto:pon372591@gmail.com"
					><img
						width="24px"
						class="links__list__item__icon"
						src="./images/contact-mail.svg"
						alt=""
					/></a
				>
			</li>
		</ul>
	</section>
</main>

<footer>
	<span>Copyright &copy; 2025 Yuji</span>
</footer>

<style lang="scss">
	header {
		display: flex;
		justify-content: center;

		.navwrapper {
			padding: 16px 32px;
			width: min(100%, 1025px);
			display: flex;
			align-items: center;
			justify-content: space-between;

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
			.nav {
				margin-left: auto;
				width: 100%;
				font-weight: 600;
				color: #272833;
				display: flex;
				justify-content: space-between;
				align-items: center;

				&__close-btn {
					display: none;
				}

				&__menu-btn {
					display: none;
					@media (max-width: 480px) {
						display: block;
					}
				}

				&__list {
					display: flex;
					justify-content: end;
					transition: all 0.2s ease-in-out;

					@media (max-width: 480px) {
						position: absolute;
						right: -150%;
						height: 100vh;
						width: 100vw;
						z-index: 100;
						top: 0;
						display: flex;
						position: fixed;
						flex-direction: column;
						padding: 32px 32px;
						justify-content: start;
						background-color: #fff;
						&--open {
							right: 0;
							& > button {
								display: block;
								margin-inline-start: auto;
								margin-bottom: 32px;
							}
						}
					}

					&__item {
						@media (max-width: 480px) {
							margin-bottom: 16px;
						}
						font-size: 24px;
						margin-left: 16px;
					}
				}
			}
		}
	}

	.contact {
		background-color: #fff;
		.contact-form {
			margin: 0 auto;
			max-width: 50%;
			background-color: #fff;
			padding: 8px;
			padding-bottom: 16px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			@media (max-width: 480px) {
				max-width: 100%;
			}
			&__input:focus {
				border-width: 3px;
				margin-top: 0;
				margin-bottom: 12px;
				border-color: #69e6e6;
			}
			&__input {
				margin-top: 6px;
				margin-bottom: 12px;
				border-radius: 2px;
				background-color: #e9e9e9;
				&::placeholder {
					color: #535353;
				}
			}

			textarea {
				resize: none;
				height: 200px;
			}
			button {
				background-color: #69e6e6;
				color: rgb(61, 61, 61);
				padding: 8px 8px 8px 12px;
				margin: 0 auto;
				transition: all 0.1s ease-in-out;
				display: flex;
				justify-items: center;
				align-items: center;
				&:hover {
				}
			}
		}
	}

	.links {
		&__list {
			justify-content: center;
			display: flex;
			align-items: center;
			margin: 32px auto;
			&__item {
				width: 32px;
				height: 32px;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 16px;
				background-color: #fff;
				margin-left: 16px;
				cursor: pointer;
				transition: transform 0.1s ease-in-out;
				&:hover {
					background-color: #69e6e6;
				}
			}

			li:hover {
				transform: scale(1.03);
			}
		}
	}
	.intro {
		h2 {
			margin-bottom: 0;
		}
		.section__connector {
			margin-right: auto;
			width: 8px;
			background: linear-gradient(#f0f0f0, #e9e9e9);
			height: 14px;
			padding: 0;
		}
		p {
			padding: 12px;
			background-color: #e9e9e9;
		}
	}

	.section {
		max-width: 1025px;
		width: 100%;
		&__title {
			background-color: #f0f0f0;
			padding: 8px;
			font-size: 2em;
			margin-bottom: 32px;
			font-weight: 600;
			color: #707070;
		}
	}

	.project {
		display: flex;
		position: relative;
		border-radius: 8px;
		box-shadow: none;
		transition: all 0.2s ease-in-out;
		margin-bottom: 32px;

		@media (max-width: 480px) {
			flex-direction: column;
			width: 100%;
			margin-bottom: 48px;
		}

		&__languages {
			position: absolute;
			bottom: 0;
			right: 0;
			margin: 8px;
			@media (max-width: 480px) {
				background-color: #313131;
				bottom: -24px;
				right: -12px;
				padding-right: 8px;
				padding-top: 8px;
				padding-bottom: 8px;
			}

			&__language {
				transition: all 0.2s ease-in-out;
				padding: 4px;
			}

			&__language:hover {
				scale: 0.9;
				border-radius: 4px;
				box-shadow:
					rgba(50, 50, 93, 0.25) 0px 7px 15px -3px inset,
					rgba(0, 0, 0, 0.3) 0px 4px 9px -4px inset;
			}

			ul {
				display: flex;

				li {
					margin-left: 8px;
					width: 32px;
					@media (max-width: 480px) {
						width: 24px;
					}
				}
			}
		}

		&:hover {
			box-shadow: 0 1px 4px 1px rgba(99, 99, 99, 0.226);
			@media (min-width: 1025px) {
				transform: translate(10px);
			}
		}

		&__image {
			img {
				height: 256px;
				width: 256px;
				object-fit: cover;
			}
			@media (max-width: 480px) {
				align-self: center;
				flex: 1 0 256px;
				width: 100%;
				img {
					width: 100%;
				}
			}
			display: flex;
			flex: 0 0 256px;
			align-items: center;
			justify-content: center;
			background-color: #252525;
			transition: inherit;
		}

		&__description {
			flex-grow: 1;
			transition: inherit;
			padding: 4px 16px 16px 16px;
			background-color: #fff;
			display: flex;
			flex-direction: column;

			h3 {
				font-weight: bolder;
				padding: 8px 0;
			}
		}
	}

	main {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		section {
			padding: 16px;
			max-width: 1000px;
		}
	}

	.cta_button {
		background: linear-gradient(270deg, #2f64b4, #307283);
		color: whitesmoke;
		padding: 16px;
		margin: 32px;
		right: 0;
		bottom: 0;
		position: fixed;
		z-index: 1000;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		display: flex;
		align-items: center;
		transition: all 0.2s ease-in-out;

		@media (max-width: 480px) {
			margin: 16px 8px;
		}
		&--hidden {
			right: -400px;
		}

		&:hover {
			transform: scale(1.01);
			background: linear-gradient(270deg, #307283, #2f64b4);
		}
		img {
			filter: invert(1);
			margin-left: 16px;
		}
	}

	footer {
		background-color: #313131;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 32px 0;
		font-size: 12px;
		color: #b9b9b9;
	}
</style>
