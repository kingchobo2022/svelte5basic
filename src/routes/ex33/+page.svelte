<script>
    let { data } = $props();
    let inputName = $state('');

    async function login() {
        if(!inputName) return alert('이름을 입력하세요!');

        const res = await fetch('/api/login2', {
            method: 'POST',
            body: JSON.stringify( {username: inputName }),
            headers: { 'Content-Type' : 'application/json'}
        });

        if (res.ok) {
            location.reload();
        }
    }

    async function logout() {
        const res = await fetch('/api/login2', {
            method: 'DELETE',
        });
        if( res.ok ) {
            location.reload();
        }
    }
</script>

<div style="padding: 20px; border:1px solid #ccc; border-radius: 8px; max-width: 400px; margin: 20px auto; ">
    <h2>세션 로그인 테스트</h2>
    {#if data.username}
        <p style="color: blue; font-weight: bold;">
            안녕하세요. {data.username}님! 접속중입니다.
        </p>
        <button onclick={logout} style="background-color:#ff4444; color:white; border:none; padding: 8px 16px; cursor:pointer">
            로그아웃
        </button>
    {:else}        
        <p style="color: gray;">현재 [손님] 상태입니다. 이름을 입력해 로그인하세요.</p>
        <input type="text" bind:value={inputName} placeholder="사용자 이름 입력" style="padding:8px; width: 60%">
        <button onclick={login} style="padding: 8px 16px; cursor:pointer">로그인</button>
    {/if}
</div>
