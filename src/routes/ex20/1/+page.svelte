<script>
    import { flip } from 'svelte/animate';
    let list = $state([1, 2, 3, 4, 5]);

    function shuffle() {
        list = list.sort(() => Math.random() - 0.5 );  
    }
</script>

<button onclick={shuffle}>순서 섞기</button>

<div class="container">
    {#each list as item (item)}
        <div animate:flip={{ duration: 500 }} class="box">
            {item}
        </div>
    {/each}
</div>


<style>
.container {display: flex; gap: 10px; margin-top: 20px; }    
.box {width: 50px; height: 50px; background: tomato; 
    color: white; display: grid; place-items: center; border-radius: 8px; }
</style>