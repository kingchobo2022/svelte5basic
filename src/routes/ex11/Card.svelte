<script>
    let {name, job = '무직'} = $props();
</script>

<div class="card">
    <h3>이름 : {name}</h3>
    <p>직업 : {job}</p>
</div>

<style>
    .card {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 5px;
        border-radius: 8px;
    }
</style>