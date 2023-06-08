<script>
  let className = '';
  export { className as class };
  import Button from './Button.svelte';
  function onclick() {
    window.open('https://youtu.be/dQw4w9WgXcQ', '__blank');
  }
</script>

<Button {onclick} class={className}>Sign up</Button>
