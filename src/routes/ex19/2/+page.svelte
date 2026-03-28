<script>
    import { fly, slide, fade } from 'svelte/transition';
    let showMenu = $state(false);
</script>

<button onclick={() => showMenu = !showMenu}>메뉴 토글</button>

{#if showMenu}
    <div transition:slide class="menu">
        <p>홈</p>
        <p>마이페이지</p>
        <p>설정</p>
        
    </div>
    <p in:fly={{ x: -100}} out:fade>나타날 땐 날아서, 사라질 땐 서서히...</p>
{/if}

<style>
    .menu { background: #eee; padding: 10px; margin-top: 10px;}
</style>