<script>
  let className = '';
  export let signature = false;
  export let href = '';
  export let target = '';
  export { className as class };

  const defaultClasses =
    'inline-block border-black focus:border-signature font-bold font-montserrat rounded-lg text-lg tracking-wide border-4 text-black py-2 px-6 ';
</script>

{#if href}
  <a
    class={defaultClasses + className}
    class:bg-white={!signature}
    class:bg-signature={signature}
    {href}
    {target}
  >
    <slot />
  </a>
{:else}
  <button
    class={defaultClasses + className}
    class:bg-white={!signature}
    class:bg-signature={signature}
  >
    <slot />
  </button>
{/if}
