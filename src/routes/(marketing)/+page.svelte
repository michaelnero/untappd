<script lang="ts">
  import Logo from "$lib/Logo.svelte";
</script>

<div class="py-16 sm:py-24">
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="relative isolate overflow-hidden bg-untappd-dark-500 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
      <div class="mx-auto max-w-xl text-white flex flex-row gap-3 pb-6">
        <Logo class="h-8 w-auto flex-none" />
        <h1 class="text-3xl font-semibold">Untappd.</h1>
      </div>
      
      <h2 class="mx-auto max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">We're launching our website soon.</h2>
      <p class="mx-auto mt-2 max-w-xl text-lg leading-8 text-untappd-dark-100">We can't wait to share it with you, so please check back soon for the official launch date.</p>
      <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
            <stop stop-color="#ffdb57" />
            <stop offset="1" stop-color="#039aff" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
</div>