<script>
    let dollars = $state(1); // 원본 데이터
    const exchangeRate = 1300;

    let won = $derived(dollars * exchangeRate);
    let numbers = $state([1, 2, 3, 4, 5]);

    let totalStatus = $derived.by(() => {
        const sum = numbers.reduce((a, b) => a + b, 0);
        return sum > 100 ? '목표 달성!' : `아직 부족해요 (${sum}/100)`;
    });
</script>

<input type="number" bind:value={dollars} /> 달러는
<p>현재 환율로 <strong>{won}원</strong>입니다.</p>


<p>상태 : {totalStatus}</p>
<button onclick={() => numbers.push(20)}>20 더하기</button>