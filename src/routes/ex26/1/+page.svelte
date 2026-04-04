<script>
    let data = $state('로딩 중...');

    // $effect는 컴포넌트가 화면에 완전히 나타난 뒤 실행됩니다.
    $effect(() => {
        console.log("컴포넌트가 마운트되었습니다!");

        setTimeout(() => {
            data = "서버에서 가져온 소중한 데이터";
        }, 1500);
    });
</script>

<h1>{data}</h1>