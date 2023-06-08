<script>
  import Block from '$lib/components/Block.svelte';
  import SignUpButton from '$lib/components/SignUpButton.svelte';
</script>

<Block>
  <h2 class="leading-10 lg:leading-[75px] text-center tracking-widest">
    <span class="font-light md:text-lg">Total prize pool of:</span><br /><span
      class="font-bold text-3xl md:text-4xl lg:text-5xl">IDR 50,000,000</span
    >
  </h2>
  <div class="flex justify-center mt-8">
    <img
      src="/images/rewards.png"
      alt="First place gets IDR 15,000,000. Second place gets IDR 5,000,000. Third place gets IDR 10,000,000."
      class=""
    />
  </div>
  <ul
    class="text-center font-montserrat font-light leading-8 mt-6 md:mt-8 md:text-xl md:leading-10"
  >
    <li>4-5th place: IDR 2,000,000</li>
    <li>6th place: IDR 1,000,000</li>
  </ul>
  <h3 class="text-center mt-8">Weekly Prizes (5 weeks):</h3>
  <ul
    class="text-center font-montserrat font-light leading-8 md:text-xl md:leading-10"
  >
    <li>1st place: IDR 1,000,000</li>
    <li>2nd-3rd place: IDR 500,000</li>
  </ul>
  <div class="flex justify-center mt-4 md:mt-8">
    <SignUpButton signature />
  </div>
</Block>
