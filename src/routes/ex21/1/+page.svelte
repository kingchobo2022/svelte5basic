<script>
    let title = $state("수정할 제목");

    // 액션 함수 정의
    function autofocus(node) {
        node.focus(); // 요소가 나타나자마자 포커스!
       // node.select(); // 텍스트가 있다면 텍스트를 전체 선택!
    }
</script>

<input use:autofocus value={title} />