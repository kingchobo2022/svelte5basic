<script>
    let todos = $state([
        {id: 1, text: '스벨트 공부하기', done: false}
    ]);

    function toggleTodo(id) {
        const todo = todos.find(t => t.id === id);
        if ( todo ) {
            todo.done = !todo.done;
        }
    }  
</script>

{#each todos as todo}
    <li style="text-decoration:{todo.done ? 'line-through' : 'none' }">
        {todo.text}
        <button onclick={ () => toggleTodo(todo.id)}>{todo.done ? '취소' : '완료'}</button>
    </li>
{/each}
