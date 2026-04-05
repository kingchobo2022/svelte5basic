<script lang="ts">
    // 1. 데이터의 설계도를 만듭니다.
    interface User {
        name: string;
        age: number;
        isAdmin: boolean;
    }

    // 2. 변수 뒤에 :타입이름 을 붙여줍니다.
    let user = $state<User>({
        name: '왕초보',
        age: 20,
        isAdmin: false
    });
</script>

