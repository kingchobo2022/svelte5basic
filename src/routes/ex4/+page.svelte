<script>
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve('데이터 로딩 완료!'), 2000);
    });
</script>

{#await promise}
    <p>⌛ 데이터를 블러오는 중입니다..</p>
{:then value}
    <p>✅ {value}</p>
{:catch error}
    <p>❌ 에러 발생: {error.message}</p>
{/await}

