<script>
	// props 를 통해서 children 스니펫을 받아옵니다.
	let { children } = $props();
</script>
<nav>
	<a href="/">홈</a>
	<a href="/about">소개</a>
  <a href="/ex23">스니펫 레이아웃</a>
</nav>



<hr />
{#if children}
	{@render children()}
{/if}
<hr />


<style>
  nav {
    padding: 1rem;
    background-color: #f4f4f4;
  }
  nav a {
    margin-right: 15px;
    text-decoration: none;
    font-weight: bold;
    color: #ff3e00;
  }
  footer {
    text-align: center;
    font-size: 0.8rem;
    color: gray;
  }

  :global(h1){ color : red ; }

</style>