<script>
    let user = $state({
       name: '왕초보',
       info: {
            city: '서울',
            points: 100
       } 
    });

    function upDateCity() {
        // 아주 깊숙한 곳의 값을 그냥 바꿉니다!
        user.info.city = '부산';
    }
</script>

<h1>이름 : {user.name}</h1>
<p>거주지 : {user.info.city}</p>
<p>포인트 : {user.info.points}</p>
<button onclick={upDateCity}>부산으로 이사 가기</button>