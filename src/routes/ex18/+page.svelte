<script>
    let user = $state({name : '홍길동', age: 20 });
    $inspect(user).with((type, value) => {
        console.log(`[상태변경 : ${type}] 데이터가 이렇게 바뀌었어요:`, value);
    });
</script>

<button onclick={() => user.age++}>나이 먹기</button>