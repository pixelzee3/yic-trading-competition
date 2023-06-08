<script>
  let classname = '';
  export let vpadding = false;
  export { classname as class };
</script>

<div class="flex justify-center" class:py-20={vpadding} class:md:py-24={vpadding}>
  <div class={'px-8 md:px-12 lg:px-20 max-w-4xl w-full ' + classname}>
    <slot />
  </div>
</div>
