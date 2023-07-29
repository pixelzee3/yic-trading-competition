<script>
  import Nav from '$lib/components/Nav.svelte';
</script>

<div class="w-screen h-screen relative">
  <Nav />
  <div class="absolute bottom-1/2 w-full px-4 flex flex-col items-center">
    <h1 class="text-4xl font-bold">Signups</h1>
    <a
      class="text-center mt-4 md:mt-8 block w-full max-w-lg font-bold font-montserrat rounded-lg text-md tracking-wide border-black border-4 bg-white text-black py-2 px-6"
      href="https://forms.gle/4FyDGVEfHJQfw3d28"
      target="_blank">Sign up for existing Trimegah clients</a
    >
    <a
      class="text-center mt-2 block w-full max-w-lg font-bold font-montserrat rounded-lg text-md tracking-wide border-black border-4 bg-signature text-black py-2 px-6"
      href="https://forms.gle/wNGic7o7ViNqgjYp9"
      target="_blank">Sign up for new clients</a
    >
  </div>
</div>
