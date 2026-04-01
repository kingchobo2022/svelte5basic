<script>
    let inputRef; // HTML 요소를 담을 변수

    function handleSumit() {
        const value = inputRef.value;
        alert(`제출된 내용: ${value}`);
        inputRef.value = ""; 
        inputRef.focus(); 
    }
</script>

<input type="text" bind:this={inputRef} placeholder="여기에 입력..." />

<button onclick={handleSumit}>전송</button>


