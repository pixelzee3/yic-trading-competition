<script>
  let classname = '';
  export {classname as class}
</script>

<div class={"px-8 w-full " + classname}>
  <slot />
</div>