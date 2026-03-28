<script>
    let fruits  = $state(['사과', '바나나', '포도', '참외']);
    let products = $state([
        { id: 1, name: '노트북', price: 1000000},
        { id: 2, name: '마우스', price: 30000},
        { id: 3, name: '키보드', price: 50000}
    ]);
</script>


{#each products as product, i (product.id)}
    <p>{i + 1}번 {product.id} 상품: {product.name} (가격: {product.price}원)</p>
{/each}

<ul>
    {#each fruits as fruit}
        <li>{fruit} 맛있다!</li>
    {:else}    
        <li>과일이 없어요.</li>
    {/each}
</ul>
