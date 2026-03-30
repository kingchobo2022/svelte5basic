<script>
    import BaseCard from './BaseCard.svelte';
</script>

<BaseCard>
    {#snippet header()}
        <h3>뉴스 공지사항</h3>
    {/snippet}

    <p>스벨트 5의 스니펫 기능은 정말 강력합니다!. 레이아웃 짜기가 너무 쉬워졌어요.</p>

    {#snippet footer()}
        <button style="color: red;">자세히 보기</button>
        <button>닫기</button>
    {/snippet}
</BaseCard>
