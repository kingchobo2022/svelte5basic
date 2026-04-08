<script>
  let a = 0; // 숫자로 초기화
  let b = 0;
  let status = '';

  async function handleSubmit() {
    // 여기서 a와 b는 이미 숫자 타입입니다.
    const payload = { a, b };
    console.log('데이터 타입 확인:', typeof a, typeof b); 

    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      status = response.ok ? '전송 성공!' : '전송 실패';
    } catch (e) {
      status = '에러 발생';
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    A: <input type="number" bind:value={a} />
  </div>

  <div>
    B : <input type="number" bind:value={b} />
  </div>

  <button type="submit">숫자 데이터 전송</button>
</form>

<p>현재 데이터 상태: {JSON.stringify({a, b})}</p>