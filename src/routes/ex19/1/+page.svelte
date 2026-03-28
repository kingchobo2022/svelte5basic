<script>
    import { fade } from 'svelte/transition';
    let visible = $state(true);
</script>

<button onclick={() => visible = !visible}>
    {visible ? '숨기기' : '보이기'}
</button>

{#if visible}
    <h1 transition:fade>안녕하세요, 스벨트입니다!</h1>
{/if}