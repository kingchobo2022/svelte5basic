<script>
    let isOpen = $state(true);

    function clickOutside(node, handler) {
        const onClick = (event) => {
            if(!node.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener('click', onClick);

        return {
            destroy() {
                document.removeEventListener('click', onClick);
            }
        };

    }
</script>

{#if isOpen}
    <div use:clickOutside={() => isOpen = false} style="padding:20px; border: 1px solid black;">
        안녕! 제 바깥을 누르면 제가 사라져요.
    </div>
{/if} 