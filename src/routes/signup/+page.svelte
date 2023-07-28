<script>
  import Nav from '$lib/components/Nav.svelte';
  function newOnClick() {
    window.open('https://forms.gle/wNGic7o7ViNqgjYp9', '__blank');
  }
  function existingOnClick() {
    window.open('https://forms.gle/4FyDGVEfHJQfw3d28', '__blank');
  }
</script>

<div class="w-screen h-screen relative">
  <Nav />
  <div class="absolute bottom-1/2 w-full px-4 flex flex-col items-center">
    <h1 class="text-4xl font-bold">Signups</h1>
    <button
      on:click={existingOnClick}
      class="mt-4 md:mt-8 block w-full max-w-lg font-bold font-montserrat rounded-lg text-md tracking-wide border-black border-4 bg-white text-black py-2 px-6"
      >Sign up for existing Trimegah clients</button
    >
    <button
      on:click={newOnClick}
      class="mt-2 block w-full max-w-lg font-bold font-montserrat rounded-lg text-md tracking-wide border-black border-4 bg-signature text-black py-2 px-6"
      >Sign up for new clients</button
    >
  </div>
</div>
