<script>
    let isLogin = $state(false);
</script>

<button onclick={ () => isLogin = !isLogin }>
    {isLogin ? "로그아웃" : "로그인"}
</button>

{#if isLogin}
<h2>환영합니다. 회원님!</h2>
{:else}
<h2>먼저 로그인을 해주세요.</h2>
{/if}
