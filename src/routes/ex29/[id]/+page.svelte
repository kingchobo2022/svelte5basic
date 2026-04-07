<script>
    let { data } = $props();

    let currentPost = $derived(data.post);
</script>

<h1>{currentPost.title}</h1>

<hr />

<p>{currentPost.content}</p>

<a href="/ex29/1">1번 글 보기</a>
<a href="/ex29/2">2번 글 보기</a>
