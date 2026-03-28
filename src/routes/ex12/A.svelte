<script>
    import { myCounter } from '$lib/counter.svelte.js';
</script>

<div class="box">
    <p>여기는 A 컴포넌트</p>
    <p>공용 숫자 :  { myCounter.count } </p>
    <button onclick={ () => myCounter.increment() }>올리기</button>
</div>
