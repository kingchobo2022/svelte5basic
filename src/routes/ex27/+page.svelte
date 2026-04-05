<script>
    let isMuted = $state(false);
</script>

<button onclick={() => isMuted = !isMuted}>
    {isMuted ? '🔇' : '🔊'}
</button>

<button onclick={() => isMuted = !isMuted} aria-label={isMuted ? "음소거 해제" : "음소거 하기"}>
    {isMuted ? '🔇' : '🔊'}
</button>
