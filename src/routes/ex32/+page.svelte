<script>
    async function login() {
        await fetch('/api/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ username: '홍길동', age: '19'})
        });
    }

    async function logout() {
        await fetch('/api/logout', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ username: '홍길동', age: '19'})
        });
    }

</script>

<button onclick={login}>브라우저에서 로그인 실행</button>
<button onclick={logout}>브라우저에서 로그아웃 실행</button>