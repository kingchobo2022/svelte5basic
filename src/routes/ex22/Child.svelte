<script>
    import { getContext } from "svelte";

    // 3. 부모가 붙인 이름표로 데이터 찾아오기
    const theme = getContext('theme-context');
</script>

<div style="background-color: {theme.isDark ? '#333' : '#fff'}; 
color: {theme.isDark ? '#fff' : '#333'}; padding: 10px;">

    <h3>여기는 자식 컴포넌트입니다!</h3>
    <p>현재 테마 색상 : {theme.color}</p>

</div>