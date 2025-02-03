<script>
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
</script>

<main>
	<section id="intro" class="section intro">
		<h2 class="section__title">Introduction</h2>
		<div class="section__connector"></div>
		<p>
			アメリカで20年以上過ごし、英語力を活かしてフリーランスの翻訳・通訳業務を行っています。TOEIC
			990点を取得しており、ビジネスや国際的な環境での円滑なコミュニケーションに強みがあります。
			加えて、Python、Excel、ウェブ開発（JavaScript、HTML、CSS、React、Svelte）を駆使し、業務の効率化やシステム開発をサポート。ExcelではVBAを用いて作業の自動化やデータ分析を行い、ReactやSvelteを活用してインタラクティブなウェブサイトを構築しています。
			自己開発でAndroidアプリも制作しており、幅広い技術を組み合わせて、クライアントの多様なニーズに応えています。今後もこれらのスキルを活かし、更なる成長を目指し貢献していきたいと考えています。
		</p>
	</section>

	<section class="section">
		<h2 class="section__title">Excel</h2>
	</section>

	<section id="projects" class="section projects">
		<h2 class="section__title">Projects</h2>
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

	<section class="section">
		<h2 class="section__title">Skills</h2>
	</section>
	<section class="section contact">
		<ul class="contact__list">
			<li class="contact__list__item">
				<a class="contact__list__item__link" href="https://github.com/arito7" target="_blank"
					><img class="contact__list__item__icon" src="./images/github.svg" alt="" /></a
				>
			</li>
			<li class="contact__list__item">
				<a class="contact__list__item__link" href="mailto:pon372591@gmail.com"
					><img class="contact__list__item__icon" src="./images/email.png" alt="" /></a
				>
			</li>
		</ul>
	</section>
</main>

<footer>
	<span>Copyright &copy; 2025 Yuji</span>
</footer>

<style lang="scss">
	.contact {
		&__list {
			justify-content: center;
			display: flex;
			align-items: center;
			&__item {
				margin-left: 16px;
				transition: transform 0.1s ease-in-out;
				&__icon {
					width: 32px;
				}
				&__icon:hover {
					filter: invert(100%);
				}
			}
			li:hover {
				transform: scale(1.1);
			}
		}
	}

	.intro {
		h2 {
			margin-bottom: 0;
		}
		.section__connector {
			margin: 0 auto;
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
		padding: 8px;
		section {
			padding: 16px;
			max-width: 1000px;
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
