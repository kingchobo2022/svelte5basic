<script>
    import { setContext } from 'svelte';
    import Child from './Child.svelte';

    // 1. 공유할 반응형 상태 만들기
    let theme = $state({
        color: 'royalblue',
        isDark: false
    });

    // 2. 컨텍스트에 이름표를 붙여서 저장하기
    setContext('theme-context', theme); // 
</script>

<div>
    <h1>부모 컴포넌트</h1>
    <button onclick={() => theme.isDark = !theme.isDark}>테마 변경하기</button>

    <Child />
</div>