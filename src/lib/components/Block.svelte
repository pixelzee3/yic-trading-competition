<script>
  let classname = '';
  export {classname as class}
</script>

<div class="flex justify-center">
  <div class={"px-8 md:px-12 lg:px-20 max-w-4xl w-full " + classname}>
    <slot />
  </div>
</div>