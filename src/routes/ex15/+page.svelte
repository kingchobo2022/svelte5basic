<script>
    let message = $state('대기 중....');
    let inputValue = $state('');

    function handleClick() {
        message = '버튼이 클릭되었습니다!';
    }

    function handleInput(e) {
        inputValue = e.target.value;
    }
</script>

<p>상태 : {message}</p>
<button onclick={handleClick}>클릭하세요</button>

<hr />

<p>입력한 내용: {inputValue}</p>
<input type="text" oninput={handleInput} placeholder="아무거나 입력" />


