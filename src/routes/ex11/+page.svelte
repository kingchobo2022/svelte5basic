<script>
    import Card from './Card.svelte';
    const hong = { name: "홍길순" , job : "변호사" }
</script>

<h1>우리 팀 멤버 소개</h1>

<Card {...hong} />
<Card name="홍길동" job="의적" />
<Card name="심청이" job="효녀" />
<Card name="임꺽정" />
