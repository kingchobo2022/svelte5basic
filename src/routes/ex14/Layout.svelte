<script>
    let { header, children } = $props();
</script>

<header>{@render header()}</header>
<main>{@render children()}</main>
