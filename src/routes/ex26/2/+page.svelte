<script>
    let seconds = $state(0);

    $effect(() => {
        const interval = setInterval(() => {
            seconds++;
            console.log("타이머 작동 중...", seconds);
        }, 1000);

        //[중요] $effect에서 함수를 리턴하면, 컴포넌트가 사라질 때 실행됩니다!
        return () => {
            console.log("컴포넌트가 제거되었습ㄴ다. 타이머를 멈춥니다.");
            clearInterval(interval);
        }
    });
</script>

<div class="timer">
    <h2>실행 시간 : {seconds}초</h2>
</div>