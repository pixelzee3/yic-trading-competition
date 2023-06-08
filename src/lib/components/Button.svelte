<script>
  let className = '';
  export let signature = false;
  export { className as class };
  export let onclick = () => {};
</script>

<button
  class={'font-bold font-montserrat rounded-lg text-lg tracking-wide border-black border-4 text-black py-2 px-6 ' +
    className}
  on:click={onclick}
  class:bg-white={!signature}
  class:bg-signature={signature}
>
  <slot />
</button>
