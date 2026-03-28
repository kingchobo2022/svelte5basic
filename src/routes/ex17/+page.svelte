<script>
    let count = $state(1);
    let selected = $state('blue');
</script>

<input type="number" bind:value={count} min="1" max="10" />
<select bind:value={selected}>
    <option value="red">빨강</option>
    <option value="blue">파랑</option>
</select>

<div style="width:50px; height:50px; background: {selected}; margin-top:50px;">
    {count}
</div>