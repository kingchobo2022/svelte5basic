<script>
    let active = $state(false);
</script>

<button class={active ? 'btn-active': 'btn-normal'} onclick={() => active = !active}>
    {active ? 'ON': 'OFF'}
</button>

<h1>안녕하세요.</h1>

<style>
    .btn-normal{ background-color: gray; color: white; transition: 0.3s;}
    .btn-active{ background-color: royalblue; color: white; transform: scale(1.1);}
    button{ padding: 10px 20px; border: none; cursor: pointer; border-radius: 5px; }

    :global(body){
        
    }
</style>