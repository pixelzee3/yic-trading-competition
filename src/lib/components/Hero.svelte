<script>
  import Nav from '$lib/components/Nav.svelte';
  import Block from './Block.svelte';
</script>

<div class="relative z-20 w-full">
  <!-- BG Video -->
  <div class="absolute top-0 left-0 -z-10 w-full h-full">
    <!-- Vignette effect on top -->
    <div
      class="w-full h-full shadow-[0_0_80px_30px_black_inset] md:shadow-[0_0_100px_70px_black_inset]"
    >
      <!-- Video positioned behind the vignette effect -->
      <video
        loop
        autoplay
        muted
        class="w-full h-full object-cover object-left relative -z-20 brightness-50"
      >
        <source src="/videos/candlestick.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
  <!-- Actual header content -->
  <Nav />
  <header class="py-52">
    <Block>
      <!-- Block content here -->
    </Block>
  </header>
</div>
