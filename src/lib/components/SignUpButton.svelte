<script>
  let className = '';
  export let signature = false;
  export { className as class };
  import Button from './Button.svelte';
</script>

<Button class={className} {signature} href="/signup">Sign up</Button>
