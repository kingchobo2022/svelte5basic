<script>
    import { page } from '$app/state';
</script>

<div class="error-container">
    <h1>에구구 문제가 생겼어요.</h1>
    <p>상태 코드 : {page.status}</p>
    <p>에러 메시지 : {page.error?.message}</p>
    <a href="/">홈으로 안전하게 돌아가기</a>
</div>

<style>
    .error-container{ text-align: center; padding: 50px; }
    h1 {color: tomato; }
</style>