<script>
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let items = $state([
        { id: 1, text: '🍎 사과 구매하기'},
        { id: 2, text: '🧹 방 청소하기'},
        { id: 3, text: '🏃‍♂️ 30분 달리기'},
        { id: 4, text: '📖 책 읽기'},
        { id: 5, text: '🎸 기타 연습하기'}
    ]);

    const removeItem = (id) => {
        items = items.filter(item => item.id !== id);
    }
</script>

<main>
    <h2>오늘의 할일</h2>
    <div class="list-container">
        {#each items as item (item.id)}
            <div class="item" animate:flip={{ duration: 400 }} out:fade={{ duration: 200 }}>
                <span>{item.text}</span>
                <button onclick={() => removeItem(item.id)}>삭제</button>
            </div>
        {/each}
    </div>
</main>

<style>
.list-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    margin-top: 20px;
}    
.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #eee;
}
button {
    background: #ffeded;
    color: #ff4444;
    border: 1px solid #ffcccc;
    padding: 4px 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
}
button:hover {
    background: #ff4444;
    color: white;
}
</style>