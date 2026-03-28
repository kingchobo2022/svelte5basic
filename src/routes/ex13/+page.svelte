<script>
    let users = $state([
        { name: '강백호', role: '포워드' },
        { name: '서태웅', role: '에이스' }
    ]);
</script>

{#snippet userCard(user)}
    <div class="user-box">
        <strong>{user.name}</strong> - <span>{user.role}</span>
    </div>
{/snippet}

<h1>팀 명단</h1>
{#each users as u}
    {@render userCard(u)}
{/each}

<style>
    .user-box { border: 1px solid blue; padding: 5px; margin: 5px; }
</style>