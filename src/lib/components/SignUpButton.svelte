<script>
  import Button from './Button.svelte';
  function onclick() {
    window.open('https://youtu.be/dQw4w9WgXcQ', '__blank');
  }
</script>

<Button {onclick}>Sign up</Button>
