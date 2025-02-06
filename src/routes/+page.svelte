<script lang="ts">
	import { onMount } from 'svelte';
	import { projects, languages } from '../data';
	import { browser } from '$app/environment';
	import ContactSection from '../ContactSection.svelte';
	import Footer from '../Footer.svelte';

	let visible = $state(true);

	let ctaBtn: HTMLButtonElement;
	let introEle: HTMLHeadingElement;
	let toolEle: HTMLHeadingElement;
	let projectsEle: HTMLHeadingElement;
	let contactEle: HTMLHeadingElement;
	let navEle: HTMLUListElement;

	const links = ['Intro', 'Tools', 'Projects', 'Contact'];

	const onClickCta = () => {
		contactEle.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	let scrollY = $state(0);
	let lastScrollY: number;
	let mobileNavOpen = $state(false);

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
	};

	let header: HTMLElement;
	$effect(() => {
		if (scrollY == 0) {
			header?.classList.add('header--top');
		} else {
			header?.classList.remove('header--top');
		}

		if (scrollY > lastScrollY) {
			console.log('scrolling down');
			header?.classList.replace('header--show', 'header--hide');
			//scrolling down
		} else {
			console.log('scrolling up');
			header?.classList.replace('header--hide', 'header--show');
			// scrolling up
		}

		lastScrollY = scrollY;
	});

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
		observer.observe(contactEle);
	});

	if (browser) {
		const hidden = document.querySelectorAll('.section--hidden');
		const ob = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('section--show');
				}
			});
		});
		hidden.forEach((e) => ob.observe(e));
	}
</script>

<div style="display:none;" class="header--hide section--show"></div>
<svelte:window bind:scrollY />
<header bind:this={header} class="header header--show header--top">
	<div class="navwrapper">
		<nav class="nav">
			<h1>Yuji</h1>
			<ul bind:this={navEle} class={['nav__list', mobileNavOpen ? 'nav__list--open' : '']}>
				<button class="nav__close-btn" onclick={onCloseMenu}>
					<img src="./images/close.svg" width="32px" alt="" />
				</button>
				{#each links as link}
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

	<section id="intro" class="section section--hidden intro">
		<h2 bind:this={introEle} class="section__title">Introduction</h2>
		<div class="section__connector"></div>
		<p>
			アメリカで20年以上過ごし、英語力を活かしてフリーランスの翻訳・通訳業務を行っています。TOEIC
			990点を取得しており、ビジネスや国際的な環境での円滑なコミュニケーションに強みがあります。
			加えて、Python、Excel、ウェブ開発（JavaScript、HTML、CSS、React、Svelte）を駆使し、業務の効率化やシステム開発をサポート。ExcelではVBAを用いて作業の自動化やデータ分析を行い、ReactやSvelteを活用してインタラクティブなウェブサイトを構築しています。
			自己開発でAndroidアプリも制作しており、幅広い技術を組み合わせて、クライアントの多様なニーズに応えています。今後もこれらのスキルを活かし、更なる成長を目指し貢献していきたいと考えています。
		</p>
	</section>

	<section class="section section--hidden tools">
		<h2 bind:this={toolEle} class="section__title section__title--light">Tool [ツール制作]</h2>
	</section>

	<section id="projects" class="section section--hidden projects">
		<h2 bind:this={projectsEle} class="section__title">Projects</h2>
		{#each projects as project}
			<div class="project">
				<div class="project__image">
					{#if project.name == 'SDSGC App'}
						<enhanced:img src="/static/images/sdsgc.png" alt={project.name} />
					{:else}
						<enhanced:img src="/static/images/osrs.png" alt={project.name} />
					{/if}
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

	<section id="contact" class="section section--hidden contact">
		<h2 bind:this={contactEle} class="section__title">Contact</h2>
		<ContactSection />
	</section>
</main>

<Footer />
