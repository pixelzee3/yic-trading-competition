<script>
  let className = '';
  export let signature = false;
  export { className as class };
  import Button from './Button.svelte';
  function onclick() {
    window.open('https://forms.gle/wNGic7o7ViNqgjYp9', '__blank');
  }
</script>

<Button {onclick} class={className} {signature}>Sign up</Button>
