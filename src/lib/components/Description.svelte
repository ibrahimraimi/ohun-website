<script>
	import { Heart } from 'lucide-svelte';
</script>

<div class="mx-auto flex max-w-[1000px] flex-col gap-4">
	<p class="mx-auto py-16 text-xl text-inherit md:text-2xl">
		Ohun is an innovative synced lyrics provider for Linux, designed to enrich the music listening
		experience by displaying synchronized song lyrics. Developed using <a href="https://tauri.app/"
			>Tauri</a
		>
		and <a href="https://kit.svelte.dev/">Sveltekit</a>, Ohun promises a lightweight,
		memory-friendly application that seamlessly integrates with various music players and even web
		browsers. This essay will explore the features, technological framework, installation process,
		and development pathway of Ohun, highlighting its contribution to the niche yet essential domain
		of synchronized lyrics providers for Linux.
	</p>

	<div class="flex flex-col gap-5">
		<h3 class="font-bold text-2xl lg:text-3xl">Ohun is currently available on</h3>
		<div class="grid grid-cols-3">
			<div class="flex flex-col items-center gap-3">
				<img src="/img/linux.svg" class="h-20 w-20" alt="linux" />
				<p class="text-xl">Linux</p>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-5">
		<h3 class="font-bold text-2xl lg:text-3xl">There are currently plans for</h3>
		<div class="grid grid-cols-3">
			<div class="flex flex-col items-center gap-3">
				<img src="/img/windows.svg" class="h-20 w-20" alt="linux" />
				<p class="text-xl">Windows</p>
			</div>
			<div class="flex flex-col items-center gap-3">
				<img src="/img/mac.svg" class="h-20 w-20" alt="linux" />
				<p class="text-xl">Mac</p>
			</div>
			<div class="flex flex-col items-center gap-3">
				<img src="/img/chrome.svg" class="h-20 w-20" alt="linux" />
				<p class="text-xl">Chrome</p>
			</div>
		</div>
	</div>

	<span class="my-11 text-center"
		>Built with <span class="inline-block px-3"><Heart /> </span>by
		<a href="https://n3-rd.vercel.app">N3rd</a></span
	>
</div>
