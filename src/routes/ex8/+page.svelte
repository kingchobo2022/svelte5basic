<script>
    let count = $state(0);

    $effect(() => {
        const saved = localStorage.getItem('my-count');
        if(saved) {
            count = Number(saved);
        }
    });

    $effect(() => {
        localStorage.setItem('my-count', count);
    });
</script>

<h1>새로 고침해도 유지되는 숫자: {count}</h1>
<button onclick={() => count++}>더하기</button>
<button onclick={() => count = 0 }>초기화</button>