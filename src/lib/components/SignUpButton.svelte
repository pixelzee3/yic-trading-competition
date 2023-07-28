<script>
  let className = '';
  export let signature = false;
  export { className as class };
  import Button from './Button.svelte';
</script>

<a href="/signup">
  <Button class={className} {signature}>Sign up</Button>
</a>
