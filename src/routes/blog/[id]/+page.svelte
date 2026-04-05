<script>
    // SvelteKit에서 현재 페이지 정보를 가져오는 도구
    import { page } from '$app/state';

    let blogId = $derived(page.params.id);
</script>

<h1>블로그 상세 페이지</h1>

<p>현재 보고 계신 글 번호는 <strong>{blogId}</strong>번입니다.</p>

<a href="/">목록으로 돌아가기</a>