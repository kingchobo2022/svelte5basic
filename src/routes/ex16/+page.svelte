<script>
    import CustomButton from './CustomButton.svelte';
    let count = $state(0);
</script>

<h1>카운트 : {count}</h1>
<CustomButton onclick={ () => count++ }>
    숫자 올리기
</CustomButton>