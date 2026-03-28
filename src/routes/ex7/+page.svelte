<script>
    let count = $state(0);

    $effect(() => {
        console.log(`현재 숫자는 ${count}입니다.`);
        if(count > 0 && count % 5 === 0) {
            alert("5단위 달성! 축하합니다.");
        }
    });
</script>

<button onclick={() => count++ }>숫자 올리기 : {count}</button>