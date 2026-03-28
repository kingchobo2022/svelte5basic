<script>
    let count = $state(0);

    function increment() {
        count += 1;
    }
</script>

<button onclick={increment}>
    현재 클릭 횟수 : {count}
</button>

{#if count >= 5}
<p>와! 벌써 5번이나 클릭하셨네요? </p>
{/if}