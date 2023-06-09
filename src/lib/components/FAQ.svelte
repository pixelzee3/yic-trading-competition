<script>
  import Block from '$lib/components/Block.svelte';
  import SignUpButton from '$lib/components/SignUpButton.svelte';
</script>

<Block>
  <h2 class="text-4xl font-bold">Frequently Asked Questions</h2>
  <div class="mt-4 md:mt-8">
    <h3 class="font-bold textl-lg md:text-2xl">What is "trading"?</h3>
    <p class="md:text-xl">
      A maximum of one top up is allowed during the course of the competition
      and will not be counted towards return.
    </p>
    <h3 class="font-bold textl-lg md:text-2xl mt-4 md:mt-6">
      What exactly is a "trading competition"?
    </h3>
    <p class="md:text-xl">
      In a trading competition, you compete against other participants for the
      most percentage profit.
      <br />
      The prizes are divided into weekly prizes and the final prize. As their name
      indicates, the weekly prizes are awarded at the end of each week during the
      competition to the participants with the three highest percentage returns.
      The final prizes are given at the end of the competition.
    </p>
    <h3 class="font-bold textl-lg md:text-2xl mt-4 md:mt-6">
      Do I have to pay for signups?
    </h3>
    <p class="md:text-xl">
      You have to make a deposit, but not an entrance fee. The initial deposit
      is the money that you will trade with throughout the competition. However,
      you will keep whatever money that you deposit and end with at the end of
      the competition. You are the owner of your own money, therefore this
      initial deposit is not an entrance fee.
    </p>
  </div>
  <SignUpButton class="mt-4 md:mt-8" signature />
</Block>
