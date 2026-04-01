<script>
  // 입력창을 제어하는 액션 함수
  function uppercase(node) {
    const handleInput = () => {
      node.value = node.value.toUpperCase();
    };

    node.addEventListener('input', handleInput);

    return {
      destroy() {
        node.removeEventListener('input', handleInput);
      }
    };
  }

  let username = $state("");
</script>

<label>
  아이디(대문자 자동변환):
  <input type="text" use:uppercase bind:value={username} />
</label>
<p>저장될 아이디: {username}</p>