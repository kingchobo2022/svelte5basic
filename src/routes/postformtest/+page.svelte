<script>
    let a = 0;
    let b = 0;
    let status = '';

    async function handleSubmit() {
        const payload = { a, b};
        console.log('데이터 타입 확인: ', typeof a, typeof b);

        try {
            const response = await fetch('/api/add', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(payload)
            });
            status = response.ok ? '전송 성공!' : '전송 실패';
        } catch (e) {
            status = '에러 발생';
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    a: <input type="number" bind:value={a} /> <br>
    b: <input type="number" bind:value={b} /> <br>
    <button type="submit">숫자 데이터 전송</button>
</form>

<p>현재 데이터 상태 : {JSON.stringify({a, b})}</p>