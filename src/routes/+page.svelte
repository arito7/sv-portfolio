<script lang="ts">
	import { onMount } from 'svelte';
	import { projects, languages } from '../data';
	import { browser } from '$app/environment';

	let ctaBtnVisible = $state(true);

	let ctaBtn: HTMLButtonElement;
	let introEle: HTMLElement;
	let toolEle: HTMLElement;
	let projectsEle: HTMLElement;
	let contactEle: HTMLElement;
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
					ctaBtnVisible = false;
				} else {
					ctaBtnVisible = true;
				}
			});
		});
		observer.observe(contactEle);
	});

	if (browser) {
		const hidden = document.querySelectorAll('.hide');
		const ob = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				}
			});
		});
		hidden.forEach((e) => ob.observe(e));
	}
</script>

<svelte:window bind:scrollY />
<div class="show hide hidden"></div>
<header bind:this={header} class="header header--show header--top w-full text-slate-200">
	<div class="mx-auto flex h-32 max-w-5xl items-center justify-center text-primary-content">
		<nav class="flex w-full items-center justify-between p-6">
			<h1 class="inline-block text-3xl font-bold text-slate-200">Yuji</h1>
			<ul
				bind:this={navEle}
				class={[
					mobileNavOpen ? '!translate-x-0 !opacity-100 !blur-0' : '',
					'fixed left-0 top-0 z-30 flex h-screen w-screen translate-x-full flex-col items-start justify-start gap-8 bg-secondary p-8 opacity-0 blur-md transition-all duration-300 lg:static lg:flex lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:bg-transparent lg:p-0 lg:text-slate-300 lg:opacity-100 lg:blur-0'
				]}
			>
				<button
					aria-label="Close"
					class={['self-end', mobileNavOpen ? 'w-auto' : 'hidden']}
					onclick={onCloseMenu}
				>
					<div class="relative mt-6 w-8">
						<div class="absolute h-1 w-7 rotate-45 rounded-md bg-slate-900"></div>
						<div class="h-1 w-7 -rotate-45 rounded-md bg-slate-900"></div>
					</div>
				</button>
				{#each links as link}
					<li class="relative">
						<button
							class="font-semibold before:absolute before:-bottom-1 before:left-0 before:block before:h-1 before:w-0 before:bg-slate-300 before:transition-all before:duration-300 before:content-[''] hover:text-secondary before:hover:w-full before:hover:bg-secondary"
							onclick={() => navLinkClick(link)}>{link}</button
						>
					</li>
				{/each}
			</ul>
			<button class="lg:hidden" aria-label="Menu" onclick={onClickMenu}>
				<div class="h-6 w-6">
					<div class="mb-1 h-1 rounded bg-slate-300"></div>
					<div class="mb-1 h-1 rounded bg-slate-300"></div>
					<div class="mb-1 h-1 rounded bg-slate-300"></div>
				</div>
			</button>
		</nav>
	</div>
</header>

<main class="relative">
	<button
		bind:this={ctaBtn}
		class={[
			'btn btn-secondary fixed bottom-8 right-4 z-20 flex text-secondary-content drop-shadow-xl transition-all hover:scale-125',
			mobileNavOpen ? 'hidden' : 'block',
			ctaBtnVisible ? '' : 'hidden'
		]}
	>
		<span> お問い合わせ </span><img class="w-6" src="./images/contact-mail.svg" alt="" />
	</button>

	<section bind:this={introEle} id="intro" class="w-full">
		<div class="hide mx-auto flex max-w-5xl flex-col justify-center p-9">
			<h2
				class="relative mb-8 inline-block w-auto text-4xl font-semibold text-primary before:absolute before:-bottom-2 before:h-1 before:w-0 before:bg-primary before:transition-all before:duration-500 before:content-[''] before:hover:w-full"
			>
				Introduction
			</h2>
			<p>
				アメリカで20年以上過ごし、英語力を活かしてフリーランスの翻訳・通訳業務を行っています。TOEIC
				990点を取得しており、ビジネスや国際的な環境での円滑なコミュニケーションに強みがあります。
			</p>
			<p>
				加えて、<b>Python、Excel、ウェブ開発（JavaScript、HTML、CSS、React、Svelte）</b
				>を駆使し、業務の効率化やシステム開発をサポート。ExcelではVBAを用いて作業の自動化やデータ分析を行い、ReactやSvelteを活用してインタラクティブなウェブサイトを構築しています。
			</p>
			<p>
				自己開発でAndroidアプリも制作しており、幅広い技術を組み合わせて、クライアントの多様なニーズに応えています。今後もこれらのスキルを活かし、更なる成長を目指し貢献していきたいと考えています。
			</p>
		</div>
	</section>

	<section bind:this={toolEle} class="section section--hidden tools">
		<div class="mx-auto max-w-5xl p-9">
			<h2 class="text-4xl font-semibold">
				Tool <span class="text-3xl">ツール制作</span>
			</h2>
		</div>
	</section>

	<section bind:this={projectsEle} id="projects" class="min-h-screen w-full bg-slate-900">
		<div class="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-9">
			<h2 class="text-4xl font-semibold text-primary">Projects</h2>
			<div
				class="hide flex flex-col items-center justify-center gap-8 lg:min-h-svh lg:flex-row lg:items-start"
			>
				{#each projects as project}
					<div class="card card-compact bg-slate-700 shadow-xl lg:mx-0 lg:w-64">
						<figure>
							{#if project.name == 'SDSGC App'}
								<enhanced:img
									class="h-64 object-cover"
									src="/static/images/sdsgc.png"
									alt={project.name}
								/>
							{:else}
								<enhanced:img
									class="h-64 object-cover"
									src="/static/images/osrs.png"
									alt={project.name}
								/>
							{/if}
						</figure>
						<div class="card-body">
							<h2 class="card-title text-secondary">{project.name}</h2>
							{@html project.description}
							<div class="card-actions justify-end">
								<ul class="flex gap-2">
									{#each project.languages as language}
										<li class="project__languages__language">
											<a href={languages[language]} target="_blank"
												><img class="w-8" src={`./images/${language}.svg`} alt={language} /></a
											>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section bind:this={contactEle} id="contact" class="hide h-screen w-full bg-secondary">
		<div class="mx-auto flex max-w-5xl flex-col items-center gap-9 p-9">
			<h2 class="self-start text-4xl font-semibold text-secondary-content">Contact</h2>
			<form
				class="flex w-full grow flex-col justify-between gap-4 lg:w-1/2"
				action="https://api.web3forms.com/submit"
				method="POST"
			>
				<input type="hidden" name="access_key" value="b7d864e2-0a79-4044-ab01-60c6c87ea2b0" />
				<input type="checkbox" name="botcheck" class="hidden" style="display: none;" />
				<input
					class="input input-primary w-full"
					type="text"
					name="name"
					required
					placeholder="Name"
				/>
				<input
					class="input input-primary w-full"
					type="email"
					name="email"
					required
					placeholder="Email"
				/>
				<textarea
					class="textarea textarea-primary h-72 w-full"
					name="message"
					required
					placeholder=""
					aria-multiline="true"
				></textarea>
				<button type="submit" class="btn btn-primary self-end justify-self-end">
					<span> お問い合わせ </span>
					<img src="/images/arrow.svg" width="28px" alt="" />
				</button>
			</form>
		</div>
	</section>
</main>

<!-- <Footer /> -->

<footer class="footer bg-neutral p-10 text-neutral-content">
	<aside>
		<p>
			Yuji
			<br />
			Copyright &copy; 2025
		</p>
	</aside>
	<nav>
		<h6 class="footer-title">Social</h6>
		<div class="grid grid-flow-col gap-4">
			<a aria-label="Email" href="/">
				<svg
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					fill="#ffffff"
					stroke="#ffffff"
					><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g><g id="SVGRepo_iconCarrier">
						<defs>
							<style>
								.cls-1,
								.cls-2 {
									fill: none;
									stroke: #ffffff;
									stroke-linecap: round;
									stroke-width: 2.4;
								}
								.cls-1 {
									stroke-linejoin: bevel;
								}
								.cls-2 {
									stroke-linejoin: round;
									fill-rule: evenodd;
								}
							</style>
						</defs>
						<g id="ic-contact-mail">
							<rect class="cls-1" x="2" y="5" width="20" height="14" rx="2"></rect>
							<path class="cls-2" d="M2.58,5.59l8.23,8.22a2,2,0,0,0,2.83,0l8-8"></path>
						</g>
					</g></svg
				>
			</a>
			<a aria-label="Link to Github" href="https://www.github.com/arito7" target="_blank">
				<svg
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g><g id="SVGRepo_iconCarrier">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M20.9992 5.95846C21.0087 6.565 20.9333 7.32649 20.8658 7.8807C20.8395 8.09686 20.8037 8.27676 20.7653 8.42453C21.6227 10.01 22 11.9174 22 14C22 16.4684 20.8127 18.501 18.9638 19.8871C17.1319 21.2605 14.6606 22 12 22C9.33939 22 6.86809 21.2605 5.0362 19.8871C3.18727 18.501 2 16.4684 2 14C2 11.9174 2.37732 10.01 3.23472 8.42452C3.19631 8.27676 3.16055 8.09685 3.13422 7.8807C3.06673 7.32649 2.99133 6.565 3.00081 5.95846C3.01149 5.27506 3.10082 4.5917 3.19988 3.91379C3.24569 3.60028 3.31843 3.30547 3.65883 3.11917C4.00655 2.92886 4.37274 2.99981 4.73398 3.1021C5.95247 3.44713 7.09487 3.93108 8.16803 4.51287C9.2995 4.17287 10.5783 4 12 4C13.4217 4 14.7005 4.17287 15.832 4.51287C16.9051 3.93108 18.0475 3.44713 19.266 3.1021C19.6273 2.99981 19.9935 2.92886 20.3412 3.11917C20.6816 3.30547 20.7543 3.60028 20.8001 3.91379C20.8992 4.5917 20.9885 5.27506 20.9992 5.95846ZM20 14C20 12.3128 19.6122 10 17.5 10C16.5478 10 15.6474 10.2502 14.7474 10.5004C13.8482 10.7502 12.9495 11 12 11C11.0505 11 10.1518 10.7502 9.25263 10.5004C8.35261 10.2502 7.45216 10 6.5 10C4.39379 10 4 12.3197 4 14C4 15.7636 4.82745 17.231 6.23588 18.2869C7.66135 19.3556 9.69005 20 12 20C14.3099 20 16.3386 19.3555 17.7641 18.2869C19.1726 17.231 20 15.7636 20 14ZM10 14.5C10 15.8807 9.32843 17 8.5 17C7.67157 17 7 15.8807 7 14.5C7 13.1193 7.67157 12 8.5 12C9.32843 12 10 13.1193 10 14.5ZM15.5 17C16.3284 17 17 15.8807 17 14.5C17 13.1193 16.3284 12 15.5 12C14.6716 12 14 13.1193 14 14.5C14 15.8807 14.6716 17 15.5 17Z"
							fill="#ffffff"
						></path>
					</g></svg
				>
			</a>
		</div>
	</nav>
</footer>

<style lang="scss">
	.hide {
		transform: translateX(-100%);
		opacity: 0;
		filter: blur(5px);
		transition: all 0.8s;
	}

	.show {
		transform: translateX(0);
		opacity: 1;
		filter: blur(0);
	}
</style>
