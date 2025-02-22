<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let ctaBtnVisible = $state(true);

	let ctaBtn: HTMLButtonElement;
	let introEle: HTMLElement;
	let toolEle: HTMLElement;
	let projectsEle: HTMLElement;
	let contactEle: HTMLElement;
	let navEle: HTMLUListElement;

	const links = ['Intro', 'Tools', 'Projects', 'Contact️'];

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
				console.log(entry.target);
				if (entry.isIntersecting) {
					switch (entry.target.tagName.toLowerCase()) {
						case 'h2':
							entry.target.classList.add('show--underline');
							break;
						default:
							entry.target.classList.add('show--slide-in');
					}
				}
			});
		});
		hidden.forEach((e) => ob.observe(e));
	}
</script>

<svelte:window bind:scrollY />
<div class="hide--underline hide--slide-in show hide show--underline show--slide-in hidden"></div>
<header bind:this={header} class="header header--show header--top w-full text-slate-200">
	<div class="mx-auto flex h-32 max-w-5xl items-center justify-center text-primary-content">
		<nav class="flex w-full items-center justify-between p-6">
			<h1 class="inline-block text-3xl font-bold text-primary">Yuji️🗾</h1>
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

	<section
		bind:this={introEle}
		id="intro"
		class="flex min-h-screen w-full flex-col items-center justify-center"
	>
		<div class="hero min-h-screen bg-base-200">
			<div class="hero-content w-screen text-center">
				<div class="flex w-full flex-col items-center justify-center gap-12">
					<h1 class="mt-8 text-5xl font-bold text-secondary">Hello there 👋</h1>
					<div class="mockup-code w-[80%] bg-slate-700 px-8 pb-12">
						<p class="text-slate-300">
							アメリカで20年以上過ごし、英語力を活かしてフリーランス
							の翻訳・通訳業務を行っています。 TOEIC990点を取得しており、
							ビジネスや国際的な環境での円滑なコミュニケーションに強みがあります。
							加えて、Python、Excel、ウェブ開発（JavaScript、HTML、CSS、React、Svelte）
							を駆使し、業務の効率化やシステム開発をサポート。ExcelではVBAを用いて作業の自動化やデータ分析を行い、
							ReactやSvelteを活用してインタラクティブなウェブサイトを構築しています。
							自己開発でAndroidアプリも制作しており、
							幅広い技術を組み合わせて、クライアントの多様なニーズに応えています。今後もこれらのスキルを活かし、
							更なる成長を目指し貢献していきたいと考えています。
						</p>
					</div>
					<button onclick={onClickCta} class="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
		<div
			class="hide hide--slide-in mx-auto flex max-w-5xl grow flex-col items-center justify-center p-9"
		>
			<div class="flex w-full justify-center">
				<button
					aria-label="Scroll to Tools"
					class="relative block h-12 w-12"
					onclick={() => {
						toolEle.scrollIntoView({ behavior: 'smooth', block: 'start' });
					}}
				>
					<div class="absolute right-0 h-2 w-8 -rotate-45 rounded bg-slate-300"></div>
					<div class="absolute left-0 h-2 w-8 rotate-45 rounded bg-slate-300"></div>
				</button>
			</div>
		</div>
	</section>

	<!-- tool -->
	<section bind:this={toolEle} class="tools flex min-h-screen flex-col items-center justify-center">
		<div class="hide hide--slide-in mx-auto flex max-w-5xl grow flex-col gap-8 p-9">
			<div class="card self-end bg-base-300">
				<div class="card-body">
					<h2
						class="hide hide--underline inline-block w-fit self-end text-3xl font-semibold text-secondary before:bg-secondary md:text-4xl"
					>
						Tool 🔧<span class="block text-3xl">ツール制作</span>
					</h2>
					<ul class="mt-4 flex flex-col items-end justify-end text-xs text-slate-400">
						<li>Pythonを用いたカスタムツール開発</li>
						<li>Excel業務の自動化・効率化</li>
						<li>データ分析・処理の最適化</li>
						<li>WebスクレイピングやAPI連携による情報収集</li>
					</ul>
				</div>
			</div>
			<div class="flex grow flex-col items-center justify-center gap-8">
				<div class="chat chat-start">
					<div class="chat-bubble chat-bubble-accent">
						「画像PDF文書をテキスト化する、編集可能なPDF（テキストPDF）として変換するツールが欲しい」
					</div>
				</div>
				<div class="chat chat-end">
					<div class="chat-bubble chat-bubble-success">
						エクセルの入力項目を減らしたい、効率化したい」
					</div>
				</div>
			</div>
			<div class="flex w-full justify-center">
				<button
					aria-label="Scroll to Projects"
					class="relative block h-12 w-12"
					onclick={() => {
						projectsEle.scrollIntoView({ behavior: 'smooth', block: 'start' });
					}}
				>
					<div class="absolute right-0 h-2 w-8 -rotate-45 rounded bg-slate-300"></div>
					<div class="absolute left-0 h-2 w-8 rotate-45 rounded bg-slate-300"></div>
				</button>
			</div>
		</div>
	</section>

	<section bind:this={projectsEle} id="projects" class="min-h-screen w-full">
		<div class="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-9">
			<h2 class="hide hide--underline text-4xl font-semibold text-secondary before:bg-primary">
				Projects
			</h2>
			<!-- project1 -->
			<div class="card card-side bg-base-200">
				<div class="card-body gap-8">
					<div class="flex flex-col gap-8 md:flex-row">
						<div class="avatar">
							<div class="mask mask-hexagon w-60">
								<enhanced:img class="object-cover" src="/static/images/sdsgc.png" alt="" />
							</div>
						</div>
						<div class="flex flex-col gap-4">
							<h3 class="mx-444 card-title text-3xl text-primary">SDSGC App</h3>
							<p style="margin-bottom: 8px">
								An app for managing game characters for the mobile game
								<b><i>Seven Deadly Sins: Grand Cross</i></b>.
							</p>
							<h3>✨<u><b>Features</b></u>✨</h3>
							<ul style="margin-bottom: 8px;">
								<li>♦️ Voting system for users to rank certain characters.</li>
								<li>♦️ Runtime updates for new characters.</li>
								<li>️♦️️ User data backups to Firestore</li>
								<li>♦️ Data stored in Google Spreadsheets</li>
							</ul>
							<div class="stats shadow">
								<div class="stat bg-base-300">
									<div class="stat-title">Downloads</div>
									<div class="stat-value text-secondary">50k</div>
									<div class="stat-desc">MAU: ~2k</div>
								</div>
							</div>
						</div>
					</div>
					<table class="table table-zebra bg-base-100">
						<tbody>
							<tr>
								<th>Platform</th>
								<td
									>Android<img class=" inline-block h-8 w-8" src="/images/android.svg" alt="" /></td
								>
							</tr>
							<tr>
								<th>Language</th>
								<td
									>React Native <img
										src="/images/react.svg"
										class="inline-block h-8 w-8"
										alt=""
									/></td
								>
							</tr>
							<tr>
								<th>Framework</th>
								<td>Expo <img src="/images/expo.svg" class="inline-block h-8 w-8" alt="" /></td>
							</tr>
							<tr>
								<th>Backend</th>
								<td
									>Supabase
									<svg
										xmlns="http://www.w3.org/2000/svg"
										x="0px"
										class="inline-block h-8 w-8"
										y="0px"
										width="100"
										height="100"
										viewBox="0 0 48 48"
									>
										<g id="Ð¡Ð»Ð¾Ð¹_1"
											><linearGradient
												id="SVGID_1__sH0rW2TvYdr9_gr1"
												x1="14.073"
												x2="14.073"
												y1="8.468"
												y2="36.033"
												gradientUnits="userSpaceOnUse"
												><stop offset="0" stop-color="#7dffce"></stop><stop
													offset="1"
													stop-color="#50c08d"
												></stop></linearGradient
											><path
												fill="url(#SVGID_1__sH0rW2TvYdr9_gr1)"
												d="M24.2,30V6.3c0-1.8-2.3-2.6-3.4-1.2L4.5,25.9c-1.3,1.7-0.1,4.1,2,4.1H24.2z"
											></path><linearGradient
												id="SVGID_00000140728474547789280440000018204366184369975479__sH0rW2TvYdr9_gr2"
												x1="34.249"
												x2="34.249"
												y1="48.404"
												y2="19.425"
												gradientUnits="userSpaceOnUse"
												><stop offset="0" stop-color="#7dffce"></stop><stop
													offset="1"
													stop-color="#50c08d"
												></stop></linearGradient
											><path
												fill="url(#SVGID_00000140728474547789280440000018204366184369975479__sH0rW2TvYdr9_gr2)"
												d="M24,18.4v23.7c0,1.8,2.4,2.6,3.5,1.2 l16.4-20.7c1.3-1.7,0.1-4.1-2.1-4.1H24z"
											></path></g
										>
									</svg></td
								>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="card card-side bg-base-200">
				<div class="card-body gap-8">
					<div class="flex flex-col gap-8 md:flex-row">
						<div class="avatar">
							<div class="mask mask-hexagon w-60">
								<enhanced:img class="object-cover" src="/static/images/osrs.png" alt="" />
							</div>
						</div>
						<div class="flex flex-col gap-4">
							<h3 class="mx-444 card-title text-2xl text-primary">OSRS App</h3>
							<p style="margin-bottom: 8px">
								An app to track real time prices for an in-game marketplace for the game
								<b><i>Old School Runescape</i></b>.
							</p>
							<h3>✨<u><b>Features</b></u>✨</h3>
							<ul style="margin-bottom: 8px;">
								<li>♦️ Hits the publicly available game API for realtime data.</li>
								<li>♦️ Graphs the data to selected time intervals.</li>
							</ul>
							<div class="stats shadow">
								<div class="stat bg-base-300">
									<div class="stat-title">Downloads</div>
									<div class="stat-value text-secondary">10k</div>
									<div class="stat-desc">MAU: ~1k</div>
								</div>
							</div>
						</div>
					</div>
					<div class="">
						<table class="table table-zebra bg-base-100">
							<tbody>
								<tr>
									<th>Platform</th>
									<td
										>Android<img
											class=" inline-block h-8 w-8"
											src="/images/android.svg"
											alt=""
										/></td
									>
								</tr>
								<tr>
									<th>Language</th>
									<td
										>React Native <img
											src="/images/react.svg"
											class="inline-block h-8 w-8"
											alt=""
										/></td
									>
								</tr>
								<tr>
									<th>Framework</th>
									<td>Expo <img src="/images/expo.svg" class="inline-block h-8 w-8" alt="" /></td>
								</tr>
								<tr>
									<th>Backend</th>
									<td
										>Supabase
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											class="inline-block h-8 w-8"
											y="0px"
											width="100"
											height="100"
											viewBox="0 0 48 48"
										>
											<g id="Ð¡Ð»Ð¾Ð¹_1"
												><linearGradient
													id="SVGID_1__sH0rW2TvYdr9_gr1"
													x1="14.073"
													x2="14.073"
													y1="8.468"
													y2="36.033"
													gradientUnits="userSpaceOnUse"
													><stop offset="0" stop-color="#7dffce"></stop><stop
														offset="1"
														stop-color="#50c08d"
													></stop></linearGradient
												><path
													fill="url(#SVGID_1__sH0rW2TvYdr9_gr1)"
													d="M24.2,30V6.3c0-1.8-2.3-2.6-3.4-1.2L4.5,25.9c-1.3,1.7-0.1,4.1,2,4.1H24.2z"
												></path><linearGradient
													id="SVGID_00000140728474547789280440000018204366184369975479__sH0rW2TvYdr9_gr2"
													x1="34.249"
													x2="34.249"
													y1="48.404"
													y2="19.425"
													gradientUnits="userSpaceOnUse"
													><stop offset="0" stop-color="#7dffce"></stop><stop
														offset="1"
														stop-color="#50c08d"
													></stop></linearGradient
												><path
													fill="url(#SVGID_00000140728474547789280440000018204366184369975479__sH0rW2TvYdr9_gr2)"
													d="M24,18.4v23.7c0,1.8,2.4,2.6,3.5,1.2 l16.4-20.7c1.3-1.7,0.1-4.1-2.1-4.1H24z"
												></path></g
											>
										</svg></td
									>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="flex w-full justify-center">
				<button
					aria-label="Scroll To Contacts"
					class="relative block h-12 w-12"
					onclick={() => {
						contactEle.scrollIntoView({ behavior: 'smooth', block: 'start' });
					}}
				>
					<div class="absolute right-0 h-2 w-8 -rotate-45 rounded bg-slate-300"></div>
					<div class="absolute left-0 h-2 w-8 rotate-45 rounded bg-slate-300"></div>
				</button>
			</div>
		</div>
	</section>

	<section
		bind:this={contactEle}
		id="contact"
		class="flex min-h-screen w-full flex-col items-center justify-center bg-secondary"
	>
		<div
			class="hide hide--slide-in mx-auto flex w-full max-w-5xl grow flex-col items-center justify-center gap-9 p-9"
		>
			<h2
				class="hide hide--underline text-4xl font-semibold text-secondary-content before:bg-slate-800"
			>
				Contact ☎
			</h2>
			<form
				class="flex w-full grow flex-col items-center justify-center gap-4 lg:w-1/2"
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
					<span class="text-slate-900"> お問い合わせ </span>
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
		&--slide-in {
			transform: translateX(-100%);
			opacity: 0;
			filter: blur(5px);
			transition: all 0.8s;
		}
		&--underline {
			position: relative;
			width: fit-content;
			&::before {
				position: absolute;
				bottom: -8px;
				left: 0;
				opacity: 0;
				transition: all 0.3s;
				border-radius: 4px;
				width: 0%;
				height: 4px;
				content: '';
			}
		}
	}

	.show {
		&--slide-in {
			transform: translateX(0);
			opacity: 1;
			filter: blur(0);
		}
		&--underline::before {
			opacity: 1 !important;
			transition-delay: 500ms;
			width: 100% !important;
		}
	}
</style>
