<script lang="ts">
    // Props의 타입을 정의합니다.
    interface Props {
        name: string;
        score?: number; // ?를 붙이면 '없어도 됨' 이라는 뜻입니다.
    }

    let { name, score = 0 }: Props = $props();

    name = "왕초보";
    score = 20;
    
</script>

<div>{name}님의 점수는 {score}점 입니다.</div>