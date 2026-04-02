<script>
    let formData = $state({
        email: '',
        city: '서울',
        isAgreed: false
    });
    
    function sendData() {
        console.log("서버로 보낼 데이터: ", formData);
        alert('가입 완료!');
    }
</script>

<form onsubmit={(e) => { e.preventDefault(); sendData(); }}>
    <input type="email" bind:value={formData.email} placeholder="이메일" required>

    <select bind:value={formData.city}>
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="제주">제주</option>
    </select>

    <label>
        <input type="checkbox" bind:checked={formData.isAgreed}> 약관 동의
    </label>

    <button type="submit" disabled={!formData.isAgreed}>가입하기</button>
</form>

