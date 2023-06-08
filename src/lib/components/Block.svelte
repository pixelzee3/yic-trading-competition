<script>
  let classname = '';
  export let novpadding = false;
  export { classname as class };
</script>

<div class="flex justify-center" class:py-16={!novpadding} class:md:py-20={!novpadding}>
  <div class={'px-8 md:px-16 lg:px-20 max-w-4xl w-full ' + classname}>
    <slot />
  </div>
</div>
