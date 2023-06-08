<script>
  let className = '';
  export { className as class };
  export let onclick = () => {};
</script>

<button
  class={'bg-white font-bold font-montserrat rounded-lg text-lg tracking-wide border-black border-4 text-black py-2 px-6 ' +
    className}
  on:click={onclick}
>
  <slot />
</button>
